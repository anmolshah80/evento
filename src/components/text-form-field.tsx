import { UseFormReturn } from 'react-hook-form';
import { ClassValue } from 'clsx';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { cn } from '@/lib/utils';

type TextFormFieldProps = {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  form: UseFormReturn<any, any, any>;
  fieldName: string;
  fieldId: string;
  label: string;
  placeholder?: string;
  fieldClassName?: ClassValue;
};

const TextFormField = ({
  form,
  fieldName,
  fieldId,
  label,
  fieldClassName,
  placeholder = 'Placeholder',
}: TextFormFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabel htmlFor={fieldId} className="text-black">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              id={fieldId}
              className={cn(
                'outline-none text-black border border-input bg-transparent rounded h-9 px-3 placeholder-mauve11 placeholder:text-sm',
                fieldClassName,
              )}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextFormField;
