'use client';

import { useLocale } from 'next-intl';
import type { LocalizedString } from '@/data/types';

/**
 * Pick the correct string from a LocalizedString based on the active locale.
 * Falls back to Arabic if the English value is somehow missing.
 */
export function useLocalized() {
  const locale = useLocale() as 'ar' | 'en';
  return (obj: LocalizedString): string => obj[locale] ?? obj.ar;
}
