import type { FooterColumn, NavLink } from './types';

/**
 * Primary navigation. `labelKey` references keys in messages/{ar,en}.json.
 * Note: in Phase 0 all routes resolve to the homepage (`/` or `/#section`)
 * since detail pages arrive in later phases.
 */
export const mainNav: NavLink[] = [
  { href: '/#gatherings', labelKey: 'nav.gatherings' },
  { href: '/#hosts', labelKey: 'nav.hosts' },
  { href: '/#topics', labelKey: 'nav.topics' },
  { href: '/#letters', labelKey: 'nav.letters' },
];

export const footerColumns: FooterColumn[] = [
  {
    titleKey: 'footer.titles.about',
    links: [
      { href: '/#about', labelKey: 'footer.about.story' },
      { href: '/#about', labelKey: 'footer.about.manifesto' },
      { href: '/#about', labelKey: 'footer.about.team' },
    ],
  },
  {
    titleKey: 'footer.titles.help',
    links: [
      { href: '/#help', labelKey: 'footer.help.faq' },
      { href: '/#help', labelKey: 'footer.help.apply' },
      { href: '/#help', labelKey: 'footer.help.host' },
      { href: '/#help', labelKey: 'footer.help.conduct' },
    ],
  },
  {
    titleKey: 'footer.titles.contact',
    links: [
      { href: 'mailto:hello@lamma.kw', labelKey: 'footer.contact.email' },
      { href: 'https://instagram.com/lamma.kw', labelKey: 'footer.contact.instagram' },
      { href: 'https://x.com/lamma_kw', labelKey: 'footer.contact.x' },
    ],
  },
];

export const socialLinks = {
  instagram: 'https://instagram.com/lamma.kw',
  x: 'https://x.com/lamma_kw',
};
