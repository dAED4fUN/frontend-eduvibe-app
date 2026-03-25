'use client';

import { useEffect } from 'react';
import { Button } from '@/shared/components/ui/button';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-8xl font-black text-red-200">Error</h1>
        <h2 className="text-3xl font-bold">Something went wrong</h2>
        <p className="text-neutral-500">We apologize for the inconvenience. Please try again.</p>
        <Button onClick={() => reset()} className="w-full">
          Try again
        </Button>
      </div>
    </div>
  );
}
