'use client';

import * as z from 'zod/v4';
import { Form as ReactFinalForm } from 'react-final-form';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import DateTimePicker from '@/components/react-final-form/date-time-picker';
import SelectEventTickets from '@/components/react-final-form/select-event-tickets';
import TextFormField from '@/components/react-final-form/text-form-field';

import { PHONE_NUMBER_REGEX } from '@/lib/constants';

type GetTicketsModalProps = {
  children: React.ReactNode;
};

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: Date | string;
  eventTime: string;
  totalTickets: string;
};

const FormSchema = z.object({
  firstName: z
    .string({
      error: 'First name cannot be empty',
    })
    .trim()
    .min(2, {
      error: 'Please enter your first name',
    }),
  lastName: z
    .string({
      error: 'Last name cannot be empty',
    })
    .trim()
    .min(3, {
      error: 'Please enter your last name',
    }),
  email: z.email('Please enter a valid email'),
  // To validate optional text inputs -> https://github.com/colinhacks/zod/issues/310#issuecomment-794533682
  phone: z
    .string()
    .regex(PHONE_NUMBER_REGEX, {
      error: 'Please match the requested format. e.g., +1 123-456-7890',
    })
    .max(17)
    .optional()
    .or(z.literal('')),
  eventDate: z.iso.datetime({
    error: 'Please select an event date',
  }),
  eventTime: z.iso.time({
    error: 'Invalid input',
  }),
  totalTickets: z.string({
    error: 'Please select your event tickets',
  }),
});

const validate = (values: Values) => {
  const result = FormSchema.safeParse(values);

  if (result.success) {
    return {};
  }

  const fieldErrors: Record<string, string> = {};

  for (const issue of result.error.issues) {
    const path = issue.path[0];
    const errorCode = issue.code;

    if (path && typeof path === 'string' && !fieldErrors[path]) {
      if (errorCode === 'invalid_union') {
        // Handle invalid_union case
        if (issue.errors && issue.errors[0] && issue.errors[0][0]) {
          fieldErrors[path] = issue.errors[0][0].message;
        }
      } else {
        // Handle regular cases
        fieldErrors[path] = issue.message;
      }
    }
  }

  return fieldErrors;
};

const GetTicketsModal = ({ children }: GetTicketsModalProps) => {
  const onSubmit = (values: Values) => {
    console.log('form values: ', values);
    window.alert(JSON.stringify(values, undefined, 2));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />

      <DialogContent
        className={
          'bg-gray1 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[96vh] w-[90vw] max-w-120.5 -translate-x-1/2 -translate-y-1/2 gap-0 overflow-y-scroll rounded-md p-6.25 shadow-(--shadow-6) focus:outline-none sm:max-w-125 sm:overflow-y-auto'
        }
        dialogCloseIconClassName="[&_svg:not([class*='size-'])]:size-4 top-[1.65rem]"
      >
        <DialogHeader className="mb-9 gap-0">
          <DialogTitle className="text-mauve12 m-0 text-left text-2xl font-medium md:text-[1.7rem]">
            Book your tickets
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <ReactFinalForm
          onSubmit={onSubmit}
          validate={validate}
          initialValues={{
            eventTime: '10:30:00',
          }}
          render={({ handleSubmit, submitting, pristine, form }) => {
            return (
              <form onSubmit={handleSubmit} noValidate className="grid gap-8">
                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <TextFormField
                      fieldId="first-name"
                      fieldName="firstName"
                      label="First name"
                      placeholder="John"
                      autoComplete="name"
                    />

                    <TextFormField
                      fieldId="last-name"
                      fieldName="lastName"
                      label="Last name"
                      placeholder="Doe"
                      autoComplete="family-name"
                    />
                  </div>

                  <div className="flex flex-col gap-6 sm:flex-row">
                    <TextFormField
                      fieldId="email-address"
                      fieldName="email"
                      label="Email address"
                      placeholder="johndoe@gmail.com"
                      autoComplete="email"
                    />

                    <TextFormField
                      fieldId="phone-number"
                      fieldName="phone"
                      label="Phone number (opt.)"
                      placeholder="e.g., +977 123-456-7890"
                      autoComplete="mobile tel"
                      maxLength={17}
                      fieldDescription={
                        <span className="text-mauve11 flex items-center text-xs">
                          Include your country code for international numbers
                        </span>
                      }
                    />
                  </div>

                  <DateTimePicker />

                  <SelectEventTickets />
                </div>

                <DialogFooter className="flex-row justify-between gap-3">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      className="h-8.75 w-25 rounded border border-slate-800 text-base text-black outline-none select-none hover:bg-gray-100"
                      onClick={() => form.reset()}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    disabled={submitting || pristine}
                    className="inline-flex h-8.75 w-25 items-center justify-center rounded bg-black px-3.75 text-base leading-none font-medium text-white outline-offset-1 outline-none select-none hover:bg-black/80 focus-visible:outline-2"
                  >
                    Submit
                  </Button>
                </DialogFooter>
              </form>
            );
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default GetTicketsModal;
