import nodemailer from 'nodemailer';
import { render } from 'react-email';
import { NextResponse } from 'next/server';

import BookingConfirmedEmail from '@/emails/booking-confirmed-email';

import { BASE_URL } from '@/lib/constants';
import {
  EventBookingFormResponseDataProps,
  EventBookingWithEvent,
} from '@/lib/types';

type BookingConfirmedEmailData = Omit<
  EventBookingWithEvent,
  'bookedDateTime'
> & { bookedDateTime: string };

export async function POST(request: Request) {
  try {
    const {
      email,
      attendeeFirstName,
      bookedDateTime,
      totalTickets,
      id,
      event,
    }: BookingConfirmedEmailData = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER_HOST,
      port: 587,
      auth: {
        user: process.env.SENDER_EMAIL_ADDRESS,
        pass: process.env.APP_PASSWORD_FOR_SENDER_EMAIL,
      },
    });

    // Source -> https://react.email/docs/integrations/nodemailer#3-convert-to-html-and-send-email
    const emailHtml = await render(
      BookingConfirmedEmail({
        attendeeFirstName,
        totalTickets,
        eventName: event.name,
        eventDateTime: bookedDateTime,
        venueName: event.venueName,
        venueAddress: event.location,
        city: event.city,
        orderNumber: id,
        eventUrl: `${BASE_URL}/event/${event.slug}`,
      }),
    );

    const data = await transporter.sendMail({
      from: process.env.SENDER_EMAIL_ADDRESS!,
      to: email,
      subject: `Booking Confirmation for ${event.name}`,
      replyTo: process.env.SENDER_EMAIL_ADDRESS!,
      html: emailHtml,
    });

    if (!data.messageId) throw new Error(data.response);

    const response: EventBookingFormResponseDataProps = {
      status: 200,
      success: true,
      message: 'Email sent successfully!',
      data,
    };

    return NextResponse.json(response);
  } catch (error) {
    const response: EventBookingFormResponseDataProps = {
      status: 500,
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email',
      error: error,
    };

    return NextResponse.json(response, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}
