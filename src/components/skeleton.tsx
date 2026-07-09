import { ClassValue } from 'clsx';

import { cn } from '@/lib/utils';

type SkeletonProps = {
  className?: ClassValue;
};

const Skeleton = ({ className }: SkeletonProps) => (
  <div
    className={cn('h-4 w-137.5 animate-pulse rounded-md bg-white/5', className)}
  ></div>
);

export default Skeleton;
