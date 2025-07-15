'use client';

import { Form as ReactFinalForm, Field } from 'react-final-form';

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
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { FormItem, FormLabel } from '@/components/react-final-form/form';
import DateTimePicker from '@/components/react-final-form/date-time-picker';
import SelectEventTickets from '@/components/react-final-form/select-event-tickets';

import { cn } from '@/lib/utils';

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

const GetTicketsModal = ({ children }: GetTicketsModalProps) => {
  const onSubmit = (values: Values) => {
    console.log('form values: ', values);
    window.alert(JSON.stringify(values, undefined, 2));
  };

  const validate = (values: Values) => {
    const errors: Partial<Values> = {};

    if (!values.firstName) errors.firstName = 'Required';
    if (!values.totalTickets) errors.totalTickets = 'Required';
    if (!values.eventDate) errors.eventDate = 'Required';
    if (!values.eventTime) errors.eventTime = 'Required';

    return errors;
  };

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

        <ReactFinalForm
          onSubmit={onSubmit}
          // validate={validate}
          initialValues={{ eventTime: '10:30:00' }}
          render={({ handleSubmit, submitting, pristine, form }) => {
            return (
              <form onSubmit={handleSubmit} noValidate className="grid gap-8">
                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Field name="firstName">
                      {({ input, meta }) => (
                        <FormItem className="flex flex-col w-full">
                          <FormLabel
                            htmlFor="first-name"
                            className="text-black"
                          >
                            First name
                          </FormLabel>
                          <Input
                            id="first-name"
                            className="outline-none text-black border border-input bg-transparent rounded h-9 px-3 placeholder-mauve11 placeholder:text-sm"
                            placeholder="John"
                            autoComplete="name"
                            {...input}
                          />

                          {meta.touched && meta.error && (
                            <span className="text-red-700">{meta.error}</span>
                          )}
                        </FormItem>
                      )}
                    </Field>

                    <Field name="lastName">
                      {({ input, meta }) => (
                        <FormItem className="flex flex-col w-full">
                          <FormLabel htmlFor="last-name" className="text-black">
                            Last name
                          </FormLabel>
                          <Input
                            id="last-name"
                            className="outline-none text-black border border-input bg-transparent rounded h-9 px-3 placeholder-mauve11 placeholder:text-sm"
                            placeholder="Doe"
                            autoComplete="family-name"
                            {...input}
                          />

                          {meta.touched && meta.error && (
                            <span className="text-red-700">{meta.error}</span>
                          )}
                        </FormItem>
                      )}
                    </Field>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <Field name="email">
                      {({ input, meta }) => (
                        <FormItem className="flex flex-col w-full">
                          <FormLabel
                            htmlFor="email-address"
                            className="text-black"
                          >
                            Email address
                          </FormLabel>
                          <Input
                            id="email-address"
                            className="outline-none text-black border border-input bg-transparent rounded h-9 px-3 placeholder-mauve11 placeholder:text-sm"
                            placeholder="johndoe@gmail.com"
                            autoComplete="email"
                            {...input}
                          />

                          {meta.touched && meta.error && (
                            <span className="text-red-700">{meta.error}</span>
                          )}
                        </FormItem>
                      )}
                    </Field>

                    <Field name="phone">
                      {({ input, meta }) => (
                        <FormItem className="flex flex-col w-full">
                          <FormLabel
                            htmlFor="phone-number"
                            className="text-black"
                          >
                            Phone number (opt.)
                          </FormLabel>
                          <Input
                            id="phone-number"
                            className="outline-none text-black border border-input bg-transparent rounded h-9 px-3 placeholder-mauve11 placeholder:text-sm"
                            placeholder="e.g., +977 123-456-7890"
                            autoComplete="mobile tel"
                            maxLength={17}
                            {...input}
                          />
                          <p
                            data-slot="form-description"
                            id={'phone-number-form-item-description'}
                            className={cn('text-muted-foreground text-sm')}
                          />

                          {meta.touched && meta.error && (
                            <span className="text-red-700">{meta.error}</span>
                          )}
                        </FormItem>
                      )}
                    </Field>
                  </div>

                  <DateTimePicker />

                  <SelectEventTickets />
                </div>

                <DialogFooter className="flex-row gap-3 justify-between">
                  <DialogClose asChild>
                    <Button
                      type="button"
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
            );
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default GetTicketsModal;
