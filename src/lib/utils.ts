import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.substring(1);
};

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// convert kebab case to space separated words
const humanizeKebabCase = (text: string) => {
  const splitTextArr = text.split('-');

  const capitalizedTextArr = splitTextArr.map((word) => capitalize(word));

  return capitalizedTextArr.join(' ');
};

export { capitalize, cn, humanizeKebabCase };
