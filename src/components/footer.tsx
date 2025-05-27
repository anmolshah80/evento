import Link from 'next/link';

import { FOOTER_ROUTES } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">&copy; {currentYear} Evento</small>

      <ul className="flex gap-x-3 sm:gap-x-8">
        {FOOTER_ROUTES.map(({ name, path }) => (
          <li key={path} className="hover:text-white/75 transition">
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
