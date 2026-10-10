import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: '130px 24px',
        backgroundColor: '#0B0B0C',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
      data-cursor-color="#D92626"
    >
      {/* Background Crimson Radial Ambient Glow */}
      <div
        className="glow-radial-red"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'inline-block',
            padding: '6px 22px',
            border: '1.5px solid #D92626',
            borderRadius: 999,
            color: '#D92626',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: 28,
            fontWeight: 700,
            boxShadow: '0 0 16px rgba(217, 38, 38, 0.4)'
          }}
        >
          NEXT CHAPTER • DISPATCH
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 28,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em'
          }}
        >
          HAVE A VISION THAT NEEDS <br />
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#D92626' }}>TANGIBLE DIRECTION?</span>
        </h2>

        <p
          style={{
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: 640,
            margin: '0 auto 48px',
            lineHeight: 1.6
          }}
        >
          Always open to visionary design commissions, experimental identity direction, and 3D motion typography inquiries.
        </p>

        {/* Action Email CTA Button */}
        <a
          href={`mailto:${portfolioData.profile.email}`}
          data-cursor-color="#D92626"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            backgroundColor: '#D92626',
            color: '#FFFFFF',
            padding: '20px 44px',
            borderRadius: 999,
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.95rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            boxShadow: '0 12px 40px rgba(217, 38, 38, 0.5)',
            transition: 'transform 0.2s ease, background-color 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Mail size={20} /> INITIATE CONTACT ({portfolioData.profile.email})
        </a>

        {/* Social Links Bar */}
        <div
          style={{
            marginTop: 72,
            display: 'flex',
            justifyContent: 'center',
            gap: 32,
            flexWrap: 'wrap'
          }}
        >
          {portfolioData.profile.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontWeight: 700,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D92626')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
            >
              {s.name} <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
