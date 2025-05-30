import Link from 'next/link';
import { ArrowTopLeftIcon } from '@radix-ui/react-icons';

import NotFoundGraphicUI from '@/components/not-found-graphic-ui';

const NotFound = () => {
  debugger;

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      {/*
        There is no support for metadata in not-found.tsx yet
          - https://github.com/vercel/next.js/issues/45620#issuecomment-1488933853
          - https://github.com/vercel/next.js/pull/47328#issuecomment-1488891093
      */}
      <title>404 Not Found</title>
      <div className="text-center">
        <NotFoundGraphicUI />

        <p className="mt-6 text-xl text-pretty text-gray-500 sm:text-2xl">
          Sorry, there is nothing at this URL.
        </p>
        <div className="mt-12 flex items-center justify-center gap-x-6">
          <Link
            href={'/'}
            className="flex gap-x-2 text-xl text-white/80 hover:underline hover:text-white/100 focus:text-white/100 focus:underline outline-none"
          >
            <ArrowTopLeftIcon width={20} height={20} />
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
