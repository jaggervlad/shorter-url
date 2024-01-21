'use client';

import { Label } from './ui/label';
import { Input } from './ui/input';
import { createLink } from '@/actions/createLink';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { ThunderClient } from './icons/thunder';
import { useFormState, useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
export const CreateLinkForm = () => {
  const [state, formAction] = useFormState(createLink, { errors: {} });
  const [defaultSlug, setDefaultSlug] = useState('');

  const generateRandomSlug = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const randomSlug = nanoid(6);
    setDefaultSlug(randomSlug);
  };

  useEffect(() => {
    if (state.errorMessage) {
      toast.error(state.errorMessage);
    }
  }, [state.errorMessage]);

  console.log(state);
  return (
    <form action={formAction} className="flex flex-col w-full gap-6 py-10">
      <div className="grid items-center w-full gap-2">
        <Label htmlFor="url">Ingresa la url que deseas acortar</Label>
        <Input type="text" id="url" name="url" placeholder="https://" />

        {state?.errors?.url && (
          <p className="text-[0.8rem] font-medium text-destructive">
            {state.errors.url}
          </p>
        )}
      </div>
      <div className="grid items-center w-full gap-2">
        <Label htmlFor="slug">
          Ingresa el nombre que quieras para tu link!
        </Label>
        <div className="flex gap-5">
          <Input
            value={defaultSlug}
            onChange={(e) => setDefaultSlug(e.target.value)}
            type="text"
            id="slug"
            name="slug"
          />

          <Button type="button" onClick={generateRandomSlug}>
            Generar
          </Button>
        </div>
        {state?.errors?.slug && (
          <p className="text-[0.8rem] font-medium text-destructive">
            {state.errors.slug}
          </p>
        )}
      </div>
      <div className="grid items-center w-full gap-2">
        <Label htmlFor="description">Descripción (Opcional)</Label>
        <Textarea id="description" name="description" />
      </div>

      <SubmitButton />
    </form>
  );
};

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button
        type="submit"
        variant={'ghost'}
        size="lg"
        aria-disabled={pending}
        disabled={pending}
      >
        {pending ? (
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
        ) : (
          <ThunderClient className="w-5 h-5 mr-2 fill-current" />
        )}
        Crear link
      </Button>
    </div>
  );
};
