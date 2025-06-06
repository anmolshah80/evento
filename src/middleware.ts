import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/events/all', request.url));
};

export const config = {
  matcher: ['/events'],
};

export default middleware;
