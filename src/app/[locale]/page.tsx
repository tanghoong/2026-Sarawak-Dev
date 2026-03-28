import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations('home');
  const tc = useTranslations('common');

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient section" style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '56rem' }}>
          <span className="badge">{t('hero.badge')}</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
            {t('hero.title')}
          </h1>
          <p style={{ fontSize: '1.125rem', maxWidth: '40rem', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            {t('hero.subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/join" className="btn-primary">{t('hero.cta')}</Link>
            <Link href="/vibe-coding" className="btn-secondary">{t('hero.ctaSecondary')}</Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '56rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>{t('mission.title')}</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>{t('mission.description')}</p>
          <div className="grid-4" style={{ textAlign: 'left' }}>
            {(t.raw('mission.points') as string[]).map((point: string, i: number) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.875rem' }}>{i + 1}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vibe Coding Feature */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="badge">{t('vibeCoding.badge')}</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1rem' }}>{t('vibeCoding.title')}</h2>
              <p style={{ marginBottom: '1.5rem' }}>{t('vibeCoding.description')}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {(t.raw('vibeCoding.features') as string[]).map((f: string, i: number) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <Link href="/vibe-coding" className="btn-primary">{t('vibeCoding.cta')}</Link>
            </div>
            <div className="card" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Vibe Coding</h3>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>Build. Create. Share. Repeat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem' }}>{t('howToJoin.title')}</h2>
          <div className="grid-3">
            {(t.raw('howToJoin.steps') as { number: string; title: string; description: string }[]).map((step) => (
              <div key={step.number} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)', opacity: 0.4, marginBottom: '0.5rem' }}>{step.number}</div>
                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohort CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: '48rem' }}>
          <div style={{ backgroundColor: 'var(--accent)', borderRadius: '1rem', padding: '3rem', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', backgroundColor: 'rgba(0,0,0,0.15)', color: '#1a1208', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('cohort.badge')}</span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1a1208', marginBottom: '0.75rem' }}>{t('cohort.title')}</h2>
            <p style={{ color: '#3a2010', marginBottom: '1.5rem' }}>{t('cohort.description')}</p>
            <Link href="/join" style={{ backgroundColor: '#1a1208', color: 'var(--accent)', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>{t('cohort.cta')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
