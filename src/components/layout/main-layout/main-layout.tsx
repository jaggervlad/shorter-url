import { buttonVariants } from '@/components/ui/button';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Header } from './header';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-[100dvh] flex flex-col max-w-[1450px] w-full mx-auto px-4 lg:px-6">
      <Header />
      {children}

      <footer className="mt-auto py-6 flex justify-between items-center">
        <p>
          Desarrollado por{' '}
          <Link className="text-muted-foreground hover:underline" href="/">
            Sebastian Acosta
          </Link>
        </p>

        <span>&#169; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
};
