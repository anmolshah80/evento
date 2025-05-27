import Image from 'next/image';
import Link from 'next/link';

import { TEventoEvent } from '@/lib/types';

type EventCardProps = {
  event: TEventoEvent;
};

const EventCard = ({ event }: EventCardProps) => {
  const { name, organizerName, imageUrl, location, date, slug } = event;

  const dateObj = new Date(date);

  const eventDay = dateObj.toLocaleDateString('en-US', {
    day: '2-digit',
  });

  const eventMonth = dateObj.toLocaleDateString('en-US', {
    month: 'short',
  });

  return (
    <Link
      href={`/event/${slug}`}
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
    >
      <section className="w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />

        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="italic text-white/75">{organizerName}</p>
          <p className="text-sm text-whit/50 mt-4">{location}</p>
        </div>

        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">{eventDay}</p>
          <p className="text-xs uppercase text-accent">{eventMonth}</p>
        </section>
      </section>
    </Link>
  );
};

export default EventCard;
