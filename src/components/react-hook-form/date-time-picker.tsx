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
    <div className="flex flex-col gap-6 sm:flex-row">
      <FormField
        control={form.control}
        name="eventDate"
        render={({ field }) => {
          // Convert ISO string to Date object for the calendar
          const dateValue = field.value ? parseISO(field.value) : undefined;

          return (
            <FormItem className="flex w-full flex-col">
              <FormLabel htmlFor="date-picker" className="text-black">
                Event date
              </FormLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild className="bg-transparent">
                  <FormControl>
                    <Button
                      id="date-picker"
                      variant={'outline'}
                      className={cn(
                        'border-input w-full justify-between rounded border font-normal text-black hover:bg-transparent',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(dateValue as Date, 'PPP')
                      ) : (
                        <span className="text-mauve11">Pick a date</span>
                      )}
                      <CalendarIcon className="text-mauve11 ml-auto h-4 w-4" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="max-h-80 min-w-max overflow-y-scroll bg-black p-0 text-white"
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
                    className="w-full border-white bg-white"
                    additionalClassNames={{
                      button_next: 'px-5! text-white hover:text-white rounded',
                      button_previous:
                        'px-5! text-white hover:text-white rounded',
                      today: 'rounded dark:hover:text-white hover:text-white',
                      dropdowns: 'text-white dark:text-white',
                      weekday: 'text-white dark:text-white',
                    }}
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
          <FormItem className="relative flex w-full flex-col">
            <FormLabel htmlFor="time-picker" className="text-black">
              Event time
            </FormLabel>
            <Input
              type="time"
              id="time-picker"
              step="1"
              className="border-input relative appearance-none rounded border bg-transparent px-2 text-black [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              {...field}
              ref={eventTimeRef}
            />
            <Clock8Icon
              className="text-mauve11 absolute top-8.5 right-3 h-4 w-4 cursor-pointer"
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
