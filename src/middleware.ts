import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, res: NextResponse) {
  const slug = req.nextUrl.pathname.split('/').pop();

  const data = await fetch(`${req.nextUrl.origin}/api/url/${slug}`);

  if (data.status === 404) {
    return NextResponse.redirect(req.nextUrl.origin);
  }

  const jsonData = await data.json();

  if (data?.url) {
    return NextResponse.redirect(new URL(jsonData.data.url));
  }
}

export const config = {
  matcher: '/s/:slug*',
};
