import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ReactNode } from 'react';

export const NavLinkItem = ({
  children,
  href,
  isExternal = false,
}: {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}) => {
  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      referrerPolicy={isExternal ? 'no-referrer' : undefined}
    >
      <li className={buttonVariants({ variant: 'outline' })}>{children}</li>
    </Link>
  );
};
export const NavItem = ({ children }: { children: ReactNode }) => {
  return <li className={buttonVariants({ variant: 'outline' })}>{children}</li>;
};
