import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export async function protectedRouteMiddleware() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/');
  }
}
