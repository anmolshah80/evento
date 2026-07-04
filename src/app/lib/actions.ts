// server actions related to events

'use server';

import { revalidatePath } from 'next/cache';

import { Prisma } from '@prisma/client';

import prisma from '@/lib/db';
import { EventBookingWithEvent } from '@/lib/types';

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

export { createBooking };
