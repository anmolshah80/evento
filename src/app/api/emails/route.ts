import nodemailer from 'nodemailer';
import { render } from 'react-email';
import { NextResponse } from 'next/server';

import BookingConfirmedEmail from '@/emails/booking-confirmed-email';

import { EventBookingFormResponseDataProps } from '@/lib/types';

type EmailRequest = {
  email: string;
  firstName: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  venueName: string;
  venueAddress: string;
  city: string;
  ticketCount: number;
  orderNumber: string;
  totalAmount?: string;
  eventUrl?: string;
};

export async function POST(request: Request) {
  try {
    const {
      email,
      firstName,
      eventName,
      eventDate,
      eventTime,
      venueName,
      venueAddress,
      city,
      ticketCount,
      orderNumber,
      totalAmount,
      eventUrl,
    }: EmailRequest = await request.json();

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
        email,
        firstName,
        eventName,
        eventDate,
        eventTime,
        venueName,
        venueAddress,
        city,
        ticketCount,
        orderNumber,
        totalAmount,
        eventUrl,
      }),
    );

    const data = await transporter.sendMail({
      from: process.env.SENDER_EMAIL_ADDRESS!,
      to: process.env.RECIPIENT_EMAIL_ADDRESS!,
      subject: `Booking Confirmation for ${eventName}`,
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

    return NextResponse.json(response);
  }
}
