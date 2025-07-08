'use client';

import { UseFormReturn } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

type SelectEventTicketsProps = {
  form: UseFormReturn<
    {
      firstName: string;
      lastName: string;
      eventDate: string;
      eventTime: string;
      totalTickets: string;
    },
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    any,
    {
      firstName: string;
      lastName: string;
      eventDate: string;
      eventTime: string;
      totalTickets: string;
    }
  >;
};

const SelectEventTickets = ({ form }: SelectEventTicketsProps) => {
  return (
    <FormField
      control={form.control}
      name="totalTickets"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel id="total-tickets" className="text-black">
            Choose your tickets
          </FormLabel>

          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            name="total-tickets"
          >
            <FormControl>
              <SelectTrigger className="w-52 text-black border border-input">
                <SelectValue placeholder="Select your tickets" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Pick your event tickets</SelectLabel>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="7">7</SelectItem>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="10">10</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectEventTickets;
