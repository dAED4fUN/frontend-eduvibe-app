import Link from 'next/link';
import { Card, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';

export const revalidate = 3600; // ISR: revalidate every hour

export default function PublicClassesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Explore Classes</h1>
        <p className="text-neutral-500 text-lg">Find the perfect class to enhance your skills.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Card key={i} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-neutral-200"></div>
            <CardHeader className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Technology</span>
                <span className="font-bold text-lg">$49.99</span>
              </div>
              <CardTitle className="line-clamp-2">Complete Guide to Modern Web Development</CardTitle>
              <p className="text-sm text-neutral-500 mt-2">By Jane Doe</p>
            </CardHeader>
            <CardFooter className="pt-0">
              <Button className="w-full">
                <Link href={`/classes/${i}`}>View Course</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
