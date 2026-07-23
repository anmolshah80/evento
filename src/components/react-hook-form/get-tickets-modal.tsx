'use client';

import * as z from 'zod/v4';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';

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

import { Prisma } from 'prisma/client';
import { createBooking } from '@/app/lib/actions';
import { cn, combineDateTime, formatToFriendlyDate } from '@/lib/utils';
import { PHONE_NUMBER_REGEX } from '@/lib/constants';
import {
  EventBookingFormResponseDataProps,
  EventBookingWithEvent,
} from '@/lib/types';

type GetTicketsModalProps = {
  eventId: string;
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
    })
    .max(35, {
      error: 'First name cannot exceed 35 characters',
    }),
  lastName: z
    .string({
      error: 'Last name cannot be empty',
    })
    .trim()
    .min(2, {
      error: 'Please enter your last name',
    })
    .max(35, {
      error: 'Last name cannot exceed 35 characters',
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

const GetTicketsModal = ({ eventId, children }: GetTicketsModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      eventDate: '',
      eventTime: '10:30:00',
      totalTickets: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true);

    // console.log('Form errors:', form.formState.errors);

    try {
      const bookedDateTime = combineDateTime(data.eventDate, data.eventTime);

      const formattedFormData: Prisma.EventBookingCreateInput = {
        event: {
          // Prisma expects relation connection
          connect: { id: eventId },
        },
        bookedDateTime,
        attendeeFirstName: data.firstName,
        attendeeLastName: data.lastName,
        email: data.email,
        phone: Boolean(data.phone) ? data.phone : null,
        totalTickets: Number(data.totalTickets),
      };

      const bookingResponse: EventBookingWithEvent =
        await createBooking(formattedFormData);

      const formattedBookedDateTime = formatToFriendlyDate(
        bookedDateTime.toISOString(),
      );

      // show success toast
      toast.success(`Your booking was successful, ${data.firstName}!`, {
        duration: 8000,
        description: formattedBookedDateTime,
      });

      const emailResponse = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookingResponse,
          bookedDateTime: formattedBookedDateTime,
        }),
      });

      const emailResponseData: EventBookingFormResponseDataProps =
        await emailResponse.json();

      if (!emailResponseData.success)
        throw new Error('Failed to send confirmation email');

      toast.success(
        `A confirmation email has been sent to you at ${data.email}. Check your inbox (or spam folder) for details.`,
        {
          duration: 8000,
          position: 'bottom-right',
          closeButton: true,
        },
      );

      // reset form and close modal after successful submission
      form.reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting booking: ', error);

      toast.error(
        'There was an error submitting your booking. Please try again later.',
        {
          duration: 8000,
        },
      );
    } finally {
      setIsLoading(false);
    }
  };

  const {
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />

      <DialogContent
        className={
          'bg-gray1 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[96vh] min-h-[calc(100dvh-8rem)] w-[90vw] max-w-120.5 -translate-x-1/2 -translate-y-1/2 gap-0 overflow-y-scroll rounded-md p-6.25 shadow-(--shadow-6) focus:outline-none sm:max-w-125 sm:overflow-y-auto'
        }
        dialogCloseIconClassName="[&_svg:not([class*='size-'])]:size-5 top-[1.65rem] cursor-pointer hover:bg-gray-100 hover:shadow-sm"
      >
        <DialogHeader className="mb-9 gap-0">
          <DialogTitle className="text-mauve12 m-0 text-left text-2xl font-medium md:text-[1.7rem]">
            Book your tickets
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col gap-6 sm:flex-row">
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

              <div className="flex flex-col gap-6 sm:flex-row">
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
                    <span className="text-mauve11 flex items-center text-xs">
                      Include your country code for international numbers
                    </span>
                  }
                />
              </div>

              <DateTimePicker form={form} />

              <SelectEventTickets form={form} />
            </div>

            <DialogFooter className="flex-row items-end justify-between gap-3">
              <DialogClose asChild>
                <Button
                  className="h-8.75 w-25 rounded border border-slate-800 bg-transparent text-base text-black outline-none select-none hover:bg-gray-100"
                  onClick={() => form.reset()}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className={cn(
                  'inline-flex h-8.75 w-25 items-center justify-center rounded bg-black px-3 text-base leading-none font-medium text-white outline-offset-1 outline-none select-none hover:bg-black/80 focus-visible:outline-2',
                  (isSubmitting || isLoading) && 'w-30',
                )}
                disabled={isSubmitting || isLoading}
              >
                {isSubmitting || isLoading ? (
                  <span className="flex items-center justify-center gap-4">
                    Submit{' '}
                    <LoaderCircle
                      size={16}
                      className="btn-spinner text-white"
                    />
                  </span>
                ) : (
                  <span>Submit</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GetTicketsModal;
