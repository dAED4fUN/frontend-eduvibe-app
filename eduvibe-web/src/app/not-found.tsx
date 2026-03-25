import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-8xl font-black text-neutral-200">404</h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-neutral-500">The page you are looking for doesn&apos;t exist or has been moved.</p>
        <Button className="w-full">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
