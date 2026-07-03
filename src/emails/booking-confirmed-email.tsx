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

type BookingConfirmedEmailProps = {
  email: string;
  firstName: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  venueName: string;
  venueAddress: string;
  city: string;
  totalTickets: number;
  orderNumber: string;
  totalAmount?: string;
  eventUrl?: string;
};

const BookingConfirmedEmail = ({
  email,
  firstName,
  eventName,
  eventDate,
  eventTime,
  venueName,
  venueAddress,
  city,
  totalTickets,
  orderNumber,
  totalAmount,
  eventUrl,
}: BookingConfirmedEmailProps) => {
  const currentYear = new Date().getFullYear();

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
          <Section className="bg-slate-50 min-h-screen py-10 px-5 text-slate-900">
            <Section className="max-w-[680px] mx-auto bg-white rounded-[24px] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <Text className="text-sm uppercase tracking-[0.35em] text-slate-500 m-0">
                Booking confirmed
              </Text>

              <Heading
                as="h1"
                className="text-[2.5rem] leading-tight font-extrabold mt-4 mb-3 text-brand"
                style={textGradient}
              >
                Your tickets are confirmed
              </Heading>

              <Text className="text-lg text-slate-700 mb-6">
                Hi {firstName}, your booking for <strong>{eventName}</strong> is
                complete. We can&apos;t wait to see you there.
              </Text>

              <Section className="rounded-[20px] border border-slate-200 bg-slate-50 p-6">
                <Text className="text-base font-semibold text-slate-900 mb-4">
                  Booking summary
                </Text>

                <Section className="flex justify-center items-center flex-col gap-3">
                  <DetailRow
                    label="Order number"
                    value={orderNumber ?? '3qi251k2b60bqkwbt1i62b6k'}
                  />
                  <DetailRow label="Event" value={eventName} />
                  <DetailRow label="Date" value={eventDate} />
                  <DetailRow label="Time" value={eventTime} />
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

              <Section className="bg-slate-900 rounded-[20px] p-6 text-center mt-6">
                <Text className="text-xl font-semibold text-white mb-3">
                  Save the date
                </Text>

                <Text className="text-sm text-slate-300 mb-5">
                  Tap below for event details, directions, and updates.
                </Text>

                <Link
                  href={eventUrl ?? '#'}
                  className="inline-block rounded-full bg-accent px-6 py-3 text-base font-semibold text-white no-underline"
                >
                  View event details
                </Link>
              </Section>

              <Section className="mt-8 text-sm text-slate-600 leading-relaxed">
                <Text className="m-0 mb-3">
                  Note: This is not an actual booking for a real event. This
                  email template is a demonstration of how a booking
                  confirmation email could look. It was created via{' '}
                  <Link
                    href="https://evento-ten-psi.vercel.app/event/tropical-butterfly-exhibit"
                    rel="noopener noreferrer"
                  >
                    Evento App
                  </Link>
                  .
                </Text>

                <Text className="m-0">
                  This booking was made using this email address: {email}. You
                  can ignore this email if you did not make a booking.
                </Text>
              </Section>
            </Section>

            <Section className="text-center mt-6 text-sm text-slate-500">
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
  <Section className="flex justify-between items-start max-w-[500px] mb-4 rounded-[14px] bg-white p-4 border border-slate-200">
    <Text className="text-sm text-slate-500 m-0">{label}</Text>
    <Text className="text-sm font-medium text-slate-900 m-0">{value}</Text>
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
