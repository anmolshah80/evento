import EventCard from '@/components/event-card';
import PaginationControls from '@/components/pagination-controls';

import { getEvents } from '@/lib/server-utils';

type EventsListProps = {
  city: string;
  currentPage?: number;
};

const EventsList = async ({ city, currentPage = 1 }: EventsListProps) => {
  const { events, totalRecordsCount } = await getEvents(city, +currentPage);

  const previousPagePath =
    currentPage > 1 ? `/events/${city}?page=${currentPage - 1}` : '';

  const nextPagePath =
    totalRecordsCount > 6 * currentPage
      ? `/events/${city}?page=${currentPage + 1}`
      : '';

  if (!events || events.length === 0) return null;

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center sm:px-[20px]">
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

export default EventsList;
