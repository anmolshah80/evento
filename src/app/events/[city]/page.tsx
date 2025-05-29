import { Metadata } from 'next';

import H1 from '@/components/h1';
import EventsList from '@/components/events-list';

import { capitalize } from '@/lib/utils';
import { API_BASE_URL } from '@/lib/constants';
import { TEventoEvent } from '@/lib/types';

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

  const cityUrl = `${API_BASE_URL}?city=${city}`;

  const response = await fetch(cityUrl);

  const events: TEventoEvent[] = await response.json();

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
