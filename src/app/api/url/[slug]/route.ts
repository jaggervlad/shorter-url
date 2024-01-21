import { getLinkByslug } from '@/server/links/controller';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const data = await getLinkByslug(params.slug as string);

  console.log(params.slug);

  return Response.json({ data });
}
