import {
  FileTextIcon,
  MagnifyingGlassIcon,
  Cross2Icon,
} from '@radix-ui/react-icons';

const NotFoundGraphicUI = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="relative flex items-center">
        <FileTextIcon width={150} height={150} />

        <div className="absolute -top-[18px] -right-[22px]">
          <MagnifyingGlassIcon width={60} height={60} className="relative" />
          <Cross2Icon
            width={30}
            height={30}
            className="absolute top-[12px] left-[12px]"
          />
        </div>
      </div>

      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white/85 sm:text-7xl">
        404 Not Found
      </h1>
    </div>
  );
};

export default NotFoundGraphicUI;
