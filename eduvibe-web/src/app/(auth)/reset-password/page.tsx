
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';

export default function ResetPasswordPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border">
      <h1 className="text-2xl font-bold mb-2 text-center">Reset Password</h1>
      <p className="text-sm text-neutral-600 text-center mb-6">Enter your new password below.</p>
      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium">New Password</label>
          <Input type="password" placeholder="••••••••" />
        </div>
        <Button className="w-full">Reset Password</Button>
      </form>
    </div>
  );
}
