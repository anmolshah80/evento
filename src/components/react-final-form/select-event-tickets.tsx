import * as React from 'react';
import { Field } from 'react-final-form';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

import { FormItem, FormMessage } from '@/components/react-final-form/form';

// React Final Form Implementation (Source) -> https://stackoverflow.com/questions/75815473/how-can-i-implement-react-hook-form-with-radix-ui-select

const SelectEventTickets = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <Field name="totalTickets">
        {({ input, meta }) => (
          <FormItem className="flex flex-col w-full">
            <Label htmlFor="total-tickets" className="text-black">
              Choose your tickets
            </Label>

            <Select
              name={input.name}
              value={input.value}
              onValueChange={input.onChange}
            >
              <SelectTrigger
                className="w-full sm:w-[13.25rem] text-black border border-input"
                id="total-tickets"
              >
                <SelectValue placeholder="Select your tickets" />
              </SelectTrigger>
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

            <FormMessage fieldId="total-tickets" fieldMeta={meta} />
          </FormItem>
        )}
      </Field>
    </div>
  );
};

export default SelectEventTickets;
