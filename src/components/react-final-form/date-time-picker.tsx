'use client';

import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Field } from 'react-final-form';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const DateTimePicker = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        <Field name="datePicker">
          {({ input, meta }) => {
            const date = input.value ? new Date(input.value) : undefined;

            return (
              <>
                <Label htmlFor="datePicker" className="text-black">
                  Event date
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="datePicker"
                      className="w-52 justify-between font-normal text-mauve11 border-input border"
                      name={input.name}
                    >
                      {date ? date.toLocaleDateString() : 'Select date'}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="min-w-max p-0 bg-black text-white"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={input.value}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        input.onChange(date?.toISOString());

                        setOpen(false);
                      }}
                      className="border-white w-full bg-white"
                    />
                  </PopoverContent>
                </Popover>

                {meta.touched && meta.error && (
                  <span className="text-red-600">{meta.error}</span>
                )}
              </>
            );
          }}
        </Field>
      </div>

      <div className="flex flex-col gap-2">
        <Field name="timePicker">
          {({ input, meta }) => (
            <>
              <Label htmlFor="timePicker" className="text-black">
                Event time
              </Label>
              <Input
                type="time"
                id="timePicker"
                step="1"
                className="bg-transparent border border-input text-black appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                {...input}
              />

              {meta.touched && meta.error && (
                <span className="text-red-700">{meta.error}</span>
              )}
            </>
          )}
        </Field>
      </div>
    </div>
  );
};

export default DateTimePicker;
