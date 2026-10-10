import React from 'react';
import { motion } from 'framer-motion';

/**
 * 3D Multicolored Twisted-Rope Typography Component
 * Renders braided multi-ply fiber strands (Red, Cream, Green, Pink, Yellow, Blue)
 * with tubular volumetric lighting, interwoven patterns, and cast depth.
 */
export default function RopeTypography({ 
  text = "IDEAS TAKE SHAPE", 
  subtitle = "Design, twisted differently." 
}) {
  const ropeColors = {
    strandRed: "#D93636",
    strandPaper: "#F5F0E6",
    strandGreen: "#234C3B",
    strandPink: "#F2C6CE",
    strandYellow: "#F3D878",
    strandBlue: "#B8D6E8"
  };

  return (
    <div style={{ position: 'relative', width: '100%', margin: '0 auto', textAlign: 'center' }}>
      <svg
        viewBox="0 0 1000 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '380px',
          overflow: 'visible',
          filter: 'drop-shadow(0 14px 22px rgba(23, 23, 21, 0.16))'
        }}
      >
        <defs>
          {/* Braided Multi-Ply Rope Pattern Definition */}
          <pattern
            id="braidedRopePattern"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(38)"
          >
            {/* Strand 1: Ode Red */}
            <rect x="0" y="0" width="8" height="48" fill={ropeColors.strandRed} />
            <line x1="0" y1="0" x2="0" y2="48" stroke="rgba(0,0,0,0.32)" strokeWidth="1.2" />

            {/* Strand 2: Off-white Paper cord */}
            <rect x="8" y="0" width="8" height="48" fill={ropeColors.strandPaper} />
            <line x1="8" y1="0" x2="8" y2="48" stroke="rgba(0,0,0,0.22)" strokeWidth="1" />

            {/* Strand 3: Deep Forest Green */}
            <rect x="16" y="0" width="8" height="48" fill={ropeColors.strandGreen} />
            <line x1="16" y1="0" x2="16" y2="48" stroke="rgba(0,0,0,0.35)" strokeWidth="1.2" />

            {/* Strand 4: Soft Pastel Pink */}
            <rect x="24" y="0" width="8" height="48" fill={ropeColors.strandPink} />
            <line x1="24" y1="0" x2="24" y2="48" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />

            {/* Strand 5: Pastel Yellow */}
            <rect x="32" y="0" width="8" height="48" fill={ropeColors.strandYellow} />
            <line x1="32" y1="0" x2="32" y2="48" stroke="rgba(0,0,0,0.22)" strokeWidth="1" />

            {/* Strand 6: Muted Pastel Blue */}
            <rect x="40" y="0" width="8" height="48" fill={ropeColors.strandBlue} />
            <line x1="40" y1="0" x2="40" y2="48" stroke="rgba(0,0,0,0.28)" strokeWidth="1.2" />
          </pattern>

          {/* Tubular 3D Lighting Filter for Cylindrical Roundness & Specular Highlights */}
          <linearGradient id="ropeSpecularShine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.48" />
          </linearGradient>

          {/* Contact Drop Shadow Filter */}
          <filter id="ropeShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="4" dy="10" stdDeviation="6" floodColor="#171715" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Dynamic Rope Artwork Group */}
        <g filter="url(#ropeShadow)">
          {/* Main Braided Rope Text Body */}
          <motion.text
            x="500"
            y="150"
            textAnchor="middle"
            fill="url(#braidedRopePattern)"
            stroke="#171715"
            strokeWidth="3.5"
            strokeLinejoin="round"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 900,
              fontSize: '108px',
              letterSpacing: '0.04em'
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {text}
          </motion.text>

          {/* Specular Cylindrical Lighting Overlay Pass */}
          <text
            x="500"
            y="150"
            textAnchor="middle"
            fill="url(#ropeSpecularShine)"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 900,
              fontSize: '108px',
              letterSpacing: '0.04em',
              mixBlendMode: 'overlay',
              pointerEvents: 'none'
            }}
          >
            {text}
          </text>
        </g>

        {/* Hand-tied Decorative Rope End Tassels / Knots on Both Ends */}
        <g transform="translate(45, 110)">
          <path d="M 0 0 C 15 -20, 25 20, 40 0" stroke="url(#braidedRopePattern)" strokeWidth="16" strokeLinecap="round" />
          <circle cx="20" cy="-2" r="9" fill={ropeColors.strandRed} stroke="#171715" strokeWidth="1.5" />
        </g>
        <g transform="translate(915, 110)">
          <path d="M 0 0 C -15 -20, -25 20, -40 0" stroke="url(#braidedRopePattern)" strokeWidth="16" strokeLinecap="round" />
          <circle cx="-20" cy="-2" r="9" fill={ropeColors.strandGreen} stroke="#171715" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Handwritten Notebook Annotation Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          fontFamily: 'var(--font-hand)',
          fontSize: '1.45rem',
          color: 'var(--color-ode-red)',
          marginTop: '-8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        <span>↑ 3D braided multi-ply rope lettering</span>
        <span style={{ fontSize: '1rem', fontFamily: 'var(--font-mono)', opacity: 0.85, color: '#234C3B' }}>
          ({subtitle})
        </span>
      </motion.div>
    </div>
  );
}
