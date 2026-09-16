const HEADER_ROUTES = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'All Events',
    path: '/events/all',
  },
  {
    name: 'Bookings',
    path: '/bookings',
  },
];

const FOOTER_ROUTES = [
  {
    name: 'Terms & Conditions',
    path: '/terms-and-conditions',
  },
  {
    name: 'Privacy Policy',
    path: '/privacy-policy',
  },
];

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_BASE_URL
    : 'http://localhost:3000';

// Use something like `https://regex101.com/` to test the regular expressions
const PHONE_NUMBER_REGEX = /^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$/gm;

const MAPTILER_API_KEY =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_MAPTILER_PROTECTED_API_KEY
    : process.env.NEXT_PUBLIC_MAPTILER_DEFAULT_API_KEY;

export {
  HEADER_ROUTES,
  FOOTER_ROUTES,
  BASE_URL,
  PHONE_NUMBER_REGEX,
  MAPTILER_API_KEY,
};
