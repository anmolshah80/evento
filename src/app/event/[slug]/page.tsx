import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { EventoEvent } from '@prisma/client';

import Loading from '@/app/event/[slug]/loading';

import H1 from '@/components/h1';

import { humanizeKebabCase } from '@/lib/utils';
import { getEvent } from '@/lib/server-utils';

type DetailsSectionProps = {
  header: string;
  content: string;
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;

  const title = `${humanizeKebabCase(slug)} Event`;

  return {
    title,
  };
};

export const generateStaticParams = async () => {
  // prerender popular events page (the page HTML) at build time
  return [
    {
      slug: 'dj-practice-session',
    },
    {
      slug: 'digital-art-symposium',
    },
    {
      slug: 'science-space-expo',
    },
  ];
};

const DetailsSection = ({ header, content }: DetailsSectionProps) => (
  <section className="mb-12">
    <h2 className="text-2xl mb-5">{header}</h2>
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {content}
    </p>
  </section>
);

const EventPage = async ({ params }: Props) => {
  const { slug } = await params;

  const eventData: EventoEvent | null = await getEvent(slug);

  if (!eventData) return null;

  const formattedDate = new Date(eventData.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Suspense key={slug + formattedDate} fallback={<Loading />}>
      <main>
        <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
          <Image
            src={eventData.imageUrl}
            alt="Blurred background image of the event"
            className="object-cover z-0 blur-3xl"
            quality={50}
            priority
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
          />

          <div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
            <Image
              src={eventData.imageUrl}
              alt={eventData.name}
              width={300}
              height={201}
              className="h-dvw rounded-xl border-2 border-white/50 object-cover"
            />

            <div className="flex flex-col">
              <p className="text-white/75">{formattedDate}</p>

              <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
                {eventData.name}
              </H1>

              <p className="whitespace-nowrap text-xl text-white/75">
                Organized by{' '}
                <span className="italic">{eventData.organizerName}</span>
              </p>

              <button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto rounded-md border-white/10 border-2 w-[95vw] sm:w-full py-2 state-effects">
                Get tickets
              </button>
            </div>
          </div>
        </section>

        <div className="min-h-[75vh] text-center px-5 py-16">
          <DetailsSection
            header="About this event"
            content={eventData.description}
          />

          <DetailsSection header="Location" content={eventData.location} />
        </div>
      </main>
    </Suspense>
  );
};

export default EventPage;
