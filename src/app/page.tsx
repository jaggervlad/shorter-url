import { authOptions } from '@/auth';
import { GithubIcon } from '@/components/icons/github';
import { LoginHeroButton } from '@/components/login-hero-button';
import { Button } from '@/components/ui/button';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/dashboard');
  }

  return (
    <main className="py-10">
      <section className="max-w-4xl py-10 mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-balance md:text-6xl">
          Acorta tus urls
        </h1>
        <p className="mt-6 text-lg text-pretty text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sunt fugiat incidunt cumque sed ipsa necessitatibus quidem illo
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <LoginHeroButton />
          <Link href={'https://github.com/jaggervlad/shorter-url'}>
            <Button size="lg" variant="outline">
              <GithubIcon className="w-6 h-6 mr-2" /> Github
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
