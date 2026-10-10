import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#08080A',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '60px 24px 40px',
        color: 'rgba(255, 255, 255, 0.65)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.82rem'
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 40
        }}
      >
        {/* Top Footer Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 24,
            paddingBottom: 32,
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.4rem',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                display: 'block',
                marginBottom: 6
              }}
            >
              {portfolioData.profile.name.toUpperCase()}
            </span>
            <span style={{ fontSize: '0.78rem', color: '#E02626', fontWeight: 700 }}>
              {portfolioData.profile.title.toUpperCase()}
            </span>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {portfolioData.profile.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  textDecoration: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E02626')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
              >
                {s.name} <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20
          }}
        >
          <div>
            © {new Date().getFullYear()} {portfolioData.profile.name}. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            style={{
              background: '#121216',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#FFFFFF',
              borderRadius: 999,
              padding: '10px 22px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 700,
              boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E02626';
              e.currentTarget.style.borderColor = '#E02626';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#121216';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            BACK TO TOP <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
