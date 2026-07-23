import * as React from 'react';
import {
  Body,
  Font,
  Head,
  Heading,
  Html,
  Link,
  pixelBasedPreset,
  Section,
  Tailwind,
  Text,
} from 'react-email';

import { currentYear } from '@/lib/utils';

type BookingConfirmedEmailProps = {
  attendeeFirstName: string;
  totalTickets: number;
  eventName: string;
  eventDateTime: string;
  venueName: string;
  venueAddress: string;
  city: string;
  orderNumber: string;
  eventUrl: string;
  totalAmount?: string;
};

const BookingConfirmedEmail = ({
  attendeeFirstName,
  totalTickets,
  eventName,
  eventDateTime,
  venueName,
  venueAddress,
  city,
  orderNumber,
  eventUrl,
  totalAmount,
}: BookingConfirmedEmailProps) => {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Barlow"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.gstatic.com/s/barlow/v12/7cHpv4kjgoGqM7E_DMs5.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Body>
        <Tailwind
          config={{
            presets: [pixelBasedPreset],
            theme: {
              extend: {
                colors: {
                  brand: 'rgb(59, 130, 246)',
                  accent: 'rgb(14, 165, 233)',
                },
              },
            },
          }}
        >
          <Section className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900">
            <Section className="mx-auto max-w-170 rounded-[24px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <Text className="m-0 text-sm tracking-[0.35em] text-slate-500 uppercase">
                Booking confirmed
              </Text>

              <Heading
                as="h1"
                className="text-brand mt-4 mb-3 text-[2.5rem] leading-tight font-extrabold"
                style={textGradient}
              >
                Your tickets are confirmed
              </Heading>

              <Text className="mb-6 text-lg text-slate-700">
                Hi {attendeeFirstName}, your booking for{' '}
                <strong>{eventName}</strong>{' '}
                <span>is complete. We can&apos;t wait to see you there.</span>
              </Text>

              <Section className="rounded-[20px] border border-slate-200 bg-slate-50 p-6">
                <Text className="mb-4 text-base font-semibold text-slate-900">
                  Booking summary
                </Text>

                <Section className="flex flex-col items-center justify-center gap-3">
                  <DetailRow label="Order number" value={orderNumber} />
                  <DetailRow label="Event" value={eventName} />
                  <DetailRow label="Date" value={eventDateTime} />
                  <DetailRow
                    label="Venue"
                    value={`${venueName}, ${venueAddress}`}
                  />
                  <DetailRow label="City" value={city} />
                  <DetailRow
                    label="Tickets"
                    value={`${totalTickets} ticket${totalTickets === 1 ? '' : 's'}`}
                  />
                  {totalAmount ? (
                    <DetailRow label="Total paid" value={totalAmount} />
                  ) : null}
                </Section>
              </Section>

              <Section className="mt-6 rounded-[20px] bg-slate-900 p-6 text-center">
                <Text className="mb-3 text-xl font-semibold text-white">
                  Save the date
                </Text>

                <Text className="mb-5 text-sm text-slate-300">
                  Tap below for event details, directions, and updates.
                </Text>

                <Link
                  href={eventUrl}
                  className="bg-accent inline-block rounded-full px-6 py-3 text-base font-semibold text-white no-underline"
                >
                  View event details
                </Link>
              </Section>

              <Section className="mt-8 text-sm leading-relaxed text-slate-600">
                <Text className="m-0 mb-3">
                  Note: This is not an actual booking for a real event. This
                  email template is a demonstration of how a booking
                  confirmation email could look. It was created via{' '}
                  <Link href={eventUrl} rel="noopener noreferrer">
                    Evento App
                  </Link>
                  .
                </Text>

                <Text className="m-0">
                  This booking was made with your email address. You can ignore
                  this email if you did not make a booking.
                </Text>
              </Section>
            </Section>

            <Section className="mt-6 text-center text-sm text-slate-500">
              <Text className="m-0">
                &copy; {currentYear} Evento. All rights reserved.
              </Text>
            </Section>
          </Section>
        </Tailwind>
      </Body>
    </Html>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <Section className="mb-4 flex max-w-125 items-start justify-between rounded-[14px] border border-slate-200 bg-white p-4">
    <Text className="m-0 text-sm text-slate-500">{label}</Text>
    <Text className="m-0 text-sm font-medium text-slate-900">{value}</Text>
  </Section>
);

const textGradient = {
  backgroundImage:
    'linear-gradient(305deg, rgb(14, 165, 233), rgb(59, 130, 246))',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export default BookingConfirmedEmail;
