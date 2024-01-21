import { GithubIcon } from '@/components/icons/github';
import { ThunderClient } from '@/components/icons/thunder';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="py-10">
      <section className="py-10 max-w-4xl text-center mx-auto">
        <h1 className="text-balance text-4xl md:text-6xl font-extrabold">
          Acorta tus urls
        </h1>
        <p className="mt-6 text-pretty text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sunt fugiat incidunt cumque sed ipsa necessitatibus quidem illo
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">
            <ThunderClient className="mr-2 h-6 w-6 fill-yellow-700" />
            Iniciar ahora
          </Button>
          <Button size="lg" variant="outline">
            <GithubIcon className="mr-2 h-6 w-6" /> Github
          </Button>
        </div>
      </section>
    </main>
  );
}
