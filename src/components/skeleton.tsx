import { ClassValue } from 'clsx';

import { cn } from '@/lib/utils';

type SkeletonProps = {
  className?: ClassValue;
};

const Skeleton = ({ className }: SkeletonProps) => (
  <div
    className={cn(
      'animate-pulse h-4 w-[550px] rounded-md bg-white/5',
      className,
    )}
  ></div>
);

export default Skeleton;
