'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

import TooltipUI from '@/components/ui/tooltip-ui';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');
  const [slashKeyClassName, setSlashKeyClassName] = useState('slash-key');
  const router = useRouter();

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const slashKeyCounterRef = useRef(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchText.trim() === '') return;

    router.push(`events/${searchText}`);
  };

  // focus search input field on hot key press
  useEffect(() => {
    const focusSearchFieldOnHotkeyPress = (event: KeyboardEvent) => {
      if (event.key !== '/') return;

      if (searchInputRef.current === null) return;

      // prevent adding the slash key in the search input field upon entering the slash key for the first time
      if (slashKeyCounterRef.current === 0) {
        event.preventDefault();

        searchInputRef.current.focus();
        slashKeyCounterRef.current = 1;

        return;
      }

      searchInputRef.current.focus();
    };

    document.addEventListener('keydown', focusSearchFieldOnHotkeyPress);

    return () => {
      document.removeEventListener('keydown', focusSearchFieldOnHotkeyPress);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="w-full relative sm:w-[580px]">
      <TooltipUI
        sourceElement={
          <span
            className={clsx(
              'absolute bg-gray-800 pt-[0.3rem] pb-[0.4rem] px-[0.6rem] text-white right-8 top-3 border-none rounded-[4px] text-xl',
              {
                hidden: slashKeyClassName === 'slash-key-hide',
              },
            )}
          >
            /
          </span>
        }
        tooltipContent={<p>Type / to start searching</p>}
        tooltipContentClassName="absolute left-[27.5rem] -top-[4rem] w-max"
        hideTooltip={slashKeyClassName === 'slash-key-hide'}
      />

      <input
        id="searchText"
        type="text"
        placeholder="Search events in any city..."
        spellCheck={false}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent-green/50 transition focus:ring-2 focus:bg-white/10"
        value={searchText}
        ref={searchInputRef}
        onChange={(event) => setSearchText(event.target.value)}
        onFocus={() => setSlashKeyClassName('slash-key-hide')}
        onBlur={() => {
          setSlashKeyClassName('slash-key');
          slashKeyCounterRef.current = 0;
        }}
      />
    </form>
  );
};

export default SearchForm;
