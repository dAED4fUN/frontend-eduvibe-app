'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/core/auth/useAuth';
import { mainNavConfig, adminNavConfig } from '@/config/navigation';
import { cn } from '@/shared/utils/cn';

export function Sidebar({ isAdminPanel = false }: { isAdminPanel?: boolean }) {
  const pathname = usePathname();
  const { user } = useAuth();

  if (!user) return null;

  const config = isAdminPanel ? adminNavConfig : mainNavConfig;
  const navItems = config.filter(item => !item.requiredRole || item.requiredRole.includes(user.role));

  return (
    <div className="w-64 bg-white border-r h-screen fixed left-0 top-0 flex flex-col z-50">
      <div className="h-16 flex items-center px-6 border-b">
        <Link href={isAdminPanel ? "/admin" : "/dashboard"} className="font-bold text-xl">
          {isAdminPanel ? "EduVibe Admin" : "EduVibe"}
        </Link>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-neutral-100 text-neutral-900"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t text-sm text-neutral-500">
        Logged in as {user.role}
      </div>
    </div>
  );
}
