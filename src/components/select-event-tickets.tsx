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

const SelectEventTickets = ({ form }: SelectEventTicketsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <FormField
        control={form.control}
        name="totalTickets"
        render={({ field }) => (
          <FormItem className="flex flex-col w-full">
            <FormLabel id="total-tickets" className="text-black">
              Choose your tickets
            </FormLabel>

            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              name="total-tickets"
            >
              <FormControl>
                <SelectTrigger className="w-full sm:w-[13.25rem] text-black border border-input">
                  <SelectValue placeholder="Select your tickets" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Pick your event tickets</SelectLabel>
                  <SelectItem
                    value="1"
                    className="outline-none px-5 mb-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    1
                  </SelectItem>
                  <SelectItem
                    value="2"
                    className="outline-none px-5 mb-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    2
                  </SelectItem>
                  <SelectItem
                    value="3"
                    className="outline-none px-5 mb-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    3
                  </SelectItem>
                  <SelectItem
                    value="4"
                    className="outline-none px-5 mb-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    4
                  </SelectItem>
                  <SelectItem
                    value="5"
                    className="outline-none px-5 mb-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    5
                  </SelectItem>
                  <SelectItem
                    value="6"
                    className="outline-none px-5 mb-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    6
                  </SelectItem>
                  <SelectItem
                    value="7"
                    className="outline-none px-5 mb-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    7
                  </SelectItem>
                  <SelectItem
                    value="8"
                    className="outline-none px-5 mb-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    8
                  </SelectItem>
                  <SelectItem
                    value="9"
                    className="outline-none px-5 mb-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    9
                  </SelectItem>
                  <SelectItem
                    value="10"
                    className="outline-none px-5 mb-0.5 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    10
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default SelectEventTickets;
