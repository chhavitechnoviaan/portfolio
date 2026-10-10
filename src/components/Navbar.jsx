import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Globe, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Background scroll locking when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 20,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <nav
        style={{
          width: '100%',
          maxWidth: 1180,
          background: 'rgba(18, 18, 20, 0.78)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 999,
          padding: '12px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.35)'
        }}
      >
        {/* Brand Monogram */}
        <a
          href="#"
          data-cursor-color="#D92626"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}
        >
          {/* <span
            style={{
              width: 34,
              height: 34,
              backgroundColor: '#D92626',
              color: '#FFFFFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              boxShadow: '0 0 14px rgba(217, 38, 38, 0.6)'
            }}
          >
            A
          </span> */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF'
              }}
            >
              RELOAD BRANDING
            </span> */}
            <span
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.9rem',
                fontWeight: 'bold',
                color: 'rgba(236, 234, 234, 1)',
                lineHeight: 0.9
              }}
            >
              {portfolioData.profile.name}
            </span>
          </div>
        </a>

        {/* Desktop Editorial Nav Links (Matching Reference Bar) */}
        <div style={{ gap: 32, alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-cursor-color="#D92626"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'rgba(255, 255, 255, 0.85)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D92626')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
            >
              {link.label}
            </a>
          ))}

          

          <a
            href={portfolioData.profile.hubUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-color="#D92626"
            style={{
              padding: '8px 18px',
              backgroundColor: '#D92626',
              color: '#FFFFFF',
              borderRadius: 999,
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              boxShadow: '0 0 16px rgba(217, 38, 38, 0.4)',
              transition: 'transform 0.2s ease, background-color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            LIVE VAULT <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          data-cursor-color="#D92626"
          style={{
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            padding: 6,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Accessible Fullscreen / Sheet Drawer Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 80,
              left: 20,
              right: 20,
              backgroundColor: '#121214',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 24,
              padding: '32px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
              zIndex: 999
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    textDecoration: 'none'
                  }}
                >
                  {link.label}
                </a>
              ))}
              <hr style={{ border: 0, borderTop: '1px dashed rgba(255,255,255,0.15)', margin: '10px 0' }} />
              <a
                href={portfolioData.profile.hubUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: '#D92626',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontWeight: 700
                }}
              >
                OPEN LIVE VAULT HUB <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 860px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 859px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
