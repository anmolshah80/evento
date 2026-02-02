'use client';

import { useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { format, parseISO } from 'date-fns';
import { CalendarIcon, Clock8Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/react-hook-form/form';

import { cn } from '@/lib/utils';

type DateTimePickerProps = {
  form: UseFormReturn<
    {
      firstName: string;
      lastName: string;
      email: string;
      eventDate: string;
      eventTime: string;
      totalTickets: string;
      phone?: string | undefined;
    },
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    any,
    {
      firstName: string;
      lastName: string;
      email: string;
      eventDate: string;
      eventTime: string;
      totalTickets: string;
      phone?: string | undefined;
    }
  >;
};

const DateTimePicker = ({ form }: DateTimePickerProps) => {
  const [open, setOpen] = useState(false);

  const eventTimeRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <FormField
        control={form.control}
        name="eventDate"
        render={({ field }) => {
          // Convert ISO string to Date object for the calendar
          const dateValue = field.value ? parseISO(field.value) : undefined;

          return (
            <FormItem className="flex flex-col w-full">
              <FormLabel htmlFor="date-picker" className="text-black">
                Event date
              </FormLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      id="date-picker"
                      variant={'outline'}
                      className={cn(
                        'w-full justify-between font-normal text-black border-input border hover:bg-transparent',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(dateValue as Date, 'PPP')
                      ) : (
                        <span className="text-mauve11">Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 text-mauve11" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="min-w-max max-h-[320px] p-0 bg-black text-white overflow-y-scroll"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    captionLayout="dropdown"
                    selected={dateValue}
                    onSelect={(date) => {
                      if (date) {
                        // Get the date at midnight UTC
                        const utcDate = new Date(
                          Date.UTC(
                            date.getFullYear(),
                            date.getMonth(),
                            date.getDate(),
                          ),
                        );

                        field.onChange(utcDate.toISOString());
                      } else {
                        field.onChange(null);
                      }

                      setOpen(false);
                    }}
                    disabled={(date) => date < new Date('2020-01-01')}
                    className="border-white w-full bg-white"
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        control={form.control}
        name="eventTime"
        render={({ field }) => (
          <FormItem className="w-full flex flex-col relative">
            <FormLabel htmlFor="time-picker" className="text-black">
              Event time
            </FormLabel>
            <Input
              type="time"
              id="time-picker"
              step="1"
              className="bg-transparent border border-input text-black appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none px-2 relative"
              {...field}
              ref={eventTimeRef}
            />
            <Clock8Icon
              className="absolute right-3 top-[34px] h-4 w-4 text-mauve11 cursor-pointer"
              onClick={() => eventTimeRef?.current?.focus()}
            />

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default DateTimePicker;
