import { setRequestLocale } from 'next-intl/server';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <div style={{ padding: '4rem 1.5rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Coming soon</div>;
}
