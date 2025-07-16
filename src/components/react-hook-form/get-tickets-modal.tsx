'use client';

import * as z from 'zod/v4';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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
import { Form } from '@/components/ui/react-hook-form/form';
import { Button } from '@/components/ui/button';

import DateTimePicker from '@/components/react-hook-form/date-time-picker';
import SelectEventTickets from '@/components/react-hook-form/select-event-tickets';
import TextFormField from '@/components/react-hook-form/text-form-field';

import { PHONE_NUMBER_REGEX } from '@/lib/constants';

type GetTicketsModalProps = {
  children: React.ReactNode;
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

const GetTicketsModal = ({ children }: GetTicketsModalProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      eventDate: undefined,
      eventTime: '10:30:00',
      totalTickets: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    // console.log('Form errors:', form.formState.errors);
    console.log('onSubmit form data: ', data);
    window.alert(JSON.stringify(data, undefined, 2));
  };

  const {
    formState: { errors, isSubmitting },
  } = form;

  console.log('errors: ', errors);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />

      <DialogContent
        className={
          'sm:max-w-[500px] fixed left-1/2 top-1/2 max-h-[96vh] w-[90vw] max-w-[482px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow gap-0 overflow-y-scroll sm:overflow-y-auto'
        }
        dialogCloseIconClassName="[&_svg:not([class*='size-'])]:size-4 top-[1.65rem]"
      >
        <DialogHeader className="gap-0 mb-9">
          <DialogTitle className="m-0 text-2xl text-left md:text-[1.7rem] font-medium text-mauve12">
            Book your tickets
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <TextFormField
                  form={form}
                  fieldId="first-name"
                  fieldName="firstName"
                  label="First name"
                  placeholder="John"
                  autoComplete="name"
                />

                <TextFormField
                  form={form}
                  fieldId="last-name"
                  fieldName="lastName"
                  label="Last name"
                  placeholder="Doe"
                  autoComplete="family-name"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <TextFormField
                  form={form}
                  fieldId="email-address"
                  fieldName="email"
                  label="Email address"
                  placeholder="johndoe@gmail.com"
                  autoComplete="email"
                />

                <TextFormField
                  form={form}
                  fieldId="phone-number"
                  fieldName="phone"
                  label="Phone number (opt.)"
                  placeholder="e.g., +977 123-456-7890"
                  autoComplete="mobile tel"
                  maxLength={17}
                  fieldHasErrors={errors.phone}
                  fieldDescription={
                    <span className="flex items-center text-xs text-mauve11">
                      Include your country code for international numbers
                    </span>
                  }
                />
              </div>

              <DateTimePicker form={form} />

              <SelectEventTickets form={form} />
            </div>

            <DialogFooter className="flex-row gap-3 justify-between">
              <DialogClose asChild>
                <Button
                  className="w-[100px] h-[35px] text-black border text-base border-slate-800 outline-none rounded hover:bg-gray-100 select-none"
                  onClick={() => form.reset()}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className="inline-flex w-[100px] h-[35px] items-center text-base justify-center rounded bg-black px-[15px] font-medium leading-none text-white outline-none outline-offset-1 hover:bg-black/[80%] focus-visible:outline-2 select-none"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GetTicketsModal;
