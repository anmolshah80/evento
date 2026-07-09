// import GetTicketsModal from '@/components/react-final-form/get-tickets-modal';
import GetTicketsModal from '@/components/react-hook-form/get-tickets-modal';

import { cn } from '@/lib/utils';

type ModalButtonProps = {
  eventId: string;
  className: string;
  title: string;
};

const ModalButton = ({ eventId, title, className }: ModalButtonProps) => {
  return (
    <GetTicketsModal eventId={eventId}>
      <span className={cn(className, 'cursor-pointer bg-white/20 text-center')}>
        {title}
      </span>
    </GetTicketsModal>
  );
};

export default ModalButton;
