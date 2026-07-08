import { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import H1 from '@/components/h1';
import SearchResults from '@/components/search-results';
import Loading from '@/app/events/[city]/loading';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateMetadata = async ({
  searchParams,
}: Props): Promise<Metadata> => {
  const { q } = await searchParams;

  const query = typeof q === 'string' ? q : '';

  return {
    title: query ? `Search Results for "${query}"` : 'Search Events',
  };
};

const SearchPage = async ({ searchParams }: Props) => {
  const { q, page } = await searchParams;

  const query = typeof q === 'string' ? q : '';
  const pageNumber = typeof page === 'string' ? parseInt(page, 10) : 1;

  if (!query || query.trim() === '') {
    return notFound();
  }

  return (
    <Suspense key={query + pageNumber} fallback={<Loading />}>
      <main className="flex min-h-[110vh] flex-col items-center px-5 py-24">
        <H1 className="mb-28">Search Results for &quot;{query}&quot;</H1>

        <SearchResults query={query} currentPage={pageNumber} />
      </main>
    </Suspense>
  );
};

export default SearchPage;
