'use client';

// Source -> `src/components/ui/form.tsx`

import { ComponentProps, createContext, useId } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { Label } from '@/components/ui/label';

import { cn } from '@/lib/utils';

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
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
}

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

const FormFieldDescription = ({
  className,
  id,
  ...props
}: ComponentProps<'p'>) => {
  return (
    <p
      data-slot="form-description"
      id={`${id}-form-item-description`}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
};

export { FormItem, FormLabel, FormFieldDescription };
