import Skeleton from '@/components/skeleton';

const Loading = () => (
  <div>
    <div className="relative flex items-center justify-center overflow-hidden py-14 md:py-20">
      <div className="absolute z-0 h-125 w-318.75 bg-gray-700/40 lg:h-90.25"></div>

      <div className="relative z-1 flex flex-col gap-6 lg:flex-row lg:gap-16">
        <Skeleton className="h-49.5 w-74.25" />

        <div className="flex flex-col">
          <Skeleton className="h-6 w-50" />
          <Skeleton className="my-3 h-8 w-70 md:w-101.5" />
          <Skeleton className="h-7 w-62.5" />
          <Skeleton className="mt-6 h-12 w-76.25 md:w-100.75 lg:mt-auto" />
        </div>
      </div>
    </div>

    <div className="flex min-h-[75vh] flex-col items-center px-5 py-16">
      <div className="mb-12">
        <Skeleton className="mx-auto mb-5 h-6 w-43.75 md:w-62.5" />
        <Skeleton className="mx-auto mb-5 h-4 w-75 md:w-187.5" />
        <Skeleton className="mx-auto mb-5 h-4 w-56.25 md:w-162.5" />
        <Skeleton className="mx-auto mb-5 h-4 w-43.75 md:w-137.5" />
      </div>

      <div className="mb-12">
        <Skeleton className="mx-auto mb-5 h-6 w-31.25 md:w-37.5" />
        <Skeleton className="mx-auto mb-5 h-4 w-62.5 md:w-75" />
      </div>
    </div>
  </div>
);

export default Loading;
