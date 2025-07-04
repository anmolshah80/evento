import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SelectScrollable = () => {
  return (
    <Select>
      <SelectTrigger
        className="w-52 text-black border border-input mb-1"
        id="total-tickets"
      >
        <SelectValue placeholder="Select your tickets" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Pick your event tickets</SelectLabel>
          <SelectItem value="one">1</SelectItem>
          <SelectItem value="two">2</SelectItem>
          <SelectItem value="three">3</SelectItem>
          <SelectItem value="four">4</SelectItem>
          <SelectItem value="five">5</SelectItem>
          <SelectItem value="six">6</SelectItem>
          <SelectItem value="seven">7</SelectItem>
          <SelectItem value="eight">8</SelectItem>
          <SelectItem value="nine">9</SelectItem>
          <SelectItem value="ten">10</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectScrollable;
