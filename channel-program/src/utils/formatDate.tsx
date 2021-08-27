import { DateTime } from 'luxon';

// Date and time formats can be localized
export const DATE_FORMAT = "D"; // Ex: 12/13/2019
export const TIME_FORMAT = "t"; // Ex: 8:17 AM
export const DATE_TIME_FORMAT = "t D"; // Ex: 8:17 AM 12/13/2019
export const TIME_DATE_FORMAT = "D t"; // Ex: 12/13/2019 8:17 AM
export const DATE_TIME_FULL_FORMAT = "DDDD t"; // Ex: Friday, December 13, 2019 8:17 AM
export function formatDate(dateToFormat: string, format: string): string {
    return DateTime.fromISO(dateToFormat).toFormat(format)
}