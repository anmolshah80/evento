// import GetTicketsModal from '@/components/react-final-form/get-tickets-modal';
import GetTicketsModal from '@/components/react-hook-form/get-tickets-modal';

import { cn } from '@/lib/utils';

type ModalButtonProps = {
  eventId: number;
  className: string;
  title: string;
};

const ModalButton = ({ eventId, title, className }: ModalButtonProps) => {
  return (
    <GetTicketsModal eventId={eventId}>
      <button className={cn(className, 'bg-white/20')}>{title}</button>
    </GetTicketsModal>
  );
};

export default ModalButton;
