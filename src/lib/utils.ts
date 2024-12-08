import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.substring(1);
};

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export { capitalize, cn };
