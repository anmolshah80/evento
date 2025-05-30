import { Metadata } from 'next';

import H1 from '@/components/h1';
import EventsList from '@/components/events-list';

import { capitalize } from '@/lib/utils';

type Props = {
  params: Promise<{
    city: string;
  }>;
};

type EventsPageProps = Props & {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
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

const EventsPage = async ({ params, searchParams }: EventsPageProps) => {
  const { city } = await params;
  const { page } = await searchParams;

  const currentPage = page || 1;

  const capitalizedCity = capitalize(city);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalizedCity}`}
      </H1>

      <EventsList city={city} currentPage={+currentPage} />
    </main>
  );
};

export default EventsPage;
