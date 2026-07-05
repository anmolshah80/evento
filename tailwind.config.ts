import type { Config } from 'tailwindcss';

import { blackA, mauve, green, gray } from '@radix-ui/colors';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // accent: '#a4f839',
        'accent-green': '#a4f839',
        accent: '#ffffff',
        ...blackA,
        ...gray,
        ...mauve,
        ...green,
      },
    },
  },
  plugins: [],
} satisfies Config;
