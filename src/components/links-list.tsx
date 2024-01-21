import { Loader, Loader2, PlusIcon, Rocket } from 'lucide-react';
import { CardLinkItem } from './card-link-item';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';
import { getAllLinks } from '@/server/links/controller';

const links = [
  {
    slug: 'fErKfT',
    url: 'https://www.google.com',
    description: 'No description',
  },
  {
    slug: 'abc123',
    url: 'https://www.example.com',
    description: 'Sample description',
  },
  {
    slug: 'xyz789',
    url: 'https://www.test.com',
    description: 'Another description',
  },
  // Puedes agregar más objetos con datos de prueba aquí
];

export const LinksList = async () => {
  const links = await getAllLinks();

  return (
    <section className="py-8">
      <form className="mb-4">
        <Input placeholder="Buscar links" className="py-5 text-lg" />
      </form>

      {/* <LoadingState />
      <EmptyState /> */}

      {links.length === 0 && <EmptyState />}
      {links.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-3">
          {links.map((l) => (
            <CardLinkItem
              key={l.slug}
              slug={l.slug}
              url={l.url}
              description={l?.description || 'Sin descripición'}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export const LoadingState = () => {
  return (
    <div className="flex items-center justify-center py-8">
      Cargando links
      <Loader2 className="w-6 h-6 ml-3 animate-spin" />
    </div>
  );
};

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <Rocket className="w-14 h-14 text-muted-foreground" />
      <p className="mt-4 text-2xl font-semibold">Crea tu primer link</p>

      <Link href="/dashboard/create">
        <Button className="mt-4">
          <PlusIcon className="w-4 h-4 mr-2" /> Crear link
        </Button>
      </Link>
    </div>
  );
};
