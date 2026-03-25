'use client';

import { useAuth } from '@/core/auth/useAuth';
import { Button } from '@/shared/components/ui/button';
import Link from 'next/link';

export default function ClassesPage() {
  const { user } = useAuth();
  const isTeacher = user?.role === 'teacher';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{isTeacher ? 'My Classes' : 'Enrolled Classes'}</h1>
        {isTeacher && (
          <Button>
            <Link href="/dashboard/classes/create">Create Class</Link>
          </Button>
        )}
      </div>

      <div className="border rounded-lg bg-white overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-neutral-50 text-neutral-500 uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Class Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Students</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {/* Mock Data */}
            <tr className="hover:bg-neutral-50">
              <td className="px-6 py-4 font-medium">Introduction to TypeScript</td>
              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">Published</span>
              </td>
              <td className="px-6 py-4">42</td>
              <td className="px-6 py-4">
                <Button variant="outline" size="sm">
                  <Link href="/dashboard/classes/1">Edit</Link>
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-neutral-50">
              <td className="px-6 py-4 font-medium">Advanced React Patterns</td>
              <td className="px-6 py-4">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">Draft</span>
              </td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">
                <Button variant="outline" size="sm">
                  <Link href="/dashboard/classes/2">Edit</Link>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
