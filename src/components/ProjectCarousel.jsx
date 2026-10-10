// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ChevronLeft, ChevronRight, Eye, ArrowUpRight, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';
// // import { portfolioData } from '../data/portfolioData';

// // export default function ProjectCarousel({ onSelectProject }) {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [isHovered, setIsHovered] = useState(false);
// //   const [carouselMode, setCarouselMode] = useState('coverflow'); // 'coverflow' | 'center-focused'
// //   const carouselRef = useRef(null);

// //   const projects = portfolioData.projects;
// //   const total = projects.length;

// //   // Auto-slide every 3500ms, paused when user hovers over carousel
// //   useEffect(() => {
// //     if (isHovered) return;
// //     const interval = setInterval(() => {
// //       setActiveIndex((prev) => (prev + 1) % total);
// //     }, 3500);
// //     return () => clearInterval(interval);
// //   }, [isHovered, total]);

// //   const handleNext = () => {
// //     setActiveIndex((prev) => (prev + 1) % total);
// //   };

// //   const handlePrev = () => {
// //     setActiveIndex((prev) => (prev - 1 + total) % total);
// //   };

// //   const handleKeyDown = (e) => {
// //     if (e.key === 'ArrowLeft') handlePrev();
// //     if (e.key === 'ArrowRight') handleNext();
// //   };

// //   // Wheel scroll gesture for 3D Coverflow deck
// //   const handleWheel = (e) => {
// //     if (Math.abs(e.deltaX) > 30 || Math.abs(e.deltaY) > 30) {
// //       if (e.deltaY > 0 || e.deltaX > 0) {
// //         handleNext();
// //       } else {
// //         handlePrev();
// //       }
// //     }
// //   };

// //   return (
// //     <div
// //       ref={carouselRef}
// //       tabIndex={0}
// //       onKeyDown={handleKeyDown}
// //       onWheel={handleWheel}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //       style={{
// //         position: 'relative',
// //         width: '100%',
// //         padding: '30px 0 70px',
// //         outline: 'none',
// //         overflow: 'hidden',
// //         userSelect: 'none'
// //       }}
// //     >
// //       {/* Control Header with Animation Mode Selector & Counter */}
// //       <div
// //         style={{
// //           display: 'flex',
// //           flexWrap: 'wrap',
// //           justifyContent: 'space-between',
// //           alignItems: 'center',
// //           marginBottom: 36,
// //           padding: '0 16px',
// //           gap: 16
// //         }}
// //       >
// //         {/* Left: Mode Switcher */}
// //         <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
// //           <div
// //             style={{
// //               display: 'inline-flex',
// //               backgroundColor: 'rgba(18, 18, 22, 0.06)',
// //               padding: 4,
// //               borderRadius: 999,
// //               border: '1px solid rgba(23, 23, 23, 0.12)'
// //             }}
// //           >
// //             <button
// //               onClick={() => setCarouselMode('coverflow')}
// //               style={{
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 gap: 6,
// //                 padding: '8px 18px',
// //                 borderRadius: 999,
// //                 border: 'none',
// //                 backgroundColor: carouselMode === 'coverflow' ? '#A83232' : 'transparent',
// //                 color: carouselMode === 'coverflow' ? '#FFFFFF' : '#171717',
// //                 fontFamily: 'var(--font-mono)',
// //                 fontSize: '0.78rem',
// //                 fontWeight: 700,
// //                 cursor: 'pointer',
// //                 transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
// //               }}
// //             >
// //               <Layers size={14} /> 3D COVERFLOW
// //             </button>

// //             <button
// //               onClick={() => setCarouselMode('center-focused')}
// //               style={{
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 gap: 6,
// //                 padding: '8px 18px',
// //                 borderRadius: 999,
// //                 border: 'none',
// //                 backgroundColor: carouselMode === 'center-focused' ? '#171717' : 'transparent',
// //                 color: carouselMode === 'center-focused' ? '#FFFFFF' : '#171717',
// //                 fontFamily: 'var(--font-mono)',
// //                 fontSize: '0.78rem',
// //                 fontWeight: 700,
// //                 cursor: 'pointer',
// //                 transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
// //               }}
// //             >
// //               <Sparkles size={14} /> CENTER FOCUSED
// //             </button>
// //           </div>

// //           {isHovered && (
// //             <span
// //               style={{
// //                 fontFamily: 'var(--font-mono)',
// //                 fontSize: '0.72rem',
// //                 backgroundColor: 'rgba(168, 50, 50, 0.12)',
// //                 color: '#A83232',
// //                 padding: '4px 12px',
// //                 borderRadius: 999,
// //                 fontWeight: 700
// //               }}
// //             >
// //               [AUTOPLAY PAUSED]
// //             </span>
// //           )}
// //         </div>

// //         {/* Right: Manual Navigation Controls */}
// //         <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
// //           <span
// //             style={{
// //               fontFamily: 'var(--font-mono)',
// //               fontSize: '0.85rem',
// //               fontWeight: 700,
// //               color: '#171717',
// //               letterSpacing: '0.08em'
// //             }}
// //           >
// //             PROJECT <span style={{ color: '#A83232' }}>{String(activeIndex + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
// //           </span>

// //           <div style={{ display: 'flex', gap: 8 }}>
// //             <button
// //               onClick={handlePrev}
// //               aria-label="Previous Project"
// //               data-cursor-color="#A83232"
// //               style={{
// //                 width: 44,
// //                 height: 44,
// //                 borderRadius: '50%',
// //                 backgroundColor: '#FFFFFF',
// //                 border: '1.5px solid rgba(23, 23, 23, 0.15)',
// //                 color: '#171717',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 cursor: 'pointer',
// //                 boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
// //                 transition: 'all 0.2s ease'
// //               }}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.backgroundColor = '#A83232';
// //                 e.currentTarget.style.color = '#FFFFFF';
// //                 e.currentTarget.style.borderColor = '#A83232';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.backgroundColor = '#FFFFFF';
// //                 e.currentTarget.style.color = '#171717';
// //                 e.currentTarget.style.borderColor = 'rgba(23, 23, 23, 0.15)';
// //               }}
// //             >
// //               <ChevronLeft size={20} />
// //             </button>

// //             <button
// //               onClick={handleNext}
// //               aria-label="Next Project"
// //               data-cursor-color="#A83232"
// //               style={{
// //                 width: 44,
// //                 height: 44,
// //                 borderRadius: '50%',
// //                 backgroundColor: '#FFFFFF',
// //                 border: '1.5px solid rgba(23, 23, 23, 0.15)',
// //                 color: '#171717',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 cursor: 'pointer',
// //                 boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
// //                 transition: 'all 0.2s ease'
// //               }}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.backgroundColor = '#A83232';
// //                 e.currentTarget.style.color = '#FFFFFF';
// //                 e.currentTarget.style.borderColor = '#A83232';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.backgroundColor = '#FFFFFF';
// //                 e.currentTarget.style.color = '#171717';
// //                 e.currentTarget.style.borderColor = 'rgba(23, 23, 23, 0.15)';
// //               }}
// //             >
// //               <ChevronRight size={20} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* 3D CAROUSEL STAGE CONTAINER */}
// //       <div
// //         style={{
// //           position: 'relative',
// //           width: '100%',
// //           minHeight: 520,
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           perspective: 1400,
// //           perspectiveOrigin: '50% 50%',
// //           overflow: 'visible'
// //         }}
// //       >
// //         {/* Render visible range [-2, -1, 0, 1, 2] for 3D depth */}
// //         {[-2, -1, 0, 1, 2].map((offset) => {
// //           const itemIndex = (activeIndex + offset + total) % total;
// //           const proj = projects[itemIndex];
// //           const isCenter = offset === 0;

// //           // Compute 3D Coverflow variables
// //           let rotateY = 0;
// //           let scale = 1;
// //           let translateZ = 0;
// //           let opacity = 1;
// //           let xOffset = 0;
// //           let zIndex = 10;

// //           if (carouselMode === 'coverflow') {
// //             if (isCenter) {
// //               rotateY = 0;
// //               scale = 1.15;
// //               translateZ = 120;
// //               opacity = 1;
// //               xOffset = 0;
// //               zIndex = 50;
// //             } else if (Math.abs(offset) === 1) {
// //               rotateY = offset < 0 ? 38 : -38;
// //               scale = 0.86;
// //               translateZ = 0;
// //               opacity = 0.85;
// //               xOffset = offset * 260;
// //               zIndex = 30;
// //             } else {
// //               rotateY = offset < 0 ? 58 : -58;
// //               scale = 0.68;
// //               translateZ = -140;
// //               opacity = 0.45;
// //               xOffset = offset * 380;
// //               zIndex = 10;
// //             }
// //           } else {
// //             // Center-Focused Spotlight Mode
// //             if (isCenter) {
// //               rotateY = 0;
// //               scale = 1.18;
// //               translateZ = 80;
// //               opacity = 1;
// //               xOffset = 0;
// //               zIndex = 50;
// //             } else if (Math.abs(offset) === 1) {
// //               rotateY = 0;
// //               scale = 0.82;
// //               translateZ = -40;
// //               opacity = 0.65;
// //               xOffset = offset * 320;
// //               zIndex = 20;
// //             } else {
// //               rotateY = 0;
// //               scale = 0.65;
// //               translateZ = -120;
// //               opacity = 0.25;
// //               xOffset = offset * 460;
// //               zIndex = 5;
// //             }
// //           }

// //           return (
// //             <motion.div
// //               key={`${proj.id}-${offset}`}
// //               layout
// //               initial={false}
// //               animate={{
// //                 rotateY: rotateY,
// //                 scale: scale,
// //                 translateZ: translateZ,
// //                 x: xOffset,
// //                 opacity: opacity
// //               }}
// //               transition={{
// //                 duration: 0.6,
// //                 ease: [0.16, 1, 0.3, 1]
// //               }}
// //               onClick={() => {
// //                 if (isCenter && onSelectProject) {
// //                   onSelectProject(proj);
// //                 } else {
// //                   setActiveIndex(itemIndex);
// //                 }
// //               }}
// //               style={{
// //                 position: 'absolute',
// //                 width: 380,
// //                 transformStyle: 'preserve-3d',
// //                 borderRadius: 24,
// //                 backgroundColor: isCenter ? '#070709' : '#121216',
// //                 color: '#FFFFFF',
// //                 padding: 24,
// //                 cursor: 'pointer',
// //                 boxShadow: isCenter
// //                   ? '0 30px 90px rgba(168, 50, 50, 0.5), 0 0 35px rgba(224, 38, 38, 0.25)'
// //                   : '0 15px 35px rgba(0,0,0,0.3)',
// //                 border: isCenter
// //                   ? '2px solid #A83232'
// //                   : '1px solid rgba(255, 255, 255, 0.12)',
// //                 zIndex: zIndex,
// //                 willChange: 'transform, opacity'
// //               }}
// //               data-cursor-color={proj.color || '#A83232'}
// //             >
// //               {/* Card Top Metadata */}
// //               <div
// //                 style={{
// //                   display: 'flex',
// //                   justifyContent: 'space-between',
// //                   alignItems: 'center',
// //                   marginBottom: 14
// //                 }}
// //               >
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
// //                   <span
// //                     style={{
// //                       fontFamily: 'var(--font-mono)',
// //                       fontSize: '0.72rem',
// //                       fontWeight: 700,
// //                       color: '#A83232',
// //                       letterSpacing: '0.12em'
// //                     }}
// //                   >
// //                     CASE {proj.number}
// //                   </span>
// //                   {isCenter && (
// //                     <span
// //                       style={{
// //                         fontSize: '0.62rem',
// //                         fontFamily: 'var(--font-mono)',
// //                         backgroundColor: 'rgba(168, 50, 50, 0.2)',
// //                         color: '#FFFFFF',
// //                         padding: '2px 8px',
// //                         borderRadius: 4,
// //                         fontWeight: 700
// //                       }}
// //                     >
// //                       {carouselMode === 'coverflow' ? '3D FOCUS' : 'CENTER SPOTLIGHT'}
// //                     </span>
// //                   )}
// //                 </div>

// //                 <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
// //                   {proj.year}
// //                 </span>
// //               </div>

// //               {/* Artwork Container */}
// //               <div
// //                 style={{
// //                   height: isCenter ? 240 : 180,
// //                   width: '100%',
// //                   borderRadius: 16,
// //                   overflow: 'hidden',
// //                   marginBottom: 18,
// //                   position: 'relative',
// //                   backgroundColor: '#000000',
// //                   border: '1px solid rgba(255,255,255,0.15)',
// //                   boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
// //                 }}
// //               >
// //                 <img
// //                   src={proj.image}
// //                   alt={proj.title}
// //                   style={{
// //                     width: '100%',
// //                     height: '100%',
// //                     objectFit: 'cover',
// //                     transition: 'transform 0.5s ease'
// //                   }}
// //                   onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
// //                   onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
// //                 />

// //                 {isCenter && (
// //                   <div
// //                     style={{
// //                       position: 'absolute',
// //                       bottom: 12,
// //                       left: '50%',
// //                       transform: 'translateX(-50%)',
// //                       padding: '6px 16px',
// //                       backgroundColor: 'rgba(7, 7, 9, 0.88)',
// //                       backdropFilter: 'blur(10px)',
// //                       WebkitBackdropFilter: 'blur(10px)',
// //                       borderRadius: 999,
// //                       border: '1px solid rgba(255,255,255,0.25)',
// //                       fontSize: '0.72rem',
// //                       fontFamily: 'var(--font-mono)',
// //                       fontWeight: 700,
// //                       color: '#FFFFFF',
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       gap: 6,
// //                       boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
// //                       whiteSpace: 'nowrap'
// //                     }}
// //                   >
// //                     <Eye size={13} color="#A83232" /> CLICK TO INSPECT CASE
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Title & Description */}
// //               <h3
// //                 style={{
// //                   fontFamily: 'var(--font-sans)',
// //                   fontSize: isCenter ? '1.45rem' : '1.15rem',
// //                   fontWeight: 800,
// //                   lineHeight: 1.15,
// //                   marginBottom: 8,
// //                   color: '#FFFFFF'
// //                 }}
// //               >
// //                 {proj.title}
// //               </h3>

// //               <p
// //                 style={{
// //                   fontSize: '0.82rem',
// //                   color: 'rgba(255,255,255,0.7)',
// //                   lineHeight: 1.45,
// //                   marginBottom: 16,
// //                   display: '-webkit-box',
// //                   WebkitLineClamp: 2,
// //                   WebkitBoxOrient: 'vertical',
// //                   overflow: 'hidden'
// //                 }}
// //               >
// //                 {proj.summary}
// //               </p>

// //               {/* Card Footer */}
// //               <div
// //                 style={{
// //                   display: 'flex',
// //                   justifyContent: 'space-between',
// //                   alignItems: 'center',
// //                   paddingTop: 12,
// //                   borderTop: '1px solid rgba(255, 255, 255, 0.12)'
// //                 }}
// //               >
// //                 <span
// //                   style={{
// //                     fontFamily: 'var(--font-mono)',
// //                     fontSize: '0.68rem',
// //                     color: proj.color || '#A83232',
// //                     fontWeight: 700
// //                   }}
// //                 >
// //                   {proj.discipline}
// //                 </span>

// //                 <div
// //                   style={{
// //                     width: 32,
// //                     height: 32,
// //                     borderRadius: '50%',
// //                     backgroundColor: '#A83232',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     color: '#FFFFFF',
// //                     boxShadow: '0 0 12px rgba(168, 50, 50, 0.5)'
// //                   }}
// //                 >
// //                   <ArrowUpRight size={15} />
// //                 </div>
// //               </div>
// //             </motion.div>
// //           );
// //         })}
// //       </div>

// //       {/* Pagination Dot Pills */}
// //       <div
// //         style={{
// //           display: 'flex',
// //           justifyContent: 'center',
// //           alignItems: 'center',
// //           gap: 8,
// //           marginTop: 36
// //         }}
// //       >
// //         {projects.map((p, idx) => (
// //           <button
// //             key={p.id}
// //             onClick={() => setActiveIndex(idx)}
// //             aria-label={`Jump to slide ${idx + 1}`}
// //             data-cursor-color="#A83232"
// //             style={{
// //               width: idx === activeIndex ? 38 : 8,
// //               height: 8,
// //               borderRadius: 999,
// //               backgroundColor: idx === activeIndex ? '#A83232' : 'rgba(23, 23, 23, 0.2)',
// //               border: 'none',
// //               cursor: 'pointer',
// //               transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
// //             }}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowLeft, ArrowRight, Eye, Layers, Sparkles } from 'lucide-react';
// import { portfolioData } from '../data/portfolioData';

// /** Coverflow cards now reveal the case-sheet on hover instead of opening a modal. */
// export default function ProjectCarousel() {
//   const projects = portfolioData.projects || [];
//   const [activeIndex, setActiveIndex] = useState(Math.min(7, Math.max(0, projects.length - 1)));
//   const [flippedId, setFlippedId] = useState(null);
//   if (!projects.length) return null;

//   const move = (direction) => {
//     setFlippedId(null);
//     setActiveIndex((current) => (current + direction + projects.length) % projects.length);
//   };

//   return (
//     <div className="portfolio-coverflow" style={{ position: 'relative', width: '100%', minHeight: 650, overflow: 'visible', padding: '22px 0 38px', isolation: 'isolate' }}>
//       <style>{`
//         .portfolio-coverflow-card { position:absolute; top:54px; left:50%; width:min( min(520px, 70vw), 520px); height:480px; transform-style:preserve-3d; perspective:1400px; }
//         .portfolio-coverflow-inner { width:100%; height:100%; position:relative; transform-style:preserve-3d; transition:transform .72s cubic-bezier(.2,.75,.25,1); }
//         .portfolio-coverflow-card:hover .portfolio-coverflow-inner, .portfolio-coverflow-card.is-flipped .portfolio-coverflow-inner { transform:rotateY(180deg); }
//         .portfolio-coverflow-face { position:absolute; inset:0; box-sizing:border-box; border-radius:30px; overflow:hidden; backface-visibility:hidden; -webkit-backface-visibility:hidden; }
//         .portfolio-coverflow-back { transform:rotateY(180deg); }
//         .portfolio-coverflow-arrow { width:50px;height:50px;border-radius:50%;border:1px solid rgba(0,0,0,.12);background:#fff;color:#171717;display:grid;place-items:center;cursor:pointer;box-shadow:0 5px 18px rgba(0,0,0,.08); }
//         @media(max-width:700px){.portfolio-coverflow{min-height:570px!important;padding-top:14px!important}.portfolio-coverflow-card{top:70px;width:min(84vw,420px);height:430px}.portfolio-coverflow-face{border-radius:22px}.portfolio-coverflow-controls{top:8px!important}.portfolio-coverflow-topline{display:none!important}}
//         @media(prefers-reduced-motion:reduce){.portfolio-coverflow-inner{transition:none}}
//       `}</style>

//       <div className="portfolio-coverflow-topline" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14, padding: '0 10px', position: 'relative', zIndex: 30 }}>
//         <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
//           <span style={{ padding: '10px 18px', borderRadius: 999, background: '#A83232', color: '#fff', font: '700 .76rem var(--font-mono)', display: 'inline-flex', gap: 8, alignItems: 'center' }}><Layers size={15}/> 3D COVERFLOW</span>
//           <span style={{ padding: '10px 16px', borderRadius: 999, background: 'rgba(0,0,0,.045)', color: '#171717', font: '700 .74rem var(--font-mono)' }}><Sparkles size={14} style={{ verticalAlign: 'middle', marginRight: 6 }}/>HOVER TO FLIP</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//           <span style={{ font: '800 .8rem var(--font-mono)', letterSpacing: '.1em', whiteSpace: 'nowrap' }}>PROJECT <span style={{ color: '#A83232' }}>{String(activeIndex + 1).padStart(2, '0')}</span> / {String(projects.length).padStart(2, '0')}</span>
//           <button className="portfolio-coverflow-arrow" aria-label="Previous project" onClick={() => move(-1)}><ArrowLeft size={20}/></button>
//           <button className="portfolio-coverflow-arrow" aria-label="Next project" onClick={() => move(1)}><ArrowRight size={20}/></button>
//         </div>
//       </div>

//       {projects.map((proj, index) => {
//         let offset = index - activeIndex;
//         if (offset > projects.length / 2) offset -= projects.length;
//         if (offset < -projects.length / 2) offset += projects.length;
//         const isActive = offset === 0;
//         const visible = Math.abs(offset) <= 2;
//         const isFlipped = flippedId === proj.id;
//         return (
//           <motion.div
//             key={proj.id || index}
//             className={`portfolio-coverflow-card ${isFlipped ? 'is-flipped' : ''}`}
//             initial={false}
//             animate={{
//               x: `calc(-50% + ${offset * (isActive ? 0 : 310)}px)`,
//               scale: isActive ? 1 : Math.abs(offset) === 1 ? .82 : .64,
//               rotateY: offset === 0 ? 0 : offset < 0 ? 20 : -20,
//               opacity: visible ? (isActive ? 1 : Math.abs(offset) === 1 ? .82 : .42) : 0,
//               zIndex: 20 - Math.abs(offset),
//               filter: isActive ? 'none' : 'saturate(.78)',
//             }}
//             transition={{ type: 'spring', stiffness: 180, damping: 24 }}
//             style={{ pointerEvents: visible ? 'auto' : 'none' }}
//             onMouseEnter={() => { if (isActive) setFlippedId(proj.id); }}
//             onMouseLeave={() => setFlippedId(null)}
//           >
//             <div className="portfolio-coverflow-inner" onClick={() => { if (isActive) setFlippedId(current => current === proj.id ? null : proj.id); else setActiveIndex(index); }} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (isActive) setFlippedId(current => current === proj.id ? null : proj.id); else setActiveIndex(index); } }} aria-label={`${proj.title}: hover to view project details`} style={{ cursor: 'pointer' }}>
//               <div className="portfolio-coverflow-face" style={{ background: '#09090b', color: '#fff', border: `1px solid ${isActive ? '#A83232' : 'rgba(255,255,255,.14)'}`, boxShadow: isActive ? '0 18px 60px rgba(168,50,50,.25)' : '0 18px 48px rgba(0,0,0,.15)', padding: 28, display: 'flex', flexDirection: 'column' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, fontFamily: 'var(--font-mono)', fontSize: '.78rem' }}><strong style={{ color: '#d74440', letterSpacing: '.12em' }}>CASE {proj.number || String(index + 1).padStart(2, '0')}</strong><span style={{ color: '#aaa' }}>{proj.year}</span></div>
//                 <div style={{ height: 290, minHeight: 0, borderRadius: 20, overflow: 'hidden', background: '#171719', border: '1px solid rgba(255,255,255,.12)', position: 'relative' }}><img src={proj.image} alt={proj.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/><span style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', borderRadius: 999, padding: '9px 15px', background: 'rgba(8,8,10,.92)', border: '1px solid rgba(255,255,255,.18)', color: '#fff', font: '700 .72rem var(--font-mono)', display: 'inline-flex', gap: 7, alignItems: 'center' }}><Eye size={14} color="#d74440"/> HOVER TO INSPECT CASE</span></div>
//                 <h3 style={{ font: '800 clamp(1.25rem,2vw,1.65rem)/1.15 var(--font-sans)', margin: '18px 0 8px' }}>{proj.title}</h3>
//                 <p style={{ font: '.86rem/1.45 var(--font-sans)', color: 'rgba(255,255,255,.68)', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{proj.summary}</p>
//               </div>

//               <div className="portfolio-coverflow-face portfolio-coverflow-back" style={{ background: 'linear-gradient(145deg,#171719,#09090b)', color: '#fff', padding: '30px 30px 26px', border: '1px solid rgba(168,50,50,.72)', boxShadow: '0 18px 60px rgba(0,0,0,.35)', display: 'flex', flexDirection: 'column' }}>
//                 <div style={{ display: 'inline-flex', alignSelf: 'flex-start', padding: '7px 12px', borderRadius: 999, background: '#e3262b', color: '#fff', font: '800 .66rem var(--font-mono)', marginBottom: 18 }}>FOLIO ARCHIVE SHEET · #{proj.number || String(index + 1).padStart(2, '0')}</div>
//                 <h3 style={{ font: '900 clamp(1.45rem,2.4vw,2.2rem)/1.04 var(--font-sans)', textTransform: 'uppercase', margin: '0 0 18px', letterSpacing: '-.03em' }}>{proj.title}</h3>
//                 <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', color: '#b9b9bd', font: '700 .75rem var(--font-mono)', paddingBottom: 18, borderBottom: '1px dashed rgba(255,255,255,.18)' }}><span style={{ color: '#ef3338' }}>◈ {proj.discipline || 'Graphic Design'}</span><span>▢ {proj.year}</span>{proj.client && <span style={{ color: '#f2d46f' }}>Client: {proj.client}</span>}</div>
//                 <p style={{ color: '#ef3338', font: '800 .72rem var(--font-mono)', letterSpacing: '.13em', margin: '22px 0 10px' }}>ART DIRECTION &amp; CONCEPTUAL NARRATIVE</p>
//                 <p style={{ color: 'rgba(255,255,255,.82)', font: '1rem/1.55 var(--font-sans)', margin: '0 0 18px' }}>{proj.summary}</p>
//                 <p style={{ color: '#fff', font: '800 .68rem var(--font-mono)', letterSpacing: '.13em', margin: 'auto 0 10px' }}>KEY DELIVERABLES &amp; ARTIFACTS</p>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>{[...(proj.tags || []).slice(0, 4), ...(proj.discipline ? [proj.discipline] : [])].slice(0, 5).map((tag, i) => <span key={`${tag}-${i}`} style={{ padding: '9px 10px', borderRadius: 9, border: '1px solid rgba(255,255,255,.13)', background: 'rgba(255,255,255,.055)', color: '#eee', font: '.7rem var(--font-sans)' }}>⊙ {tag}</span>)}</div>
//                 <div style={{ border: '1px dashed rgba(255,255,255,.18)', borderRadius: 15, padding: 14, textAlign: 'center', color: '#df5558', font: 'italic 1.1rem var(--font-serif)' }}>Interactive case artwork</div>
//                 <div style={{ color: '#aaa', font: '700 .65rem var(--font-mono)', textAlign: 'center', marginTop: 14 }}>MOVE POINTER AWAY TO RETURN TO ARTWORK</div>
//               </div>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

import React from "react";

/**
 * Compatibility wrapper for any existing imports.
 * The redesigned automatic right-to-left carousel is rendered in SelectedWork.jsx
 * so that it can share the page's search/filter data and featured-project state.
 * Keep this component for any other page that still imports ProjectCarousel.
 */
export default function ProjectCarousel({ projects = [], onSelectProject }) {
  if (!projects.length) return null;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 12 }}>
      {projects.slice(0, 3).map((project, index) => (
        <button
          key={project.id || project.title || index}
          type="button"
          onClick={() => onSelectProject?.(project)}
          style={{ position: "relative", padding: 0, border: 0, background: "#171414", overflow: "hidden", borderRadius: 8, cursor: "pointer", aspectRatio: "4 / 5" }}
        >
          <img src={project.image} alt={project.title || "Portfolio project"} loading="lazy" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
          <span style={{ position: "absolute", inset: "auto 0 0", padding: "24px 12px 12px", textAlign: "left", color: "#fff", background: "linear-gradient(transparent,rgba(0,0,0,.8))", fontSize: ".8rem", fontWeight: 700 }}>{project.title}</span>
        </button>
      ))}
    </div>
  );
}
