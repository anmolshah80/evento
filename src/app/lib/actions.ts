// server actions related to events

'use server';

import { revalidatePath } from 'next/cache';

import { Prisma } from '@prisma/client';

import prisma from '@/lib/db';

const createBooking = async (formData: Prisma.EventBookingCreateInput) => {
  console.log('Creating booking with data: ', formData);

  const response = await prisma.eventBooking.create({
    data: {
      ...formData,
    },
  });

  revalidatePath('/event/[slug]');

  return response;
};

export { createBooking };
