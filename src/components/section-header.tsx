import { Separator } from '@/components/ui/separator';
import { ReactNode } from 'react';

export const SectionHeader = ({
  children,
  title,
}: {
  children?: ReactNode;
  title: string;
}) => {
  return (
    <>
      <header className="flex items-center justify-between py-4">
        <h1 className="text-3xl font-bold">{title}</h1>

        <div>{children}</div>
      </header>
      <Separator className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]" />
    </>
  );
};
