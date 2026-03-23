'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';

const localeNames: Record<string, string> = { en: 'EN', ms: 'BM', iba: 'IBA', zh: '中文' };

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/vibe-coding', label: t('vibeCoding') },
    { href: '/ambassadors', label: t('ambassadors') },
    { href: '/partners', label: t('partners') },
    { href: '/showcase', label: t('showcase') },
    { href: '/join', label: t('join') },
  ];

  const changeLocale = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  return (
    <nav style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(8px)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 1.5rem' }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '-0.02em' }}>
          Sarawak<span style={{ color: 'var(--text-primary)' }}>.Dev</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              style={{
                padding: '0.375rem 0.625rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Language switcher */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => setLangOpen(!langOpen)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.375rem 0.625rem', borderRadius: '0.375rem', background: 'none', border: '1px solid var(--border)', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600 }}
            >
              <Globe size={14} />
              {localeNames[locale]}
            </button>
            {langOpen && (
              <div style={{ position: 'absolute', right: 0, top: '100%', marginTop: '0.25rem', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.25rem', minWidth: '100px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 100 }}>
                {Object.entries(localeNames).map(([loc, name]) => (
                  <button key={loc} onClick={() => changeLocale(loc)}
                    style={{ display: 'block', width: '100%', padding: '0.5rem 0.75rem', textAlign: 'left', background: loc === locale ? 'rgba(201,168,76,0.1)' : 'none', border: 'none', cursor: 'pointer', color: loc === locale ? 'var(--accent)' : 'var(--text-primary)', fontSize: '0.875rem', borderRadius: '0.25rem', fontWeight: loc === locale ? 600 : 400 }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <button onClick={toggleTheme}
            style={{ padding: '0.375rem', borderRadius: '0.375rem', background: 'none', border: '1px solid var(--border)', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Mobile menu */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ padding: '0.375rem', borderRadius: '0.375rem', background: 'none', border: '1px solid var(--border)', cursor: 'pointer', color: 'var(--text-secondary)', display: 'none', alignItems: 'center' }}
            className="mobile-menu-btn" aria-label="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid var(--border)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }} className="mobile-nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ padding: '0.625rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'none', display: 'block' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-link:hover { color: var(--accent) !important; }
      `}</style>
    </nav>
  );
}
