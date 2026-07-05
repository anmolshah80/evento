import Link from 'next/link';

import { FOOTER_ROUTES } from '@/lib/constants';
import { currentYear } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="mt-auto flex h-16 items-center justify-between border-t border-white/10 px-3 text-xs text-white/25 sm:px-9">
      <small className="text-xs">&copy; {currentYear} Evento</small>

      <ul className="flex gap-x-3 sm:gap-x-8">
        {FOOTER_ROUTES.map(({ name, path }) => (
          <li key={path} className="transition hover:text-white/75">
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
