import Skeleton from '@/components/skeleton';

const SkeletonCard = () => (
  <div className="space-y-4">
    <Skeleton className="h-[228px] w-[250px] md:w-[335px]" />
    <Skeleton className="h-8 w-[200px] md:w-[250px] mx-auto" />
    <Skeleton className="h-6 w-[100px] md:w-[120px] mx-auto" />
    <Skeleton className="h-5 w-[130px] md:w-[150px] mt-4 mx-auto" />
  </div>
);

export default SkeletonCard;
