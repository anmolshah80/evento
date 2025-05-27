import EventCard from '@/components/event-card';

import { TEventoEvent } from '@/lib/types';

type EventsListProps = {
  events: TEventoEvent[];
};

const EventsList = ({ events }: EventsListProps) => {
  if (!events || events.length === 0) return null;

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-20">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
