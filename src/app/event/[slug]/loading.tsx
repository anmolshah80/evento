import Skeleton from '@/components/skeleton';

const Loading = () => (
  <div>
    <div className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
      <div className="w-[1275px] h-[361px] bg-gray-700/40 z-0 absolute"></div>

      <div className="z-50 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
        <Skeleton className="h-[198px] w-[297px]" />

        <div className="flex flex-col">
          <Skeleton className="h-6 w-[200px]" />
          <Skeleton className="h-8 w-[406px] my-3" />
          <Skeleton className="h-7 w-[250px]" />
          <Skeleton className="h-12 w-[403px] mt-auto" />
        </div>
      </div>
    </div>

    <div className="min-h-[75vh] flex flex-col items-center px-5 py-16">
      <div className="mb-12">
        <Skeleton className="mb-5 mx-auto h-6 w-[250px]" />
        <Skeleton className="mb-5 mx-auto h-4 w-[750px]" />
        <Skeleton className="mb-5 mx-auto h-4 w-[650px]" />
        <Skeleton className="mb-5 mx-auto h-4 w-[550px]" />
      </div>

      <div className="mb-12">
        <Skeleton className="mb-5 mx-auto h-6 w-[150px]" />
        <Skeleton className="mb-5 mx-auto h-4 w-[300px]" />
      </div>
    </div>
  </div>
);

export default Loading;
