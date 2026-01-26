'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { Calendar } from '@/components/ui/calendar';

const BookingsSidebar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  // Convert ISO string to Date object for the calendar
  // const dateValue = input.value ? parseISO(input.value) : undefined;

  return (
    <section>
      <p className="text-lg font-bold mb-4">
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
        className="border-white w-[300px] max-h-[320px] p-0 bg-transparent text-white"
      />

      <div className="flex flex-col justify-center gap-8 mt-12">
        <p className="flex items-center justify-between w-full">
          <span className="text-lg font-bold">All Events Today</span>{' '}
          <span className="flex items-center justify-center gap-2">
            Show <ChevronDown size={16} className="text-white" />
          </span>
        </p>

        <div>
          <p className="text-3xl text-gray-300">Previous</p>
        </div>

        <div>
          <p className="text-3xl text-gray-300">Upcoming</p>
        </div>
      </div>
    </section>
  );
};

export default BookingsSidebar;
