import { useAuth } from '../auth/useAuth';
import { PERMISSIONS } from './permissions';

export function usePermissions() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return PERMISSIONS[user.role];
}
