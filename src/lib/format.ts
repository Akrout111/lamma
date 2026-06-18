import type { Locale } from '@/i18n/routing';

/**
 * Format an ISO date string in the user's locale.
 * Uses ar-KW for Arabic (Kuwaiti month names) and en-GB for English.
 */
export function formatDateTime(iso: string, locale: Locale): string {
  const intlLocale = locale === 'ar' ? 'ar-KW' : 'en-GB';
  return new Intl.DateTimeFormat(intlLocale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso));
}

/** Date only — used for application deadlines. */
export function formatDate(iso: string, locale: Locale): string {
  const intlLocale = locale === 'ar' ? 'ar-KW' : 'en-GB';
  return new Intl.DateTimeFormat(intlLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

/** Format a KWD price with 3-decimal precision. */
export function formatKwd(amount: number, locale: Locale): string {
  const intlLocale = locale === 'ar' ? 'ar-KW' : 'en-GB';
  return new Intl.NumberFormat(intlLocale, {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(amount);
}
