// to only allow the server components to import and use the util functions declared here
import 'server-only';

import { unstable_cache } from 'next/cache';

import prisma from '@/lib/db';
import { capitalize } from '@/lib/utils';

const getEvent = unstable_cache(async (slug: string) => {
  try {
    const eventData = await prisma.event.findUnique({
      where: {
        slug: slug,
      },
    });

    if (!eventData) return null;

    return eventData;
  } catch (error) {
    console.warn('Unable to load event data during build/runtime:', error);
    return null;
  }
});

const getEvents = unstable_cache(async (city: string, currentPage = 1) => {
  try {
    const events = await prisma.event.findMany({
      where: {
        city: city === 'all' ? undefined : capitalize(city),
      },
      orderBy: {
        startDateTime: 'asc',
      },
      take: 6,
      skip: (currentPage - 1) * 6,
    });

    if (!events || events.length === 0)
      return { events: [], totalRecordsCount: 0 };

    // Alternative way
    // const totalRecordsCount = await prisma.event.count({
    //   where: {
    //     city: city === 'all' ? undefined : capitalize(city),
    //   },
    // });

    let totalRecordsCount;

    if (city === 'all') {
      totalRecordsCount = await prisma.event.count();
    } else {
      totalRecordsCount = await prisma.event.count({
        where: {
          city: capitalize(city),
        },
      });
    }

    return { events, totalRecordsCount };
  } catch (error) {
    console.warn('Unable to load events data during build/runtime:', error);
    return { events: [], totalRecordsCount: 0 };
  }
});

const getEventBookings = unstable_cache(async (slug: string) => {
  try {
    const bookings = await prisma.eventBooking.findMany({
      where: {
        event: {
          slug: slug,
        },
      },
      orderBy: {
        bookedDateTime: 'asc',
      },
    });

    if (!bookings || bookings.length === 0) {
      return {
        bookings: [],
        message: 'No bookings found for this event.',
      };
    }

    return { bookings, totalRecordsCount: bookings.length };
  } catch (error) {
    console.warn('Unable to load booking data during build/runtime:', error);
    return {
      bookings: [],
      message: 'No bookings found for this event.',
    };
  }
});

export { getEvent, getEvents, getEventBookings };
