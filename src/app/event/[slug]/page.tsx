import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

import { Event } from 'prisma/client';

import Loading from '@/app/event/[slug]/loading';

import H1 from '@/components/h1';
import ModalButton from '@/components/modal-button';

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
    <h2 className="mb-5 text-2xl">{header}</h2>
    <p className="mx-auto max-w-4xl text-lg leading-8 text-white/75">
      {content}
    </p>
  </section>
);

const EventPage = async ({ params }: Props) => {
  const { slug } = await params;

  const eventData: Event | null = await getEvent(slug);

  if (!eventData) return null;

  const formattedDate = new Date(eventData.startDateTime).toLocaleDateString(
    'en-US',
    {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    },
  );

  return (
    <Suspense key={slug + formattedDate} fallback={<Loading />}>
      <main>
        <section className="relative flex items-center justify-center overflow-hidden py-14 md:py-20">
          <Image
            src={eventData.imageUrl}
            alt="Blurred background image of the event"
            className="z-0 object-cover blur-3xl"
            quality={50}
            priority
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
          />

          <div className="relative z-1 flex flex-col gap-6 px-8 sm:px-0 lg:flex-row lg:gap-16">
            <Image
              src={eventData.imageUrl}
              alt={eventData.name}
              width={300}
              height={201}
              className="h-50.25 w-75 rounded-xl border-2 border-white/50 object-cover"
            />

            <div className="flex flex-col">
              <p className="text-white/75">{formattedDate}</p>

              <H1 className="mt-1 mb-2 sm:whitespace-nowrap lg:text-5xl">
                {eventData.name}
              </H1>

              <p className="text-xl text-white/75 sm:whitespace-nowrap">
                Organized by{' '}
                <span className="italic">{eventData.organizerName}</span>
              </p>

              <ModalButton
                eventId={eventData.id}
                title="Get tickets"
                className="bg-blur state-effects mt-5 rounded-md border-2 border-white/10 bg-white/20 py-2 text-lg capitalize sm:w-full lg:mt-auto"
              />
            </div>
          </div>
        </section>

        <div className="min-h-[75vh] px-5 py-16 text-center">
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
