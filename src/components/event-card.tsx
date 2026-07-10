'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Event } from 'prisma/client';

type EventCardProps = {
  event: Event;
};

const MotionLink = motion.create(Link);

const EventCard = ({ event }: EventCardProps) => {
  const linkRef = useRef(null);

  const { name, organizerName, imageUrl, location, startDateTime, slug } =
    event;

  const dateObj = new Date(startDateTime);

  const eventDay = dateObj.toLocaleDateString('en-US', {
    day: '2-digit',
  });

  const eventMonth = dateObj.toLocaleDateString('en-US', {
    month: 'short',
  });

  const { scrollYProgress } = useScroll({
    target: linkRef,
    offset: ['0 1', '1.5 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={linkRef}
      href={`/event/${slug}`}
      className="h-95 max-w-125 flex-1 basis-80"
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        scale: scaleProgress,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        opacity: opacityProgress,
      }}
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
    >
      <section className="state-effects relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-white/3">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />

        <div className="flex flex-1 flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-white/75 italic">{organizerName}</p>
          <p className="text-whit/50 mt-4 text-sm">{location}</p>
        </div>

        <section className="absolute top-3 left-3 flex h-11.25 w-11.25 flex-col items-center justify-center rounded-md bg-black/30">
          <p className="-mb-1.25 text-xl font-bold">{eventDay}</p>
          <p className="text-accent-green text-xs uppercase">{eventMonth}</p>
        </section>
      </section>
    </MotionLink>
  );
};

export default EventCard;
