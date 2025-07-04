'use client';

import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';

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
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="date-picker" className="text-black">
          Event date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="w-52 justify-between font-normal text-mauve11 border-input border"
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
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
              className="border-white w-full bg-white"
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="time-picker" className="text-black">
          Event time
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="10:30:00"
          className="bg-transparent border border-input text-black appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
