import Skeleton from '@/components/skeleton';
import SkeletonCard from '@/components/skeleton-card';

const Loading = () => (
  <div className="flex flex-col justify-center items-center mx-auto px-[20px] py-24">
    <Skeleton className="mb-28 h-4 w-[150px] md:w-[250px]" />

    <div className="flex flex-wrap gap-10 justify-center mx-auto max-w-[1100px]">
      {Array.from({ length: 6 }).map((_item, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  </div>
);

export default Loading;
