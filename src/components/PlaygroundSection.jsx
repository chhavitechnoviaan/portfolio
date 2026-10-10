import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RefreshCw, Layers, Scissors, Stamp, PenTool } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PlaygroundSection() {
  const [cordRotation, setCordRotation] = useState(0);
  const [stampScale, setStampScale] = useState(1);
  const [tearOffset, setTearOffset] = useState(0);

  const getIcon = (type) => {
    switch (type) {
      case 'cord': return <Layers size={18} color="#A83232" />;
      case 'tear': return <Scissors size={18} color="#344E41" />;
      case 'stamp': return <Stamp size={18} color="#A83232" />;
      case 'lead': return <PenTool size={18} color="#171717" />;
      default: return <Sparkles size={18} color="#A83232" />;
    }
  };

  return (
    <section
      id="playground"
      style={{
        padding: '110px 24px',
        backgroundColor: '#FFFFFF',
        color: '#171717',
        position: 'relative'
      }}
      className="bg-grid-white"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 54 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: '#A83232',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              marginBottom: 10,
              fontWeight: 700
            }}
          >
            <Sparkles size={14} /> Interactive Creative Lab
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              color: '#171717',
              fontWeight: 900,
              textTransform: 'uppercase'
            }}
          >
            TACTILE <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#344E41' }}>PLAYGROUND</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontStyle: 'italic', color: '#555', marginTop: 4 }}>
            Interactive physics, color permutations, and kinetic typographic sketches.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 26
          }}
        >
          {portfolioData.playgroundExperiments.map((exp, i) => (
            <div
              key={exp.id}
              data-cursor-color={i % 2 === 0 ? "#344E41" : "#A83232"}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1.5px solid rgba(23, 23, 23, 0.12)',
                borderRadius: 18,
                padding: 26,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 240,
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '4px 9px',
                      backgroundColor: 'rgba(168, 50, 50, 0.1)',
                      color: '#A83232',
                      borderRadius: 4
                    }}
                  >
                    {exp.tag}
                  </span>
                  {getIcon(exp.type)}
                </div>

                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', fontWeight: 800, marginBottom: 8, color: '#171717' }}>
                  {exp.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: '#666', lineHeight: 1.4 }}>
                  {exp.note}
                </p>
              </div>

              {/* Interactive Demo Area */}
              <div
                style={{
                  marginTop: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 16,
                  borderTop: '1px dashed rgba(23, 23, 23, 0.12)'
                }}
              >
                {exp.type === 'cord' && (
                  <>
                    <motion.div
                      animate={{ rotate: cordRotation }}
                      transition={{ type: 'spring', stiffness: 220 }}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: 'conic-gradient(#A83232, #F3D878, #344E41, #B8D6E8, #EBD6D3, #A83232)',
                        boxShadow: '0 3px 10px rgba(0,0,0,0.18)',
                        border: '1.5px solid #171717'
                      }}
                    />
                    <button
                      onClick={() => setCordRotation(prev => prev + 90)}
                      style={{
                        background: 'none',
                        border: '1.5px solid rgba(23, 23, 23, 0.25)',
                        borderRadius: 999,
                        padding: '7px 14px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        cursor: 'pointer',
                        color: '#171717'
                      }}
                    >
                      Twist <RefreshCw size={12} />
                    </button>
                  </>
                )}

                {exp.type === 'stamp' && (
                  <>
                    <motion.div
                      animate={{ scale: stampScale }}
                      transition={{ duration: 0.2 }}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: '#A83232',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        border: '2px solid #171717'
                      }}
                    >
                      AL
                    </motion.div>
                    <button
                      onClick={() => setStampScale(prev => prev === 1 ? 1.25 : 1)}
                      style={{
                        background: 'none',
                        border: '1.5px solid rgba(23, 23, 23, 0.25)',
                        borderRadius: 999,
                        padding: '7px 14px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        color: '#171717'
                      }}
                    >
                      Press Seal
                    </button>
                  </>
                )}

                {exp.type === 'tear' && (
                  <>
                    <div style={{ width: 60, height: 20, borderBottom: '2px dashed #344E41', transform: `translateX(${tearOffset}px)` }} />
                    <button
                      onClick={() => setTearOffset(prev => (prev + 10) % 30)}
                      style={{
                        background: 'none',
                        border: '1.5px solid rgba(23, 23, 23, 0.25)',
                        borderRadius: 999,
                        padding: '7px 14px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        color: '#171717'
                      }}
                    >
                      Tear Edge
                    </button>
                  </>
                )}

                {exp.type === 'lead' && (
                  <>
                    <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', color: '#A83232' }}>
                      move cursor to draw~
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#888' }}>
                      [Active]
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
