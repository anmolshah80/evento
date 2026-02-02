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

/**
 * combines a date string and a time string into a single Date object
 *
 * @param dateString
 * @param timeString
 * @returns Date object combining date and time
 *
 * @example
 * ```typescript
 * const dateStr: string = '2026-01-25T00:00:00.000Z';
 * const timeStr: string = '14:30:00';
 * const combinedDateTime: Date = combineDateTime(dateStr, timeStr);
 * console.log(combinedDateTime.toISOString()); // "2026-01-25T14:30:00.000Z"
 * ```
 */
function combineDateTime(dateString: string, timeString: string): Date {
  try {
    // parse the date string
    const date = new Date(dateString); // "2026-01-25T00:00:00.000Z"

    // extract time components
    const [hours, minutes, seconds] = timeString.split(':').map(Number);

    // create a new date with the combined datetime
    // using UTC to avoid timezone issues
    const combinedDate = new Date(
      Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        hours,
        minutes,
        seconds,
      ),
    );

    return combinedDate;
  } catch (error) {
    console.error('Error combining date and time:', error);

    throw new Error('Invalid date or time format');
  }
}

/**
 * formats an ISO date string to a more human-friendly format
 * @param isoDateString
 * @returns formatted date string like "Wednesday, January 28th at 10:30am"
 *
 * @example
 * ```typescript
 * const isoString: string = '2026-01-28T10:30:00.000Z';
 * console.log(formatToFriendlyDate(isoString)); // "Wednesday, January 28th at 10:30am"
 * ```
 */
function formatToFriendlyDate(isoDateString: string): string {
  const date: Date = new Date(isoDateString);

  // check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string provided');
  }

  // format the core parts (Weekday, Month, Day, Time)
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'UTC', // keeps the time as per the original UTC string
    weekday: 'long', // e.g., "Wednesday"
    month: 'long', // e.g., "January"
    day: 'numeric', // e.g., "28"
    hour: 'numeric', // e.g., "10"
    minute: '2-digit', // e.g., "30"
    hour12: true, // e.g., "am/pm"
  };

  const formattedParts: Intl.DateTimeFormatPart[] = new Intl.DateTimeFormat(
    'en-US',
    options,
  ).formatToParts(date); // get parts for custom assembly

  // extract values from parts
  let weekday: string = '';
  let month: string = '';
  let day: string = '';
  let hour: string = '';
  let minute: string = '';
  let dayPeriod: string = '';

  for (const part of formattedParts) {
    switch (part.type) {
      case 'weekday':
        weekday = part.value;
        break;
      case 'month':
        month = part.value;
        break;
      case 'day':
        day = part.value;
        break;
      case 'hour':
        hour = part.value;
        break;
      case 'minute':
        minute = part.value;
        break;
      case 'dayPeriod':
        dayPeriod = part.value;
        break; // "am" or "pm"
    }
  }

  // add the ordinal suffix to the day
  function getOrdinalSuffix(n: number): string {
    const suffixes: string[] = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
  }

  const dayWithSuffix: string = `${day}${getOrdinalSuffix(Number(day))}`;

  // assemble the final string
  return `${weekday}, ${month} ${dayWithSuffix} at ${hour}:${minute}${dayPeriod}`;
}

export {
  capitalize,
  cn,
  humanizeKebabCase,
  combineDateTime,
  formatToFriendlyDate,
};
