'use client';

import { Button } from '@/shared/components/ui/button';
import Link from 'next/link';

export default function AdminVerificationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Verification Queue</h1>
      <p className="text-neutral-500">Review teacher verification requests.</p>

      <div className="border rounded-lg bg-white overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-neutral-50 text-neutral-500 uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Teacher</th>
              <th className="px-6 py-4">Submitted At</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {/* Mock Data */}
            <tr className="hover:bg-neutral-50">
              <td className="px-6 py-4 font-medium">Bob Jones</td>
              <td className="px-6 py-4 text-neutral-500">Oct 24, 2023</td>
              <td className="px-6 py-4">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">Pending</span>
              </td>
              <td className="px-6 py-4">
                <Button size="sm">
                  <Link href="/admin/verifications/1">Review</Link>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
