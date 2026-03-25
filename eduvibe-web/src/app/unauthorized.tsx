import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-8xl font-black text-neutral-200">403</h1>
        <h2 className="text-3xl font-bold">Access Denied</h2>
        <p className="text-neutral-500">You do not have permission to view this page. Please contact your administrator if you believe this is a mistake.</p>
        <Button className="w-full">
          <Link href="/dashboard">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
