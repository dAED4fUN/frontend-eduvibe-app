'use client';

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-bold">Profile</h1>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <Input defaultValue="Test Teacher" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input defaultValue="test@eduvibe.com" disabled />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            <textarea className="w-full min-h-[100px] p-3 rounded-md border text-sm" placeholder="Tell students about yourself..." />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
