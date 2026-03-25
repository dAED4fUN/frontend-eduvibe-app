import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default async function PublicClassDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id) notFound();

  return (
    <div className="bg-neutral-50 min-h-[calc(100vh-64px)] py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Complete Guide to Modern Web Development</h1>
            <p className="text-xl text-neutral-600">Master React, Next.js, and TypeScript in this comprehensive bootcamp.</p>
          </div>

          <div className="aspect-video bg-neutral-300 rounded-xl flex items-center justify-center text-neutral-500">
            Course Preview Video Player Placeholder
          </div>

          <div className="bg-white p-8 rounded-xl border">
            <h2 className="text-2xl font-bold mb-4">About this class</h2>
            <p className="text-neutral-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 space-y-6">
              <div className="text-4xl font-bold">$49.99</div>
              <Button className="w-full text-lg h-12">Enroll Now</Button>
              <p className="text-xs text-center text-neutral-500">30-Day Money-Back Guarantee</p>

              <div className="pt-6 border-t space-y-4">
                <h3 className="font-semibold">Instructor</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full"></div>
                  <div>
                    <div className="font-medium">Jane Doe</div>
                    <div className="text-sm text-neutral-500">Senior Web Developer</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Link href={`/teachers/1`}>View Profile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
