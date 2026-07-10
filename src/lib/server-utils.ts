'use cache';

// to only allow the server components to import and use the util functions declared here
import 'server-only';
import { cacheLife } from 'next/cache';

import { Prisma } from 'prisma/client';
import prisma from '@/lib/db';
import { capitalize, sanitizeSearchQuery } from '@/lib/utils';

interface SearchFilters {
  query: string;
  startDate?: Date;
  endDate?: Date;
}

const getEvent = async (slug: string) => {
  cacheLife('days'); // Event updated daily

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
};

const getEvents = async (city: string, currentPage = 1) => {
  cacheLife('days'); // Events updated daily

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
};

const searchEvents = async (filters: SearchFilters, currentPage = 1) => {
  cacheLife('default');

  try {
    const { query, startDate, endDate } = filters;
    const sanitizedQuery = sanitizeSearchQuery(query);

    if (!sanitizedQuery) {
      return { events: [], totalRecordsCount: 0 };
    }

    // Use PostgreSQL full-text search with weighted search vector
    // Exclude the unsupported "searchVector" column from the selected fields.
    const results = (await prisma.$queryRaw`
      SELECT
        "id",
        "name",
        "slug",
        "city",
        "location",
        "startDateTime",
        "endDateTime",
        "organizerName",
        "venueName",
        "imageUrl",
        "description",
        "updatedAt",
        COUNT(*) OVER() AS total_count
      FROM "Event"
      WHERE "searchVector" @@ websearch_to_tsquery('english', ${sanitizedQuery})
      ${startDate && endDate ? Prisma.sql`AND "startDateTime" >= ${startDate} AND "endDateTime" <= ${endDate}` : Prisma.empty}
      ORDER BY ts_rank("searchVector", websearch_to_tsquery('english', ${sanitizedQuery})) DESC, "startDateTime" ASC
      LIMIT 6
      OFFSET ${(currentPage - 1) * 6}
    `) as Array<{
      id: string;
      name: string;
      slug: string;
      city: string;
      location: string;
      startDateTime: Date;
      endDateTime: Date;
      organizerName: string;
      venueName: string;
      imageUrl: string;
      description: string;
      updatedAt: Date;
      total_count: bigint;
    }>;

    if (!results || results.length === 0) {
      return { events: [], totalRecordsCount: 0 };
    }

    // extract total count from first row
    const totalRecordsCount = Number(results[0].total_count || 0);

    // remove total_count from each row to match expected `Event` type
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const events = results.map(({ total_count, ...rest }) => rest);

    return { events, totalRecordsCount };
  } catch (error) {
    console.warn('Unable to search events:', error);

    // fallback to basic contains search if full-text search fails
    return await searchEventsFallback(filters, currentPage);
  }
};

// Fallback search function for when full-text search is unavailable
const searchEventsFallback = async (
  filters: SearchFilters,
  currentPage = 1,
) => {
  cacheLife('default');

  try {
    const { query, startDate, endDate } = filters;
    const sanitizedQuery = sanitizeSearchQuery(query);

    const events = await prisma.event.findMany({
      where: {
        OR: [
          { name: { contains: sanitizedQuery, mode: 'insensitive' } },
          { city: { contains: sanitizedQuery, mode: 'insensitive' } },
          { location: { contains: sanitizedQuery, mode: 'insensitive' } },
          { organizerName: { contains: sanitizedQuery, mode: 'insensitive' } },
          { venueName: { contains: sanitizedQuery, mode: 'insensitive' } },
          { description: { contains: sanitizedQuery, mode: 'insensitive' } },
        ],
        ...(startDate &&
          endDate && {
            AND: [
              { startDateTime: { gte: startDate } },
              { endDateTime: { lte: endDate } },
            ],
          }),
      },
      orderBy: {
        startDateTime: 'asc',
      },
      take: 6,
      skip: (currentPage - 1) * 6,
    });

    if (!events || events.length === 0) {
      return { events: [], totalRecordsCount: 0 };
    }

    const totalRecordsCount = await prisma.event.count({
      where: {
        OR: [
          { name: { contains: sanitizedQuery, mode: 'insensitive' } },
          { city: { contains: sanitizedQuery, mode: 'insensitive' } },
          { location: { contains: sanitizedQuery, mode: 'insensitive' } },
          { organizerName: { contains: sanitizedQuery, mode: 'insensitive' } },
          { venueName: { contains: sanitizedQuery, mode: 'insensitive' } },
          { description: { contains: sanitizedQuery, mode: 'insensitive' } },
        ],
        ...(startDate &&
          endDate && {
            AND: [
              { startDateTime: { gte: startDate } },
              { endDateTime: { lte: endDate } },
            ],
          }),
      },
    });

    return { events, totalRecordsCount };
  } catch (error) {
    console.warn('Unable to search events with fallback:', error);
    return { events: [], totalRecordsCount: 0 };
  }
};

const getEventBookings = async (slug: string) => {
  cacheLife('hours'); // Bookings updated multiple times per day

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
};

export { getEvent, getEvents, getEventBookings, searchEvents };
