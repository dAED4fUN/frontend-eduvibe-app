# EduVibe Frontend — Implementation Plan

**Stack:** Next.js 15 (App Router) · Tailwind CSS · shadcn/ui · TanStack Query · React Hook Form

---

## Folder Structure

```
eduvibe-web/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx                    ← Landing
│   │   │   ├── teachers/
│   │   │   │   ├── page.tsx                ← Public teacher search (ISR)
│   │   │   │   └── [id]/page.tsx           ← Public teacher profile (ISR)
│   │   │   ├── classes/
│   │   │   │   ├── page.tsx                ← Public class listings (ISR)
│   │   │   │   └── [id]/page.tsx           ← Public class detail (ISR)
│   │   │   └── layout.tsx                  ← Marketing navbar + footer
│   │   │
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   ├── signup/page.tsx
│   │   │   ├── forgot-password/page.tsx
│   │   │   ├── reset-password/page.tsx
│   │   │   └── layout.tsx                  ← Centered card layout
│   │   │
│   │   ├── (app)/
│   │   │   ├── layout.tsx                  ← Auth gate + providers
│   │   │   │
│   │   │   ├── dashboard/                  ← Teacher + Student shared panel
│   │   │   │   ├── layout.tsx              ← Sidebar + topbar
│   │   │   │   ├── page.tsx                ← Role-adaptive home
│   │   │   │   ├── profile/page.tsx
│   │   │   │   ├── classes/
│   │   │   │   │   ├── page.tsx            ← Teacher: my classes | Student: enrolled
│   │   │   │   │   ├── [id]/page.tsx
│   │   │   │   │   └── create/page.tsx     ← Teacher only
│   │   │   │   ├── students/page.tsx       ← Teacher only
│   │   │   │   ├── teachers/page.tsx       ← Student only
│   │   │   │   ├── enrollments/page.tsx    ← Student only
│   │   │   │   └── onboarding/page.tsx     ← Teacher only (multi-step)
│   │   │   │
│   │   │   └── admin/
│   │   │       ├── layout.tsx
│   │   │       ├── page.tsx                ← Admin dashboard
│   │   │       ├── users/
│   │   │       │   ├── page.tsx
│   │   │       │   └── [id]/page.tsx
│   │   │       ├── verifications/
│   │   │       │   ├── page.tsx
│   │   │       │   └── [id]/page.tsx
│   │   │       └── domains/
│   │   │           ├── page.tsx
│   │   │           └── [id]/page.tsx
│   │   │
│   │   ├── api/auth/refresh/route.ts       ← Token refresh proxy (httpOnly cookie)
│   │   ├── not-found.tsx
│   │   ├── unauthorized.tsx
│   │   ├── error.tsx
│   │   └── layout.tsx                      ← Root layout (fonts, providers)
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/                 ← LoginForm, SignupForm
│   │   │   ├── hooks/                      ← useLogin, useSignup, useLogout
│   │   │   ├── api/                        ← auth.api.ts
│   │   │   └── types.ts
│   │   ├── teacher/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── api/
│   │   │   └── types.ts
│   │   ├── student/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── api/
│   │   │   └── types.ts
│   │   ├── classes/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── api/
│   │   │   └── types.ts
│   │   ├── enrollment/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── api/
│   │   │   └── types.ts
│   │   └── admin/
│   │       ├── users/
│   │       ├── verifications/
│   │       └── domains/
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   ├── ui/                         ← Button, Input, Badge, Avatar, Card, Skeleton
│   │   │   ├── layout/                     ← Sidebar, Topbar, PageHeader
│   │   │   ├── data-display/               ← DataTable, StatCard, EmptyState
│   │   │   ├── feedback/                   ← Toast, Modal, ConfirmDialog
│   │   │   └── upload/                     ← FileUploader
│   │   ├── hooks/
│   │   │   ├── useDebounce.ts
│   │   │   └── usePagination.ts
│   │   └── utils/
│   │       ├── formatters.ts
│   │       └── cn.ts
│   │
│   ├── core/
│   │   ├── api/
│   │   │   ├── client.ts                   ← Base fetch wrapper (auth headers, 401 retry)
│   │   │   └── queryClient.ts              ← TanStack Query config
│   │   ├── auth/
│   │   │   ├── AuthProvider.tsx
│   │   │   ├── useAuth.ts
│   │   │   └── tokenManager.ts
│   │   ├── rbac/
│   │   │   ├── permissions.ts              ← Role → permission map
│   │   │   └── usePermissions.ts
│   │   └── providers/
│   │       └── AppProviders.tsx
│   │
│   ├── middleware.ts                        ← Edge middleware (route protection)
│   ├── config/
│   │   └── navigation.ts                   ← Nav items per role
│   └── styles/
│       └── globals.css
│
├── .env.local
├── .env.example
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Architecture Decisions

| Decision | Choice | Reason |
|---|---|---|
| Rendering — public pages | ISR | SEO for teacher/class listings |
| Rendering — dashboard/admin | CSR | Auth-gated, personalized, no SEO value |
| Token storage | Access token in memory, refresh token in `httpOnly` cookie | XSS-safe; JS cannot read the refresh token |
| Server state | TanStack Query | Caching, deduplication, loading/error states out of the box |
| Forms | React Hook Form | Minimal re-renders, good for multi-step onboarding |
| Styling | Tailwind + shadcn/ui | Fast to build, accessible primitives, owned code |
| API layer | Feature-scoped service functions + hooks | Single source of truth per endpoint |
| RBAC | Centralized permissions map + `usePermissions` hook | No scattered `role === 'x'` conditionals |

---

## Auth Flow

1. On login → backend returns `accessToken` (15 min) + sets `httpOnly` cookie for refresh token
2. `accessToken` stored in-memory inside `AuthProvider` only — never `localStorage`
3. On every app mount → call `/api/auth/refresh` (Next.js Route Handler proxy) → silently restore access token from cookie
4. On `401` response → API client auto-calls refresh → retries original request once → if refresh fails, redirect to `/login`
5. On logout → call backend logout + clear cookie via proxy + clear in-memory state

**Edge Middleware** checks for a lightweight `auth-present` (non-httpOnly) cookie to redirect unauthenticated users before any page renders. Actual JWT verification is the backend's responsibility.

### Role Routing

| Role | Default after login |
|---|---|
| `admin` | `/admin` |
| `teacher` | `/dashboard` |
| `student` | `/dashboard` |

---

## RBAC Strategy

All permission checks go through `usePermissions()` — components never check `role === 'x'` directly.

```
permissions.ts defines:
  admin:   { canVerifyTeachers, canManageDomains, canBanUsers, canViewAllUsers }
  teacher: { canCreateClass, canViewStudents, canUploadVideo, canOnboard }
  student: { canEnroll, canBrowseTeachers, canSubmitFeedback }
```

Three layers of enforcement:

- **Middleware** — Panel-level redirect (wrong role hits `/admin` → redirect to `/dashboard`)
- **Layout** — Section-level guard (teacher hits student-only route → renders `<ForbiddenPage />`)
- **Component** — Element-level (`permissions.canCreateClass` controls button visibility)

Navigation items in `config/navigation.ts` carry a `requiredPermission` field. The `<Sidebar />` filters the list — no conditionals inside the component itself.

---

## API Layer Pattern

```
Page/Component
  → Feature hook  (features/classes/hooks/useClasses.ts)
    → TanStack Query  (useQuery / useMutation)
      → API service function  (features/classes/api/classes.api.ts)
        → core/api/client.ts  (base fetch + auth headers + error handling)
          → Backend
```

- Pages and components never call API functions directly
- API service functions are the only place that knows endpoint strings
- Errors are normalized at the client level into `{ message, statusCode }` — components receive a consistent shape regardless of the error source

### Pagination

All list endpoints use `?page=1&limit=20`. Page state lives in URL search params (not local state) so filtered/paginated URLs are shareable and browser navigation works correctly.

---

## Shared vs. Role-Specific Components

| Type | Location | Example |
|---|---|---|
| Primitive | `shared/components/ui/` | `Button`, `Input`, `Badge` |
| Composite | `shared/components/` | `DataTable`, `FileUploader`, `StatCard` |
| Role-aware | `features/[feature]/components/` | `ClassDetailActions` (renders different buttons per role) |
| Role-exclusive | `features/[feature]/components/` | `TeacherOnboardingWizard`, `AdminVerificationQueue` |

Role-aware components receive context via `usePermissions()` internally. Callers pass no role prop — the component decides its own rendering.

---

## Environment Variables

```bash
# Public (browser-safe)
NEXT_PUBLIC_API_BASE_URL=https://api.eduvibe.com/api/v1
NEXT_PUBLIC_IK_PUBLIC_KEY=                        # ImageKit — direct video upload only
NEXT_PUBLIC_IK_URL_ENDPOINT=https://ik.imagekit.io/your_id
```

Add `ik.imagekit.io` to `next.config.ts` as an allowed remote image domain so Next.js `<Image />` can optimize CDN-served photos.

---

## Deliverables by Week

### Week 1 — Foundation
- Next.js project setup with TypeScript, Tailwind, shadcn/ui
- Full folder structure scaffolded (empty files/pages)
- `core/api/client.ts` — base fetch wrapper
- `core/providers/AppProviders.tsx` — provider composition
- Root layout and route group layouts (marketing, auth, app, admin)
- `.env.example` with all required variables

### Week 2 — Auth
- `AuthProvider` with in-memory token + httpOnly cookie strategy
- `/api/auth/refresh` Route Handler proxy
- Edge middleware for route protection and role-based redirects
- Login, Signup, Forgot Password, Reset Password pages + forms
- `useAuth` hook and `tokenManager`

### Week 3 — Teacher Profile & Onboarding
- Teacher profile view and edit page with photo upload
- `<FileUploader />` shared component (integrates with React Hook Form)
- Multi-step onboarding wizard (bio → qualifications → ID upload)
- Verification status banner in dashboard layout
- Teacher dashboard home with stats

### Week 4 — Classes
- Class create/edit form (teacher)
- My classes list page (teacher)
- Public class listings page (ISR)
- Public class detail page (ISR)
- Video direct-upload auth endpoint integration
- Class search and filter via URL params

### Week 5 — Student Panel
- Student profile view and edit
- Browse teachers page (ISR + client-side filter)
- Public teacher profile page
- Enrollment flow (enroll → confirmation → enrolled list)
- Feedback and rating submission

### Week 6 — Admin Panel + Polish
- Admin dashboard with platform stats
- User management — list, ban, suspend
- Verification queue — list pending, view with signed doc URL, approve/reject/reupload
- Domain management — CRUD with hierarchy (parent/sub-domain)
- `<ForbiddenPage />` and `<NotFoundPage />` polish
- E2E tests for auth, enrollment, and admin verification flows
- Staging deployment

---

## Key Pitfalls

- **Do not store tokens in `localStorage`** — use the in-memory + httpOnly cookie pattern from day one
- **Do not scatter `role === 'x'` checks** — route everything through `usePermissions()`
- **Do not skip ISR on public pages** — teacher profiles and class listings have direct SEO value
- **Do not put business logic in page files** — pages compose feature components only
- **Do not build one universal sidebar** — admin and dashboard sidebars should be separate components with separate nav configs