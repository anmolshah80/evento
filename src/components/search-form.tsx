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

    // Navigate to search results page with the search query
    const encodedQuery = encodeURIComponent(searchText.trim());
    router.push(`/search?q=${encodedQuery}`);
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
    <form onSubmit={handleSubmit} className="relative w-full sm:w-145">
      <TooltipUI
        sourceElement={
          <span
            className={clsx(
              'absolute top-3 right-8 rounded-sm border-none bg-gray-800 px-[0.6rem] pt-[0.3rem] pb-[0.4rem] text-xl text-white',
              {
                hidden: slashKeyClassName === 'slash-key-hide',
              },
            )}
          >
            /
          </span>
        }
        tooltipContent={<p>Type / to start searching</p>}
        tooltipContentClassName="absolute left-110 -top-16 w-max"
        hideTooltip={slashKeyClassName === 'slash-key-hide'}
      />

      <input
        id="searchText"
        type="text"
        placeholder="Search events by name, city, venue..."
        spellCheck={false}
        className="ring-accent-green/50 h-16 w-full rounded-lg bg-white/7 px-6 transition outline-none focus:bg-white/10 focus:ring-2"
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
