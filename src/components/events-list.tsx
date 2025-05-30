import { EventoEvent } from '@prisma/client';

import EventCard from '@/components/event-card';

type EventsListProps = {
  events: EventoEvent[];
};

const EventsList = ({ events }: EventsListProps) => {
  if (!events || events.length === 0) return null;

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
