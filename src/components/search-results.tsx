import EventCard from '@/components/event-card';
import PaginationControls from '@/components/pagination-controls';

import { searchEvents } from '@/lib/server-utils';

type SearchResultsProps = {
  query: string;
  currentPage?: number;
};

const SearchResults = async ({
  query,
  currentPage = 1,
}: SearchResultsProps) => {
  const { events, totalRecordsCount } = await searchEvents(
    { query },
    +currentPage,
  );

  const previousPagePath =
    currentPage > 1
      ? `/search?q=${encodeURIComponent(query)}&page=${currentPage - 1}`
      : '';

  const nextPagePath =
    totalRecordsCount > 6 * currentPage
      ? `/search?q=${encodeURIComponent(query)}&page=${currentPage + 1}`
      : '';

  if (!events || events.length === 0) {
    return (
      <div className="text-center">
        <p className="text-lg text-gray-400">
          No events found matching your search. Try different keywords.
        </p>
      </div>
    );
  }

  return (
    <section className="flex max-w-275 flex-wrap justify-center gap-10 sm:px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls
        previousPagePath={previousPagePath}
        nextPagePath={nextPagePath}
      />
    </section>
  );
};

export default SearchResults;
