import { Metadata } from 'next';
import { Suspense, use } from 'react';
import { notFound } from 'next/navigation';

import H1 from '@/components/h1';
import SearchResults from '@/components/search-results';
import Loading from '@/app/events/[city]/loading';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

type SearchContentProps = {
  searchParamsPromise: Props['searchParams'];
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

const SearchContent = ({ searchParamsPromise }: SearchContentProps) => {
  const searchParams = use(searchParamsPromise);
  const { q, page } = searchParams;

  const query = typeof q === 'string' ? q : '';
  const pageNumber = typeof page === 'string' ? parseInt(page, 10) : 1;

  if (!query || query.trim() === '') {
    return notFound();
  }

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-5 py-24">
      <H1 className="mb-28">Search Results for &quot;{query}&quot;</H1>
      <SearchResults query={query} currentPage={pageNumber} />
    </main>
  );
};

const SearchPage = async ({ searchParams }: Props) => {
  return (
    <Suspense key="search-page" fallback={<Loading />}>
      <SearchContent searchParamsPromise={searchParams} />
    </Suspense>
  );
};

export default SearchPage;
