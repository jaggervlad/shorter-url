'use client';

import { ReactNode } from 'react';
import { SessionProvider as AuthProvider } from 'next-auth/react';

export function SessionProvider({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
