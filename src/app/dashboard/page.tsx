import { LinksList, LoadingState } from '@/components/links-list';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

import { protectedRouteMiddleware } from '@/utils/protected-route-middleware';
import { Suspense } from 'react';

export default async function DhasboardPage() {
  await protectedRouteMiddleware();

  return (
    <main>
      <SectionHeader title="Dashboard">
        <Link href="/dashboard/create">
          <Button variant={'ghost'}>
            <PlusIcon className="mr-2" /> Crear link
          </Button>
        </Link>
      </SectionHeader>

      <Suspense fallback={<LoadingState />}>
        <LinksList />
      </Suspense>
    </main>
  );
}
