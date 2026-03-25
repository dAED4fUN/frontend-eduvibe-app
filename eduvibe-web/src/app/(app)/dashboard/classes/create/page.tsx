'use client';

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import Link from 'next/link';

export default function CreateClassPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Create New Class</h1>
        <Button variant="outline">
          <Link href="/dashboard/classes">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Class Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Class Title</label>
            <Input placeholder="e.g. Introduction to Physics" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea className="w-full min-h-[150px] p-3 rounded-md border text-sm" placeholder="Describe what students will learn..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Price ($)</label>
              <Input type="number" placeholder="49.99" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Input placeholder="e.g. Science" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Cover Image</label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center text-neutral-500">
              Upload class cover image
            </div>
          </div>
          <div className="flex justify-end pt-4 border-t">
            <Button>Save Draft</Button>
            <Button className="ml-2 bg-green-600 hover:bg-green-700">Publish Class</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
