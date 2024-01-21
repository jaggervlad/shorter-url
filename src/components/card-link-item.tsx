'use client';

import { Copy } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { CardLinkItemOptions } from './card-link-item-options';

export const CardLinkItem = ({
  slug,
  url,
  description,
}: {
  slug: string;
  url: string;
  description: string;
}) => {
  const copyToClipboard = async (txt: string) => {
    try {
      const clipboardItem = new ClipboardItem({
        'text/plain': new Blob([txt], { type: 'text/plain' }),
      });
      await navigator.clipboard.write([clipboardItem]);
    } catch (error) {
      await navigator.clipboard.writeText(txt);
    }

    toast('🚀 Copiado!');
  };

  const href = `${(process.env.BASE_URL as string) || ''}/s/${slug}`;

  return (
    <article className="relative flex flex-col px-3 py-3 border rounded-lg">
      <header>
        <div className="flex gap-3">
          <Link href={href} target="_blank" className="text-lg font-bold">
            /s/{slug}
          </Link>
          <button
            onClick={() => copyToClipboard(`${process.env.BASE_URL}/s/${slug}`)}
            className="transition-all duration-200 ease-in-out text-muted-foreground hover:text-foreground hover:scale-110"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
        <p className="truncate text-muted-foreground">{url}</p>
      </header>

      <p className="mt-2">{description}</p>

      <CardLinkItemOptions />
    </article>
  );
};
