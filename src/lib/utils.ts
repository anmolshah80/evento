import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

// for api implementation
// import { EventoEvent } from '@prisma/client';
// import { API_BASE_URL } from '@/lib/constants';

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.substring(1);
};

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// convert kebab case to space separated words
const humanizeKebabCase = (text: string) => {
  const splitTextArr = text.split('-');

  const capitalizedTextArr = splitTextArr.map((word) => capitalize(word));

  return capitalizedTextArr.join(' ');
};

const getEvent = async (slug: string) => {
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
};

const getEvents = async (city: string, currentPage = 1) => {
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
};

export { capitalize, cn, humanizeKebabCase, getEvent, getEvents };
