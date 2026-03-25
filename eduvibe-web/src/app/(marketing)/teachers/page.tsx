import Link from 'next/link';
import { Card } from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { Avatar, AvatarFallback } from '@/shared/components/ui/avatar';

export const revalidate = 3600; // ISR: revalidate every hour

export default function PublicTeachersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Expert Teachers</h1>
        <p className="text-neutral-500 text-lg">Learn from industry professionals who are passionate about sharing their knowledge.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Card key={i} className="flex flex-col items-center text-center p-6 hover:shadow-md transition-shadow">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-lg mb-1">Jane Doe</h3>
            <p className="text-sm text-neutral-500 mb-4">Senior Web Developer</p>
            <p className="text-sm text-neutral-600 line-clamp-3 mb-6">
              Passionate about React, TypeScript, and building scalable web applications. Over 10 years of industry experience.
            </p>
            <Button variant="outline" className="w-full mt-auto">
              <Link href={`/teachers/${i}`}>View Profile</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
