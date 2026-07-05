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
} from '@/components/ui/react-hook-form/form';

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
    <div className="flex flex-col gap-6 sm:flex-row">
      <FormField
        control={form.control}
        name="totalTickets"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel id="total-tickets" className="text-black">
              Choose your tickets
            </FormLabel>

            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              name="total-tickets"
            >
              <FormControl>
                <SelectTrigger className="border-input w-full rounded border text-black sm:w-53">
                  <SelectValue placeholder="Select your tickets" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Pick your event tickets</SelectLabel>
                  <SelectItem
                    value="1"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 mb-1 px-5 outline-none focus-visible:ring-[3px]"
                  >
                    1
                  </SelectItem>
                  <SelectItem
                    value="2"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 mb-1 px-5 outline-none focus-visible:ring-[3px]"
                  >
                    2
                  </SelectItem>
                  <SelectItem
                    value="3"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 mb-1 px-5 outline-none focus-visible:ring-[3px]"
                  >
                    3
                  </SelectItem>
                  <SelectItem
                    value="4"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 mb-1 px-5 outline-none focus-visible:ring-[3px]"
                  >
                    4
                  </SelectItem>
                  <SelectItem
                    value="5"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 mb-1 px-5 outline-none focus-visible:ring-[3px]"
                  >
                    5
                  </SelectItem>
                  <SelectItem
                    value="6"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 mb-1 px-5 outline-none focus-visible:ring-[3px]"
                  >
                    6
                  </SelectItem>
                  <SelectItem
                    value="7"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 mb-1 px-5 outline-none focus-visible:ring-[3px]"
                  >
                    7
                  </SelectItem>
                  <SelectItem
                    value="8"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 mb-1 px-5 outline-none focus-visible:ring-[3px]"
                  >
                    8
                  </SelectItem>
                  <SelectItem
                    value="9"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 mb-1 px-5 outline-none focus-visible:ring-[3px]"
                  >
                    9
                  </SelectItem>
                  <SelectItem
                    value="10"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 mb-0.5 px-5 outline-none focus-visible:ring-[3px]"
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
