export type NavItem = {
  title: string;
  href: string;
  icon: string;
  requiredRole?: ('admin' | 'teacher' | 'student')[];
};

export const mainNavConfig: NavItem[] = [
  { title: 'Dashboard', href: '/dashboard', icon: 'Home', requiredRole: ['teacher', 'student'] },
  { title: 'My Classes', href: '/dashboard/classes', icon: 'BookOpen', requiredRole: ['teacher'] },
  { title: 'Enrolled Classes', href: '/dashboard/classes', icon: 'BookOpen', requiredRole: ['student'] },
  { title: 'My Students', href: '/dashboard/students', icon: 'Users', requiredRole: ['teacher'] },
  { title: 'Teachers', href: '/dashboard/teachers', icon: 'UserSearch', requiredRole: ['student'] },
];

export const adminNavConfig: NavItem[] = [
  { title: 'Overview', href: '/admin', icon: 'BarChart' },
  { title: 'Users', href: '/admin/users', icon: 'Users' },
  { title: 'Verifications', href: '/admin/verifications', icon: 'ShieldCheck' },
  { title: 'Domains', href: '/admin/domains', icon: 'Globe' },
];
