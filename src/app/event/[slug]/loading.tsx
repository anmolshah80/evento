import Skeleton from '@/components/skeleton';

const Loading = () => (
  <div>
    <div className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
      <div className="h-[500px] w-[1275px] lg:h-[361px] bg-gray-700/40 z-0 absolute"></div>

      <div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
        <Skeleton className="h-[198px] w-[297px]" />

        <div className="flex flex-col">
          <Skeleton className="h-6 w-[200px]" />
          <Skeleton className="h-8 w-[280px] md:w-[406px] my-3" />
          <Skeleton className="h-7 w-[250px]" />
          <Skeleton className="h-12 w-[305px] md:w-[403px] mt-6 lg:mt-auto" />
        </div>
      </div>
    </div>

    <div className="min-h-[75vh] flex flex-col items-center px-5 py-16">
      <div className="mb-12">
        <Skeleton className="mb-5 mx-auto h-6 w-[175px] md:w-[250px]" />
        <Skeleton className="mb-5 mx-auto h-4 w-[300px] md:w-[750px]" />
        <Skeleton className="mb-5 mx-auto h-4 w-[225px] md:w-[650px]" />
        <Skeleton className="mb-5 mx-auto h-4 w-[175px] md:w-[550px]" />
      </div>

      <div className="mb-12">
        <Skeleton className="mb-5 mx-auto h-6 w-[125px] md:w-[150px]" />
        <Skeleton className="mb-5 mx-auto h-4 w-[250px] md:w-[300px]" />
      </div>
    </div>
  </div>
);

export default Loading;
