'use client';

import { Form, Field } from 'react-final-form';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

import DateTimePicker from '@/components/date-time-picker';
import SelectEventTickets from '@/components/select-event-tickets';

type GetTicketsModalProps = {
  children: React.ReactNode;
};

const GetTicketsModal = ({ children }: GetTicketsModalProps) => {
  const onSubmit = (values) => {
    // debugger;
    console.log('form values: ', values);
    window.alert(JSON.stringify(values, 0, 2));
  };

  const validate = (values) => {
    console.log('validate values: ', values);

    const errors = {};

    if (!values.fullName) {
      errors.fullName = 'Required';
    }
    if (!values.totalTickets) {
      errors.totalTickets = 'Required';
    }
    if (!values.datePicker) {
      errors.datePicker = 'Required';
    }
    if (!values.timePicker) {
      errors.timePicker = 'Required';
    }
    return errors;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine }) => (
          <form
            // onSubmit={(values) => {
            //   handleSubmit(values);
            //   console.log('values: ', values);
            // }}
            onSubmit={handleSubmit}
            noValidate
          >
            <DialogContent className="sm:max-w-[450px] h-[450px] fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
              <DialogHeader className="gap-0">
                <DialogTitle className="m-0 text-[1.7rem] font-medium text-mauve12">
                  Book your tickets
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  {/* <Field
                    name="fullName"
                    render={({ input, meta }) => (
                      <>
                        <Label htmlFor="name" className="text-black">
                          Name
                        </Label>
                        <input
                          id="name"
                          // name="fullName"
                          className="outline-none text-black border border-input bg-transparent rounded h-9 px-3 placeholder-mauve11 active:placeholder-transparent focus:placeholder-transparent placeholder:text-sm mb-1"
                          placeholder="John Doe"
                          {...input}
                        />

                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </>
                    )}
                  /> */}

                  <Field name="fullName">
                    {({ input, meta }) => (
                      <>
                        <Label htmlFor="fullName" className="text-black">
                          Name
                        </Label>
                        <input
                          id="fullName"
                          // name="fullName"
                          className="outline-none text-black border border-input bg-transparent rounded h-9 px-3 placeholder-mauve11 active:placeholder-transparent focus:placeholder-transparent placeholder:text-sm mb-1"
                          placeholder="John Doe"
                          // {...input}
                          name={input.name}
                          value={input.value}
                          onChange={input.onChange}
                        />

                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </>
                    )}
                  </Field>
                </div>

                <div className="grid">
                  <DateTimePicker />
                </div>

                <div className="grid gap-2">
                  <Field name="totalTickets">
                    {({ input, meta }) => (
                      <>
                        <Label htmlFor="totalTickets" className="text-black">
                          Choose your tickets
                        </Label>

                        <SelectEventTickets input={input} />

                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </>
                    )}
                  </Field>
                </div>
              </div>
              <DialogFooter className="mt-3">
                <DialogClose asChild>
                  <button className="w-[100px] h-[35px] text-black border border-slate-800 outline-none rounded hover:bg-gray-100 select-none">
                    Cancel
                  </button>
                </DialogClose>
                <button
                  type="submit"
                  className="inline-flex w-[100px] h-[35px] items-center justify-center rounded bg-black px-[15px] font-medium leading-none text-white outline-none outline-offset-1 hover:bg-black/[80%] focus-visible:outline-2 cursor-pointer"
                >
                  Submit
                </button>
              </DialogFooter>
            </DialogContent>
          </form>
        )}
      />
    </Dialog>
  );
};

export default GetTicketsModal;
