'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from './Container';
import { Logo } from './Logo';
import { LocaleSwitcher } from './LocaleSwitcher';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { mainNav } from '@/data/navigation';
import { Menu, User } from 'lucide-react';

/**
 * Sticky site header with paper background + backdrop blur.
 * Desktop nav collapses into a Sheet on mobile.
 */
export function SiteHeader() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-paper/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Left: logo */}
        <Logo />

        {/* Center: desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.labelKey}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-secondary hover:text-ink"
            >
              {t(item.labelKey.replace('nav.', '') as 'gatherings' | 'hosts' | 'topics' | 'letters')}
            </Link>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-1">
          <LocaleSwitcher />
          <Button
            variant="ghost"
            size="sm"
            className="hidden gap-1.5 text-sm font-medium text-ink sm:inline-flex"
          >
            <User className="h-4 w-4" />
            {t('account')}
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={t('openMenu')}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="end" className="w-[18rem] bg-paper">
              <SheetHeader>
                <SheetTitle className="text-start font-display text-xl text-ink">
                  لَمَّة
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-6 flex flex-col gap-1 px-4"
                aria-label="Mobile primary"
              >
                {mainNav.map((item) => (
                  <Link
                    key={item.labelKey}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-secondary hover:text-ink"
                  >
                    {t(item.labelKey.replace('nav.', '') as 'gatherings' | 'hosts' | 'topics' | 'letters')}
                  </Link>
                ))}
                <div className="my-3 h-px bg-border" />
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-clay transition-colors hover:bg-secondary"
                >
                  {t('account')}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
