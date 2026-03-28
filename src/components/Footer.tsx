import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');

  return (
    <footer style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)', padding: '3rem 1.5rem 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
              Sarawak<span style={{ color: 'var(--text-primary)' }}>.Dev</span>
            </div>
            <p style={{ fontSize: '0.875rem', margin: 0 }}>{t('tagline')}</p>
          </div>

          <div>
            <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('platform')}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[{ href: '/', label: tn('home') }, { href: '/about', label: tn('about') }, { href: '/vibe-coding', label: tn('vibeCoding') }, { href: '/showcase', label: tn('showcase') }].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('community')}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[{ href: '/ambassadors', label: tn('ambassadors') }, { href: '/partners', label: tn('partners') }, { href: '/join', label: tn('join') }].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('connect')}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Telegram', 'WhatsApp', 'Discord'].map(s => (
                <span key={s} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', margin: 0 }}>{t('copyright')}</p>
        </div>
      </div>
      <style>{`.footer-link:hover { color: var(--accent) !important; }`}</style>
    </footer>
  );
}
