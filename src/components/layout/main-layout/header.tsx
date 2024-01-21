import { GithubIcon } from '@/components/icons/github';
import { Button } from '@/components/ui/button';
import { Command } from 'lucide-react';
import Link from 'next/link';
import { NavItem, NavLinkItem } from './nav-item';
import { AuthButton } from './auth-button';
export const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between pt-8 pb-6">
        <Link href="/" className="text-2xl font-bold">
          Shorter url
        </Link>

        <nav className="">
          <ul className="flex items-center gap-2">
            <AuthButton />
            <NavLinkItem href={'/login'}>
              <GithubIcon className="w-6 h-6" />
            </NavLinkItem>
            <NavItem>
              <Command />
            </NavItem>
          </ul>
        </nav>
      </header>
    </div>
  );
};
