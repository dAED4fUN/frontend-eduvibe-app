import { ReactNode } from 'react';
import Link from 'next/link';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">EduVibe</Link>
          <nav className="flex gap-6">
            <Link href="/teachers" className="text-sm font-medium hover:text-primary">Teachers</Link>
            <Link href="/classes" className="text-sm font-medium hover:text-primary">Classes</Link>
            <Link href="/login" className="text-sm font-medium hover:text-primary">Log In</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-neutral-50 border-t py-12">
        <div className="container mx-auto px-4 text-center text-neutral-500">
          <p>© {new Date().getFullYear()} EduVibe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
