import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';

export default function SignupPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border">
      <h1 className="text-2xl font-bold mb-6 text-center">Create an Account</h1>
      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <Input type="text" placeholder="John Doe" />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-sm font-medium">Password</label>
          <Input type="password" placeholder="••••••••" />
        </div>
        <Button className="w-full">Sign Up</Button>
      </form>
      <p className="mt-4 text-center text-sm text-neutral-600">
        Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
      </p>
    </div>
  );
}
