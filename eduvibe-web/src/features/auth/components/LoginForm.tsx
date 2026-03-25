'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { useAuth } from '@/core/auth/useAuth';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    // MOCK: simulate backend API call
    console.log('Logging in with', data);
    const mockUser = {
      id: 'mock_user_1',
      email: data.email,
      name: 'Mock User',
      role: 'teacher' as const
    };
    login('mock_access_token_123', mockUser);

    // AuthProvider login function handles cookie setting, push to dashboard
    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <div>
        <label className="text-sm font-medium">Email</label>
        <Input type="email" {...register('email')} />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium">Password</label>
        <Input type="password" {...register('password')} />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>
      <Button type="submit" className="w-full">Sign In</Button>
    </form>
  );
}
