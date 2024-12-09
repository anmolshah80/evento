import H1 from '@/components/H1';
import EventsList from '@/components/EventsList';

import { capitalize } from '@/lib/utils';
import { BASE_URL } from '@/lib/constants';
import { TEventoEvent } from '@/lib/types';

type EventsPageProps = {
  params: Promise<{
    city: string;
  }>;
};

const EventsPage = async ({ params }: EventsPageProps) => {
  const { city } = await params;

  const capitalizedCity = capitalize(city);

  const cityUrl = `${BASE_URL}?city=${city}`;

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
