// to only allow the server components to import and use the util functions declared here
import 'server-only';

import { notFound } from 'next/navigation';
import { unstable_cache } from 'next/cache';

import prisma from '@/lib/db';
import { capitalize } from '@/lib/utils';

// for api implementation
// import { EventoEvent } from '@prisma/client';
// import { API_BASE_URL } from '@/lib/constants';

const getEvent = unstable_cache(async (slug: string) => {
  // for api implementation
  // const response = await fetch(`${API_BASE_URL}/${slug}`);
  // const eventData: EventoEvent = await response.json();

  const eventData = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!eventData) return notFound();

  return eventData;
});

const getEvents = unstable_cache(async (city: string, currentPage = 1) => {
  // for api implementation
  // const response = await fetch(`${API_BASE_URL}?city=${city}`);
  // const events: EventoEvent[] = await response.json();

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
    orderBy: {
      date: 'asc',
    },
    take: 6,
    skip: (currentPage - 1) * 6,
  });

  if (!events || events.length === 0) return notFound();

  // Alternative way
  // const totalRecordsCount = await prisma.eventoEvent.count({
  //   where: {
  //     city: city === 'all' ? undefined : capitalize(city),
  //   },
  // });

  let totalRecordsCount;

  if (city === 'all') {
    totalRecordsCount = await prisma.eventoEvent.count();
  } else {
    totalRecordsCount = await prisma.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return { events, totalRecordsCount };
});

export { getEvent, getEvents };
