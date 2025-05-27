'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import Logo from '@/components/logo';

import { HEADER_ROUTES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Header = () => {
  const activePathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />

      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {HEADER_ROUTES.map(({ name, path }) => (
            <li
              key={path}
              className={cn(
                'hover:text-white flex items-center relative transition',
                {
                  'text-white': activePathname === path,
                  'text-white/50': activePathname !== path,
                },
              )}
            >
              <Link href={path}>{name}</Link>

              {activePathname === path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
