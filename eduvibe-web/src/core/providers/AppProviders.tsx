'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../api/queryClient';
import { ReactNode } from 'react';
import { AuthProvider } from '../auth/AuthProvider';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
}
