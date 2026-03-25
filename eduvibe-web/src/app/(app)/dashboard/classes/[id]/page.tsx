'use client';

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import Link from 'next/link';

export default function EditClassPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Edit Class</h1>
        <Button variant="outline">
          <Link href="/dashboard/classes">Back to Classes</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Class Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Class Title</label>
            <Input defaultValue="Introduction to TypeScript" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea className="w-full min-h-[150px] p-3 rounded-md border text-sm" defaultValue="Learn the basics of TypeScript..." />
          </div>
          <div className="flex justify-end pt-4 border-t">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
