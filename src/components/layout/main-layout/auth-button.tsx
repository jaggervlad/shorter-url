'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Loader2, LogOut, PlusIcon } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { toast } from 'sonner';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export const AuthButton = () => {
  const { data: session, status } = useSession();

  const isLoading = status === 'loading';
  const isUnauth = status === 'unauthenticated';

  const handleLogin = async () => {
    try {
      await signIn('github', {
        callbackUrl: '/dashboard',
      });
    } catch (error) {
      toast.error('Algo salio mal intentalo de nuevo!');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: '/',
      });
    } catch (error) {
      toast.error('Algo salio mal intentalo de nuevo!');
    }
  };

  if (isUnauth) {
    return (
      <Button onClick={handleLogin} variant={'outline'}>
        Inicia sesión
      </Button>
    );
  }

  if (isLoading) {
    return (
      <>
        <Loader2 className="mr-2 animate-spin" />
      </>
    );
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="border">
            <AvatarImage
              src={session?.user?.image as string}
              alt={session?.user?.name as string}
            />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <Link href="/dashboard">
            <DropdownMenuItem>
              <LayoutDashboard className="w-4 h-4 mr-2" />
              <span>Dhasboard</span>
            </DropdownMenuItem>
          </Link>

          <Link href="/dashboard/create">
            <DropdownMenuItem>
              <PlusIcon className="w-4 h-4 mr-2" />
              <span>Crear link</span>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem onSelect={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
