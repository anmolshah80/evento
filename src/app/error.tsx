'use client';

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <div className="mb-6 flex justify-center text-amber-400">
          <AlertTriangle className="size-16" aria-hidden="true" />
        </div>

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Something went wrong
        </h1>

        <p className="mt-4 text-lg text-white/70">
          We hit an unexpected issue. Try again, or head back to the homepage.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
          >
            Try again
          </button>

          <Link
            href="/"
            className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
