import Skeleton from '@/components/skeleton';

const HeaderSkeleton = () => (
  <header className="flex h-14 items-center justify-between border-b border-white/10 px-3 sm:px-9">
    <div className="flex items-center">
      <Skeleton className="h-8 w-24" />
    </div>
    <nav className="h-full">
      <ul className="flex h-full gap-x-6 text-sm">
        {[1, 2].map((i) => (
          <li key={i} className="flex items-center">
            <Skeleton className="h-4 w-16" />
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default HeaderSkeleton;
