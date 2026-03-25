'use client';

import { useAuth } from '@/core/auth/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import Link from 'next/link';

export default function EnrollmentsPage() {
  useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Enrollments</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2].map((i) => (
          <Card key={i}>
            <div className="aspect-video bg-neutral-200"></div>
            <CardHeader>
              <CardTitle className="line-clamp-1">Introduction to Next.js</CardTitle>
              <p className="text-sm text-neutral-500">Instructor: Jane Doe</p>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-neutral-200 rounded-full h-2.5 mb-4">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: i === 1 ? '45%' : '100%' }}></div>
              </div>
              <div className="flex justify-between items-center text-sm mb-4">
                <span>{i === 1 ? '45% Complete' : 'Completed'}</span>
              </div>
              <Button className="w-full">
                <Link href={`/dashboard/classes/${i}`}>Continue Learning</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
