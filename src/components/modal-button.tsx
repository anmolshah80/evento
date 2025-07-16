// import GetTicketsModal from '@/components/react-final-form/get-tickets-modal';
import GetTicketsModal from '@/components/react-hook-form/get-tickets-modal';

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
