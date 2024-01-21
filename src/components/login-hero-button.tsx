'use client';

import { ThunderClient } from '@/components/icons/thunder';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

export const LoginHeroButton = () => {
  const handleLogin = async () => {
    try {
      await signIn('github', {
        callbackUrl: '/dashboard',
      });
    } catch (error) {
      toast.error('Algo salio mal intentalo de nuevo!');
    }
  };

  return (
    <Button size="lg" onClick={handleLogin}>
      <ThunderClient className="w-6 h-6 mr-2 fill-yellow-700" />
      Iniciar ahora
    </Button>
  );
};
