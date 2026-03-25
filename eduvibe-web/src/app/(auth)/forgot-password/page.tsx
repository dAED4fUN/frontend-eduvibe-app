import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';

export default function ForgotPasswordPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border">
      <h1 className="text-2xl font-bold mb-2 text-center">Forgot Password</h1>
      <p className="text-sm text-neutral-600 text-center mb-6">Enter your email to reset your password.</p>
      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <Button className="w-full">Send Reset Link</Button>
      </form>
      <p className="mt-4 text-center text-sm text-neutral-600">
        Remembered your password? <Link href="/login" className="text-primary hover:underline">Log in</Link>
      </p>
    </div>
  );
}
