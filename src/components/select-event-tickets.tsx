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

// React Final Form Implementation (Source) -> https://stackoverflow.com/questions/75815473/how-can-i-implement-react-hook-form-with-radix-ui-select

const SelectEventTickets = () => {
  return (
    <Field name="totalTickets">
      {({ input, meta }) => (
        <>
          <Label htmlFor="totalTickets" className="text-black">
            Choose your tickets
          </Label>

          <Select
            name={input.name}
            value={input.value}
            onValueChange={input.onChange}
          >
            <SelectTrigger
              className="w-52 text-black border border-input mb-1"
              id="totalTickets"
            >
              <SelectValue placeholder="Select your tickets" />
            </SelectTrigger>
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

          {meta.touched && meta.error && (
            <span className="text-red-700">{meta.error}</span>
          )}
        </>
      )}
    </Field>
  );
};

export default SelectEventTickets;
