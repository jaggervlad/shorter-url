'use server';

import { createlinkToDb } from '@/server/links/controller';
import { wait } from '@/utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import { z } from 'zod';

const FormSchema = z.object({
  slug: z.string().min(5, {
    message: 'Digita un slug valido',
  }),
  url: z.string().url(),
  description: z.string().nullable().optional(),
});

export async function createLink(prevState: any, formData: FormData) {
  const newLink = {
    slug: formData.get('slug'),
    url: formData.get('url'),
    description: formData.get('description'),
  };

  const resultValidation = await FormSchema.safeParseAsync(newLink);

  if (!resultValidation.success) {
    return {
      errors: resultValidation.error.flatten().fieldErrors,
    };
  }

  try {
    await createlinkToDb(resultValidation.data);
  } catch (error) {
    return { errorMessage: 'Error creando link' };
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}
