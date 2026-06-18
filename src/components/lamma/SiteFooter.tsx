'use client';

import { useTranslations } from 'next-intl';
import { Container } from './Container';
import { footerColumns, socialLinks } from '@/data/navigation';
import { Instagram, Twitter } from 'lucide-react';

/**
 * Sticky-to-bottom site footer.
 * Three editorial columns + a bottom rights/social bar.
 */
export function SiteFooter() {
  const t = useTranslations('footer');

  // Strip the leading "footer." scope prefix so the key is relative to the
  // `footer` translation namespace (e.g. "footer.about.story" -> "about.story").
  const rel = (key: string) => key.replace(/^footer\./, '');

  return (
    <footer className="mt-auto border-t border-border bg-paper">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.titleKey}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-stone">
                {t(rel(col.titleKey) as 'titles.about' | 'titles.help' | 'titles.contact')}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      className="link-editorial text-sm text-ink/80 hover:text-clay"
                    >
                      {t(rel(link.labelKey) as 'about.story' | 'about.manifesto' | 'about.team' | 'help.faq' | 'help.apply' | 'help.host' | 'help.conduct' | 'contact.email' | 'contact.instagram' | 'contact.x')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-stone">{t('rights')}</p>
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.instagram}
              aria-label="Instagram"
              className="text-stone transition-colors hover:text-clay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.x}
              aria-label="X"
              className="text-stone transition-colors hover:text-clay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
