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
import { Label } from '@/components/ui/label';

import DateTimePicker from '@/components/date-time-picker';
import SelectScrollable from '@/components/select-scrollable';

type GetTicketsModalProps = {
  children: React.ReactNode;
};

const GetTicketsModal = ({ children }: GetTicketsModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
      <form>
        <DialogContent className="sm:max-w-[450px] h-[450px] fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
          <DialogHeader className="gap-0">
            <DialogTitle className="m-0 text-[1.7rem] font-medium text-mauve12">
              Book your tickets
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-black">
                Name
              </Label>
              <input
                id="name"
                name="name"
                className="outline-none text-black border border-input bg-transparent rounded h-9 px-3 placeholder-mauve11 active:placeholder-transparent focus:placeholder-transparent placeholder:text-sm mb-1"
                placeholder="John Doe"
              />
            </div>
            <div className="grid">
              {/* <Label htmlFor="booked-date-time" className="text-black">
                Event date
              </Label>
              <input
                id="booked-date-time"
                name="bookedDateTime"
                className="outline-none border border-slate-800 rounded"
              /> */}
              <DateTimePicker />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="total-tickets" className="text-black">
                Choose your tickets
              </Label>

              <SelectScrollable />
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
              className="inline-flex w-[100px] h-[35px] items-center justify-center rounded bg-black px-[15px] font-medium leading-none text-white outline-none outline-offset-1 hover:bg-black/[80%] focus-visible:outline-2 select-none"
            >
              Submit
            </button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default GetTicketsModal;
