'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod/v4';

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
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

import DateTimePicker from '@/components/date-time-picker';
import SelectEventTickets from '@/components/select-event-tickets';
import TextFormField from '@/components/text-form-field';

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
  };

  const {
    formState: { errors },
  } = form;

  console.log('errors: ', errors);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />

      <DialogContent
        className={
          'sm:max-w-[482px] fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow gap-0'
        }
      >
        <DialogHeader className="gap-0 mb-9">
          <DialogTitle className="m-0 text-[1.7rem] font-medium text-mauve12">
            Book your tickets
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
            <div className="grid gap-8">
              <div className="flex gap-6">
                <TextFormField
                  form={form}
                  fieldId="first-name"
                  fieldName="firstName"
                  label="First name"
                  placeholder="John"
                />

                <TextFormField
                  form={form}
                  fieldId="last-name"
                  fieldName="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </div>

              <DateTimePicker form={form} />

              <SelectEventTickets form={form} />
            </div>

            <DialogFooter>
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
