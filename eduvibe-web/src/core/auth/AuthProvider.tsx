'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';
import { tokenManager } from './tokenManager';

export type UserRole = 'admin' | 'teacher' | 'student';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      // Check if the cookie exists on the client side before calling refresh
      const hasAuthPresent = document.cookie.includes('auth-present=true');

      if (!hasAuthPresent) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/auth/refresh', { method: 'POST' });
        if (res.ok) {
          const data = await res.json();
          tokenManager.setToken(data.accessToken);
          setUser(data.user);
        } else {
           // Invalid session, clean up
           tokenManager.clearToken();
           document.cookie = 'auth-present=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = (token: string, userData: User) => {
    tokenManager.setToken(token);
    setUser(userData);
    document.cookie = 'auth-present=true; path=/';
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (e) {
      console.error(e);
    }
    tokenManager.clearToken();
    setUser(null);
    document.cookie = 'auth-present=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
