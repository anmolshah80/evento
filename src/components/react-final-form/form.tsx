'use client';

// Source -> `src/components/ui/form.tsx`

import { ComponentProps, createContext, useId } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { Label } from '@/components/ui/label';

import { cn } from '@/lib/utils';
import { FieldMetaProps } from '@/lib/types';

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
};

const FormLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) => {
  return (
    <Label
      data-slot="form-label"
      className={cn('data-[error=true]:text-destructive', className)}
      htmlFor={`${props.htmlFor}-form-item`}
      {...props}
    />
  );
};

const FormDescription = ({
  className,
  fieldId,
  ...props
}: ComponentProps<'p'> & {
  fieldId: string;
}) => {
  return (
    <p
      data-slot="form-description"
      id={`${fieldId}-form-item-description`}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
};

const FormMessage = ({
  className,
  fieldId,
  fieldMeta,
  ...props
}: ComponentProps<'p'> & { fieldId: string; fieldMeta: FieldMetaProps }) => {
  if (fieldMeta.touched && fieldMeta.error) {
    return (
      <p
        data-slot="form-message"
        id={`${fieldId}-form-item-message`}
        className={cn('text-destructive text-sm', className)}
        {...props}
      >
        {fieldMeta.error}
      </p>
    );
  }

  return null;
};

export { FormItem, FormLabel, FormDescription, FormMessage };
