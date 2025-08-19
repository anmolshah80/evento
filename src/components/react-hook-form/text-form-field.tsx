import { HTMLInputAutoCompleteAttribute } from 'react';
import { FieldError, UseFormReturn } from 'react-hook-form';
import { ClassValue } from 'clsx';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/react-hook-form/form';
import { Input } from '@/components/ui/input';

import { cn } from '@/lib/utils';

type TextFormFieldProps = {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  form: UseFormReturn<any, any, any>;
  fieldName: string;
  fieldId: string;
  label: string;
  maxLength?: number;
  autoComplete?: HTMLInputAutoCompleteAttribute | undefined;
  fieldHasErrors?: FieldError | undefined;
  placeholder?: string;
  fieldClassName?: ClassValue;
  fieldDescription?: React.ReactNode;
};

type ShowFormMessageProps = {
  fieldDescription: React.ReactNode;
  fieldHasErrors: FieldError | undefined;
};

const ShowFormMessage = ({
  fieldDescription,
  fieldHasErrors,
}: ShowFormMessageProps) => {
  if (!fieldDescription) return <FormMessage />;

  if (fieldDescription && fieldHasErrors) return <FormMessage />;

  return (
    <FormDescription
      className={cn({
        hidden: fieldDescription === undefined,
      })}
    >
      {fieldDescription}
    </FormDescription>
  );
};

const TextFormField = ({
  form,
  fieldName,
  fieldId,
  label,
  fieldClassName,
  maxLength,
  autoComplete,
  fieldDescription,
  fieldHasErrors,
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
              maxLength={maxLength}
              autoComplete={autoComplete}
              {...field}
            />
          </FormControl>

          <ShowFormMessage
            fieldDescription={fieldDescription}
            fieldHasErrors={fieldHasErrors}
          />
        </FormItem>
      )}
    />
  );
};

export default TextFormField;
