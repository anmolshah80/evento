import GetTicketsModal from '@/components/get-tickets-modal';

import { cn } from '@/lib/utils';

type ModalButtonProps = {
  className: string;
  title: string;
};

const ModalButton = ({ title, className }: ModalButtonProps) => {
  return (
    <>
      <GetTicketsModal>
        <button className={cn(className, 'bg-white/20')}>{title}</button>
      </GetTicketsModal>
    </>
  );
};

export default ModalButton;
