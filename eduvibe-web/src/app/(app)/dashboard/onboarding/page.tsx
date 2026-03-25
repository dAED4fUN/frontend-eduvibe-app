'use client';

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/shared/components/ui/card';

export default function OnboardingPage() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto py-12">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Complete your profile</h1>
        <p className="text-neutral-500">Before you can create classes, we need a bit more info.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Step 1: Qualifications</CardTitle>
          <CardDescription>Upload your relevant degrees or certifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed rounded-lg p-12 text-center text-neutral-500">
            Drag and drop files here, or click to upload
          </div>
          <div className="flex justify-end">
            <Button>Next Step</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
