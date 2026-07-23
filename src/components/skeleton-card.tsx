import Skeleton from '@/components/skeleton';

const SkeletonCard = () => (
  <div className="space-y-4">
    <Skeleton className="h-57 w-62.5 md:w-83.75" />
    <Skeleton className="mx-auto h-8 w-50 md:w-62.5" />
    <Skeleton className="mx-auto h-6 w-25 md:w-30" />
    <Skeleton className="mx-auto mt-4 h-5 w-32.5 md:w-37.5" />
  </div>
);

export default SkeletonCard;
