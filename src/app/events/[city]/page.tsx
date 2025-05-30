import { Metadata } from 'next';
import { EventoEvent } from '@prisma/client';

import H1 from '@/components/h1';
import EventsList from '@/components/events-list';

import { capitalize, getEvents } from '@/lib/utils';

type Props = {
  params: Promise<{
    city: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { city } = await params;

  const capitalizedCity = capitalize(city);

  const title = city === 'all' ? 'All Events' : `Events in ${capitalizedCity}`;

  return {
    title,
  };
};

const EventsPage = async ({ params }: Props) => {
  const { city } = await params;

  const capitalizedCity = capitalize(city);

  const events: EventoEvent[] = await getEvents(city);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalizedCity}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
};

export default EventsPage;
