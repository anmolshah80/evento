import Skeleton from '@/components/skeleton';
import SkeletonCard from '@/components/skeleton-card';

const Loading = () => (
  <div className="mx-auto flex flex-col items-center justify-center px-5 py-24">
    <Skeleton className="mb-28 h-4 w-37.5 md:w-62.5" />

    <div className="mx-auto flex max-w-275 flex-wrap justify-center gap-10">
      {Array.from({ length: 6 }).map((_item, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  </div>
);

export default Loading;
