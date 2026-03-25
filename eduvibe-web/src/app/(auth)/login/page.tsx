import { LoginForm } from '@/features/auth/components/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border">
      <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>
      <LoginForm />
      <p className="mt-4 text-center text-sm text-neutral-600">
        Don&apos;t have an account? <Link href="/signup" className="text-primary hover:underline">Sign up</Link>
      </p>
    </div>
  );
}
