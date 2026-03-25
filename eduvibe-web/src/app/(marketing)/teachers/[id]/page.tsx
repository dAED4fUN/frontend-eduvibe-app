import { Button } from '@/shared/components/ui/button';
import { Card } from '@/shared/components/ui/card';
import { Avatar, AvatarFallback } from '@/shared/components/ui/avatar';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
  ];
}

export default async function PublicTeacherProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id) notFound();

  return (
    <div className="bg-neutral-50 min-h-[calc(100vh-64px)] py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl p-8 border shadow-sm mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
          <Avatar className="w-32 h-32 border-4 border-white shadow-md">
            <AvatarFallback className="text-4xl">JD</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold mb-2">Jane Doe</h1>
            <p className="text-xl text-neutral-500 mb-4">Senior Web Developer</p>
            <p className="text-neutral-700 leading-relaxed max-w-3xl">
              Hi! I&apos;m Jane, a full-stack developer with over a decade of experience building web applications for startups and enterprise companies alike. I specialize in the React ecosystem, TypeScript, and Node.js. My teaching philosophy focuses on practical, real-world examples that you can immediately apply to your own projects.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Classes by Jane</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
             <Card key={i} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
               <div className="aspect-video bg-neutral-200"></div>
               <div className="p-4 flex-1">
                 <h3 className="font-bold mb-2">Complete Guide to Modern Web Development</h3>
                 <p className="text-sm text-neutral-500 line-clamp-2">Master React, Next.js, and TypeScript in this comprehensive bootcamp.</p>
               </div>
               <div className="p-4 pt-0 mt-auto">
                 <Button className="w-full">
                   <Link href={`/classes/${i}`}>View Class</Link>
                 </Button>
               </div>
             </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
