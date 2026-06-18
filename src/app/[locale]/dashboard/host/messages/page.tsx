import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
type Props = { params: Promise<{ locale: string }> };
export default async function HostMessagesPage({ params }: Props) {
  const { locale } = await params; setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'host.messages' });
  return <div><div className="flex min-h-[50vh] flex-col items-center justify-center text-center"><div className="mb-6 inline-flex size-20 items-center justify-center rounded-full bg-sand"><MessageSquare className="size-10 text-clay" /></div><h1 className="mb-3 font-display text-3xl font-semibold text-ink">{t('title')}</h1><p className="mb-8 max-w-md text-stone">{t('comingSoon')}</p><Button asChild variant="outline" className="border-clay/40 text-clay hover:bg-clay/10"><Link href="/dashboard/host/applications">{t('backToApplications')}</Link></Button></div></div>;
}
