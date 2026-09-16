import { LoaderCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

interface ListingLoadingProps {
  className?: string;
}

const LoadingSpinner = ({ className }: ListingLoadingProps) => (
  <LoaderCircle className={cn('spinner top-[50%] text-white/90', className)} />
);

export default LoadingSpinner;
