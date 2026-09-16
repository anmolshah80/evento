'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import Logo from '@/components/logo';

import { HEADER_ROUTES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Header = () => {
  const activePathname = usePathname();

  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 px-3 sm:px-9">
      <Logo />

      <nav className="h-full">
        <ul className="flex h-full gap-x-6 text-sm">
          {HEADER_ROUTES.map(({ name, path }) => (
            <li
              key={path}
              className={cn(
                'relative flex items-center transition hover:text-white',
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
                  className="bg-accent-green absolute bottom-0 h-1 w-full"
                ></motion.div>
              )}
            </li>
          ))}

          <li className="relative flex items-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white/70 transition-colors hover:text-white"
              href="https://github.com/anmolshah80/evento"
            >
              <Image
                src="https://cdn.simpleicons.org/github/white"
                alt="GitHub Icon"
                className="opacity-75 group-hover:opacity-100"
                width={24}
                height={24}
                unoptimized
              />
              <span className="sr-only">GitHub</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
