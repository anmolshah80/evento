import { HTMLInputAutoCompleteAttribute } from 'react';
import { Field } from 'react-final-form';
import { ClassValue } from 'clsx';

import { Input } from '@/components/ui/input';

import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/react-final-form/form';

import { cn } from '@/lib/utils';
import { FieldMetaProps } from '@/lib/types';

type TextFormFieldProps = {
  fieldName: string;
  fieldId: string;
  label: string;
  maxLength?: number;
  autoComplete?: HTMLInputAutoCompleteAttribute | undefined;
  placeholder?: string;
  fieldClassName?: ClassValue;
  fieldDescription?: React.ReactNode;
};

type ShowFormMessageProps = {
  fieldDescription: React.ReactNode;
  fieldId: string;
  fieldMeta: FieldMetaProps;
};

const ShowFormMessage = ({
  fieldDescription,
  fieldId,
  fieldMeta,
}: ShowFormMessageProps) => {
  if (!fieldDescription)
    return <FormMessage fieldId={fieldId} fieldMeta={fieldMeta} />;

  if (fieldDescription && fieldMeta.error)
    return <FormMessage fieldId={fieldId} fieldMeta={fieldMeta} />;

  return (
    <FormDescription
      fieldId={fieldId}
      className={cn({
        hidden: fieldDescription === undefined,
      })}
    >
      {fieldDescription}
    </FormDescription>
  );
};

const TextFormField = ({
  fieldName,
  fieldId,
  label,
  fieldClassName,
  maxLength,
  autoComplete,
  fieldDescription,
  placeholder = 'Placeholder',
}: TextFormFieldProps) => {
  return (
    <Field name={fieldName}>
      {({ input, meta }) => {
        return (
          <FormItem className="flex flex-col w-full">
            <FormLabel htmlFor={fieldId} className="text-black">
              {label}
            </FormLabel>
            <Input
              id={fieldId}
              className={cn(
                'outline-none text-black border border-input bg-transparent rounded h-9 px-3 placeholder-mauve11 placeholder:text-sm',
                fieldClassName,
              )}
              placeholder={placeholder}
              maxLength={maxLength}
              autoComplete={autoComplete}
              {...input}
            />

            <ShowFormMessage
              fieldDescription={fieldDescription}
              fieldId={fieldId}
              fieldMeta={meta}
            />
          </FormItem>
        );
      }}
    </Field>
  );
};

export default TextFormField;
