'use client';

import { Button } from '@/shared/components/ui/button';

export default function AdminDomainsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Domain Management</h1>
        <Button>Add Domain</Button>
      </div>

      <div className="border rounded-lg bg-white overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-neutral-50 text-neutral-500 uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Domain Name</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {/* Mock Data */}
            <tr className="hover:bg-neutral-50">
              <td className="px-6 py-4 font-medium">Computer Science</td>
              <td className="px-6 py-4 text-neutral-500">Parent</td>
              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">Active</span>
              </td>
              <td className="px-6 py-4">
                <Button variant="outline" size="sm">Edit</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
