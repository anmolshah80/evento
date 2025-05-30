import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

type PaginationControlsProps = {
  previousPagePath: string;
  nextPagePath: string;
};

const anchorLinkStyles =
  'text-white px-5 py-3 w-[130px] text-center h-auto flex items-center justify-center gap-x-2 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm';

const PaginationControls = ({
  previousPagePath,
  nextPagePath,
}: PaginationControlsProps) => {
  return (
    <section className="flex justify-between w-full">
      {previousPagePath ? (
        <Link href={previousPagePath} className={anchorLinkStyles}>
          <ArrowLeftIcon /> Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPagePath && (
        <Link href={nextPagePath} className={anchorLinkStyles}>
          Next <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
};

export default PaginationControls;
