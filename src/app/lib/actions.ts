// server actions related to events

'use server';

import { revalidatePath } from 'next/cache';

import { Prisma } from 'prisma/client';
import prisma from '@/lib/db';
import { EventBookingWithEvent } from '@/lib/types';
import { searchEvents } from '@/lib/server-utils';

interface SearchFilters {
  query: string;
  startDate?: Date;
  endDate?: Date;
}

const createBooking = async (
  formData: Prisma.EventBookingCreateInput,
): Promise<EventBookingWithEvent> => {
  const response = await prisma.eventBooking.create({
    data: {
      ...formData,
    },
    include: {
      event: true,
    },
  });

  revalidatePath('/event/[slug]');

  return response;
};

const performEventSearch = async (
  filters: SearchFilters,
  currentPage: number = 1,
) => {
  try {
    const result = await searchEvents(filters, currentPage);

    return result;
  } catch (error) {
    console.error('Search action error:', error);

    return { events: [], totalRecordsCount: 0 };
  }
};

export { createBooking, performEventSearch };
