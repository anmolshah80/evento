'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { Calendar } from '@/components/ui/calendar';
import EventInfoCard from '@/components/event-info-card';

const BookingsSidebar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  // Convert ISO string to Date object for the calendar
  // const dateValue = input.value ? parseISO(input.value) : undefined;

  return (
    <section className="px-4 md:px-6">
      <p className="mb-4 text-lg font-bold">
        {selectedDate
          ? selectedDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })
          : 'Select a date'}
      </p>

      <Calendar
        mode="single"
        captionLayout="dropdown"
        selected={selectedDate}
        onSelect={(date) => {
          if (date) {
            // Get the date at midnight UTC
            const utcDate = new Date(
              Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
            );

            // input.onChange(utcDate.toISOString());
            setSelectedDate(utcDate);
          } else {
            setSelectedDate(undefined);
          }
        }}
        disabled={(date) => date < new Date('2020-01-01')}
        className="max-h-80 w-75 border-white bg-transparent p-0 text-white"
      />

      <div className="mt-12 flex flex-col justify-center gap-8">
        <p className="flex w-full items-center justify-between">
          <span className="text-lg font-bold">All Events Today</span>{' '}
          <span className="flex items-center justify-center gap-2">
            Show <ChevronDown size={16} className="text-white" />
          </span>
        </p>

        <div className="flex flex-col gap-4">
          <p className="text-3xl text-gray-300">Previous</p>

          <EventInfoCard />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-3xl text-gray-300">Upcoming</p>

          {[1, 2, 3, 4, 5].map((_, index) => (
            <EventInfoCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingsSidebar;
