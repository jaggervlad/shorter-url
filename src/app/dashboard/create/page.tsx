import { CreateLinkForm } from '@/components/create-link-form';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { protectedRouteMiddleware } from '@/utils/protected-route-middleware';
import Link from 'next/link';

export default async function CreatePage() {
  await protectedRouteMiddleware();

  return (
    <main>
      <SectionHeader title="Crear nuevo link">
        <Link href="/dashboard">
          <Button variant={'ghost'}>Ver Dashboard</Button>
        </Link>
      </SectionHeader>
      <CreateLinkForm />
    </main>
  );
}
