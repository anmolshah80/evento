const HEADER_ROUTES = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'All Events',
    path: '/events/all',
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

const API_BASE_URL =
  'https://bytegrad.com/course-assets/projects/evento/api/events';

// Use something like `https://regex101.com/` to test the regular expressions
const PHONE_NUMBER_REGEX = /^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$/gm;

export { HEADER_ROUTES, FOOTER_ROUTES, API_BASE_URL, PHONE_NUMBER_REGEX };
