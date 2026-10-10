// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import RopeTypography from './RopeTypography';
// import { ArrowUpRight, Sparkles } from 'lucide-react';
// import { portfolioData } from '../data/portfolioData';

// export default function HeroSection() {
//   const [activeDeckIndex, setActiveDeckIndex] = useState(1);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveDeckIndex((prev) => (prev + 1) % 4);
//     }, 3800);
//     return () => clearInterval(timer);
//   }, []);

//   const heroPhotoStrip = [
//     {
//       id: "p1",
//       title: "Tactile Identity",
//       tag: "BRANDING",
//       image: "/assets/images/project-01.jpg"
//     },
//     {
//       id: "p2",
//       title: "Shadow & Grain",
//       tag: "DIGITAL CAMPAIGNS",
//       image: "/assets/images/project-02.jpg"
//     },
//     {
//       id: "p3",
//       title: "Kinetic Glyphs",
//       tag: "CONTENT & MOTION",
//       image: "/assets/images/project-03.jpg"
//     }
//   ];

//   const deckCards = [
//     {
//       id: "deck-1",
//       number: "01",
//       category: "BRAND CORE",
//       title: "Branding Strategy",
//       desc: "Clarifying who you are, what you stand for, and how you win."
//     },
//     {
//       id: "deck-2",
//       number: "02",
//       category: "VISUAL SYSTEM",
//       title: "Visual Identity",
//       desc: "Turning strategy into bold, distinctive brand visuals & 3D typography."
//     },
//     {
//       id: "deck-3",
//       number: "03",
//       category: "BRAND NARRATIVE",
//       title: "Creative Direction",
//       desc: "Setting the tone, mood, and narrative message of the brand."
//     },
//     {
//       id: "deck-4",
//       number: "04",
//       category: "CREATIVE LOOK",
//       title: "Art Direction",
//       desc: "High-fashion spatial photography, 3D assets, & kinetic motion."
//     }
//   ];

//   return (
//     <div style={{ position: 'relative', width: '100%', backgroundColor: '#070709', color: '#FFFFFF' }}>
//       {/* Main Hero Banner Section */}
//       <section
//         id="hero"
//         style={{
//           minHeight: '100vh',
//           paddingTop: 130,
//           paddingBottom: 70,
//           position: 'relative',
//           zIndex: 10,
//           maxWidth: 1360,
//           margin: '0 auto',
//           paddingLeft: 24,
//           paddingRight: 24
//         }}
//       >
//         {/* Top Header Grid */}
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: 32,
//             alignItems: 'flex-start',
//             marginBottom: 36
//           }}
//         >
//           {/* Left Column */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div
//               style={{
//                 fontFamily: 'var(--font-mono)',
//                 fontSize: '0.82rem',
//                 fontWeight: 700,
//                 letterSpacing: '0.14em',
//                 color: '#E02626',
//                 textTransform: 'uppercase',
//                 marginBottom: 10,
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 8
//               }}
//             >
//               <Sparkles size={14} color="#E02626" />
//               SOURCE OF BOLD IDEAS /
//             </div>
//             <p
//               style={{
//                 fontSize: '0.9rem',
//                 color: 'rgba(255, 255, 255, 0.7)',
//                 maxWidth: 290,
//                 lineHeight: 1.45
//               }}
//             >
//               When brands are reborn, extra momentum is released into visual culture.
//             </p>

//             {/* 85% Metric Badge */}
//             <div
//               className="glass-card-3d"
//               style={{
//                 marginTop: 22,
//                 padding: '16px 22px',
//                 borderRadius: 20,
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 16
//               }}
//             >
//               <span
//                 style={{
//                   fontFamily: 'var(--font-sans)',
//                   fontSize: '2.4rem',
//                   fontWeight: 900,
//                   color: '#FFFFFF',
//                   lineHeight: 1
//                 }}
//               >
//                 85%
//               </span>
//               <span
//                 style={{
//                   fontFamily: 'var(--font-mono)',
//                   fontSize: '0.72rem',
//                   color: 'rgba(255, 255, 255, 0.75)',
//                   maxWidth: 125,
//                   lineHeight: 1.3
//                 }}
//               >
//                 Brands that lead forward.
//               </span>
//             </div>
//           </motion.div>

//           {/* Center Column: Director Portrait Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             style={{ textAlign: 'center' }}
//           >
//             <div
//               className="glass-card-3d"
//               style={{
//                 width: 230,
//                 height: 290,
//                 borderRadius: 22,
//                 margin: '0 auto 16px',
//                 overflow: 'hidden',
//                 position: 'relative'
//               }}
//             >
//               <img
//                 src="/assets/images/hero-director-portrait.png"
//                 alt={portfolioData.profile.name}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover'
//                 }}
//               />
//             </div>

//             <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: '1.25rem', display: 'block', color: '#FFFFFF', textTransform: 'uppercase' }}>
//               {portfolioData.profile.name}
//             </span>
//             <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#E02626', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
//               {portfolioData.profile.title}
//             </span>
//           </motion.div>

//           {/* Right Column: Main Headline */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             style={{ textAlign: 'right', position: 'relative' }}
//           >
//             <h1
//               style={{
//                 fontFamily: 'var(--font-sans)',
//                 fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
//                 fontWeight: 900,
//                 lineHeight: 0.95,
//                 letterSpacing: '-0.03em',
//                 textTransform: 'uppercase',
//                 color: '#FFFFFF',
//                 position: 'relative',
//                 zIndex: 5
//               }}
//             >
//               CREATIVE <br />
//               <span style={{ color: '#E02626' }}>BRANDING</span> AGENCY
//             </h1>

//             <div
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 14,
//                 marginTop: 24
//               }}
//             >
//               <p
//                 style={{
//                   fontFamily: 'var(--font-serif)',
//                   fontSize: '1.2rem',
//                   fontStyle: 'italic',
//                   color: 'rgba(255, 255, 255, 0.8)'
//                 }}
//               >
//                 We craft bold identities that stand out.
//               </p>
//               <a
//                 href="#work"
//                 style={{
//                   width: 44,
//                   height: 44,
//                   borderRadius: '50%',
//                   backgroundColor: '#E02626',
//                   color: '#FFFFFF',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   textDecoration: 'none',
//                   boxShadow: '0 4px 16px rgba(224, 38, 38, 0.4)'
//                 }}
//               >
//                 <ArrowUpRight size={22} />
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         {/* 3D ROPE TYPOGRAPHY FEATURE */}
//         <div style={{ margin: '24px 0' }}>
//           <RopeTypography text="IDEAS TAKE SHAPE" subtitle="3D Motion Architecture" />
//         </div>

//         {/* 3-Column Editorial Photo Strip */}
//         <div
//           style={{
//             marginTop: 36,
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//             gap: 22
//           }}
//         >
//           {heroPhotoStrip.map((item, idx) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
//               className="glass-card-3d hover-3d-lift"
//               style={{
//                 borderRadius: 20,
//                 padding: 22,
//                 position: 'relative',
//                 overflow: 'hidden',
//                 minHeight: 280,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 backgroundColor: '#121216'
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   inset: 0,
//                   overflow: 'hidden'
//                 }}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     opacity: 0.65,
//                     transition: 'transform 0.4s ease'
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
//                   onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//                 />
//               </div>

//               <div style={{ position: 'relative', zIndex: 2 }}>
//                 <span
//                   style={{
//                     fontFamily: 'var(--font-mono)',
//                     fontSize: '0.68rem',
//                     fontWeight: 700,
//                     letterSpacing: '0.12em',
//                     color: '#FFFFFF',
//                     backgroundColor: 'rgba(0,0,0,0.7)',
//                     padding: '4px 12px',
//                     borderRadius: 999,
//                     border: '1px solid rgba(255,255,255,0.14)'
//                   }}
//                 >
//                   {item.tag}
//                 </span>
//               </div>

//               <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
//                 <div>
//                   <h3
//                     style={{
//                       fontFamily: 'var(--font-sans)',
//                       fontSize: '1.35rem',
//                       fontWeight: 800,
//                       color: '#FFFFFF'
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
//                     Case Study 0{idx + 1}
//                   </span>
//                 </div>
//                 <div
//                   style={{
//                     width: 34,
//                     height: 34,
//                     borderRadius: '50%',
//                     backgroundColor: '#E02626',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}
//                 >
//                   <ArrowUpRight size={17} color="#FFFFFF" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* MARQUEE RUNNER */}
//       <div
//         style={{
//           padding: '16px 0',
//           backgroundColor: '#E02626',
//           color: '#FFFFFF',
//           overflow: 'hidden'
//         }}
//       >
//         <div className="marquee-container">
//           <div className="marquee-content">
//             <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.12em' }}>
//               RELOAD BRANDING ● 3D GLASS TYPOGRAPHY ● MOTION DESIGN ● ART DIRECTION ● VISUAL IDENTITY ●
//             </span>
//             <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.12em' }}>
//               RELOAD BRANDING ● 3D GLASS TYPOGRAPHY ● MOTION DESIGN ● ART DIRECTION ● VISUAL IDENTITY ●
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* SECTION 2 — STATEMENT HEADLINE & UNIFIED CARD DECK */}
//       <section
//         style={{
//           padding: '100px 24px',
//           backgroundColor: '#FFFFFF',
//           color: '#171717',
//           position: 'relative'
//         }}
//         className="bg-grid-white"
//       >
//         <div style={{ maxWidth: 1280, margin: '0 auto' }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             style={{ marginBottom: 50 }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
//               <span style={{ color: '#E02626', fontSize: '1.8rem' }}>✱</span>
//               <span
//                 style={{
//                   fontFamily: 'var(--font-mono)',
//                   fontSize: '0.78rem',
//                   fontWeight: 700,
//                   letterSpacing: '0.14em',
//                   color: '#171717'
//                 }}
//               >
//                 SHAPE THE FUTURE
//               </span>
//             </div>

//             <h2
//               style={{
//                 fontFamily: 'var(--font-sans)',
//                 fontSize: 'clamp(2.4rem, 5.2vw, 4.6rem)',
//                 fontWeight: 900,
//                 lineHeight: 1.05,
//                 letterSpacing: '-0.02em',
//                 textTransform: 'uppercase',
//                 maxWidth: 1100
//               }}
//             >
//               RELOAD DESIGNS MAKE BRAND SYSTEMS{' '}
//               <span
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   verticalAlign: 'middle',
//                   width: 58,
//                   height: 36,
//                   borderRadius: 999,
//                   backgroundColor: '#E02626',
//                   color: '#FFFFFF',
//                   fontSize: '0.85rem',
//                   margin: '0 6px'
//                 }}
//               >
//                 🔥
//               </span>{' '}
//               THAT REDEFINE MODERN <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#E02626' }}>VISUAL CULTURE</span>
//             </h2>

//             <p
//               style={{
//                 fontFamily: 'var(--font-mono)',
//                 fontSize: '0.9rem',
//                 color: '#555',
//                 maxWidth: 600,
//                 marginTop: 18,
//                 lineHeight: 1.6
//               }}
//             >
//               Reload builds brands that cut through noise, challenge clichés, and perform at the highest visual standards.
//             </p>
//           </motion.div>

//           <div style={{ textAlign: 'center', margin: '70px 0 40px' }}>
//             <h3
//               style={{
//                 fontFamily: 'var(--font-sans)',
//                 fontSize: 'clamp(2rem, 4.2vw, 3.5rem)',
//                 fontWeight: 900,
//                 textTransform: 'uppercase',
//                 letterSpacing: '-0.02em',
//                 color: '#171717'
//               }}
//             >
//               EVERYTHING <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#777', fontWeight: 400 }}>YOUR BRAND</span> NEEDS TO GROW
//             </h3>
//           </div>

//           {/* UNIFIED LUXURY CARDS DECK */}
//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
//               gap: 22,
//               position: 'relative',
//               margin: '40px 0'
//             }}
//           >
//             {deckCards.map((card, idx) => {
//               const isActive = idx === activeDeckIndex;
//               return (
//                 <div
//                   key={card.id}
//                   onClick={() => setActiveDeckIndex(idx)}
//                   style={{
//                     backgroundColor: '#121216',
//                     color: '#FFFFFF',
//                     borderRadius: 22,
//                     padding: 28,
//                     minHeight: 310,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                     boxShadow: isActive ? '0 20px 50px rgba(224, 38, 38, 0.35)' : '0 10px 30px rgba(0,0,0,0.15)',
//                     border: isActive ? '1.5px solid #E02626' : '1px solid rgba(255,255,255,0.08)',
//                     transform: isActive ? 'translateY(-8px)' : 'none',
//                     opacity: isActive ? 1 : 0.85,
//                     transition: 'all 0.3s ease',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   <div>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
//                       <span
//                         style={{
//                           fontFamily: 'var(--font-mono)',
//                           fontSize: '0.68rem',
//                           fontWeight: 700,
//                           padding: '4px 10px',
//                           borderRadius: 4,
//                           backgroundColor: 'rgba(224, 38, 38, 0.15)',
//                           color: '#E02626'
//                         }}
//                       >
//                         {card.category}
//                       </span>
//                       <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
//                         {card.number}
//                       </span>
//                     </div>

//                     <h4
//                       style={{
//                         fontFamily: 'var(--font-sans)',
//                         fontSize: '1.75rem',
//                         fontWeight: 900,
//                         lineHeight: 1.1,
//                         marginBottom: 10
//                       }}
//                     >
//                       {card.title}
//                     </h4>

//                     <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.48 }}>
//                       {card.desc}
//                     </p>
//                   </div>

//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
//                     <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#E02626', fontWeight: 700 }}>
//                       {isActive ? '● ACTIVE SYSTEM' : 'Click to select'}
//                     </span>
//                     <div
//                       style={{
//                         width: 32,
//                         height: 32,
//                         borderRadius: '50%',
//                         backgroundColor: '#E02626',
//                         color: '#FFFFFF',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                       }}
//                     >
//                       <ArrowUpRight size={16} />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div style={{ textAlign: 'center', marginTop: 60 }}>
//             <a
//               href="#work"
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 12,
//                 padding: '14px 30px',
//                 border: '1.5px solid #171717',
//                 borderRadius: 999,
//                 backgroundColor: '#171717',
//                 color: '#FFFFFF',
//                 fontFamily: 'var(--font-mono)',
//                 fontSize: '0.82rem',
//                 fontWeight: 700,
//                 textDecoration: 'none',
//                 boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
//                 transition: 'all 0.25s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#E02626';
//                 e.currentTarget.style.borderColor = '#E02626';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#171717';
//                 e.currentTarget.style.borderColor = '#171717';
//               }}
//             >
//               EXPLORE THE PORTFOLIO <ArrowUpRight size={16} />
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import bgimage from '../assets/bgimage.jpg'; // Ensure you have a background image in the specified path


export default function HeroSection() {

  const [activeDeckIndex, setActiveDeckIndex] = useState(1);
  const [scrambleText, setScrambleText] = useState('WE MAKE BRANDS UNMISSABLE.');

  useEffect(() => {
    const finalText = 'WE MAKE BRANDS UNMISSABLE.';
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let frame = 0;
    const timer = setInterval(() => {
      frame += 1;
      setScrambleText(
        finalText
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (index < Math.floor(frame / 2)) return letter;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      if (frame > finalText.length * 2) {
        setScrambleText(finalText);
        clearInterval(timer);
      }
    }, 42);
    return () => clearInterval(timer);
  }, []);



  useEffect(() => {

    const timer = setInterval(() => {

      setActiveDeckIndex((prev) => (prev + 1) % 4);

    }, 3800);

    return () => clearInterval(timer);

  }, []);



  const deckCards = [

    {

      id: "deck-1",

      number: "01",

      category: "BRAND CORE",

      title: "Branding Strategy",

      desc: "Clarifying who you are, what you stand for, and how you win."

    },

    {

      id: "deck-2",

      number: "02",

      category: "VISUAL SYSTEM",

      title: "Visual Identity",

      desc: "Turning strategy into bold, distinctive brand visuals & 3D typography."

    },

    {

      id: "deck-3",

      number: "03",

      category: "BRAND NARRATIVE",

      title: "Creative Direction",

      desc: "Setting the tone, mood, and narrative message of the brand."

    },

    {

      id: "deck-4",

      number: "04",

      category: "CREATIVE LOOK",

      title: "Art Direction",

      desc: "High-fashion spatial photography, 3D assets, & kinetic motion."

    }

  ];



  return (

    <div style={{ position: 'relative', width: '100%', backgroundColor: '#070709', color: '#FFFFFF' }}>

      {/* Main Hero Banner Section */}
      <section
        id="hero"
        style={{
          minHeight: '100svh',
          position: 'relative',
          isolation: 'isolate',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '110px 5vw 28px',
          backgroundColor: '#070709',
          color: '#fff',
        }}
      >
        {/* Full-bleed background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
          <img
            src={bgimage}
            alt="Bold creative campaign background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 38%' }}
          />
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, zIndex: -1,
            background: 'linear-gradient(90deg, rgba(8,5,7,.78) 0%, rgba(8,5,7,.28) 45%, rgba(8,5,7,.48) 100%), linear-gradient(0deg, rgba(5,5,7,.72) 0%, transparent 55%, rgba(5,5,7,.2) 100%)',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ maxWidth: 330 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: '#ff3038', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '.76rem', letterSpacing: '.18em', textTransform: 'uppercase' }}>
              <Sparkles size={16} /> SOURCE OF BOLD IDEAS /
            </div>
            <p style={{ marginTop: 16, maxWidth: 310, fontSize: 'clamp(.95rem, 1.35vw, 1.15rem)', lineHeight: 1.5, color: 'rgba(255,255,255,.78)' }}>
              When brands are reborn, extra momentum is released into visual culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8, delay: .15 }}
            style={{ textAlign: 'right', maxWidth: 620, marginLeft: 'auto' }}
          >
            <h1 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.8rem, 7.2vw, 6.8rem)', fontWeight: 900, lineHeight: .88, letterSpacing: '-.065em', textTransform: 'uppercase', textShadow: '0 4px 30px rgba(0,0,0,.25)' }}>
              CREATIVE<br />BRANDING<br />AGENCY
            </h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 14, marginTop: 22 }}>
              <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 1.5vw, 1.35rem)', fontStyle: 'italic', color: 'rgba(255,255,255,.9)' }}>
                We craft bold identities that stand out.
              </p>
              <a href="#work" aria-label="Explore our work" style={{ flex: '0 0 auto', width: 44, height: 44, borderRadius: '50%', background: '#e02626', color: '#fff', display: 'grid', placeItems: 'center', textDecoration: 'none', boxShadow: '0 4px 22px rgba(224,38,38,.45)' }}>
                <ArrowUpRight size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scramble typography reveal + right-to-left motion */}
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden', marginTop: 'auto', paddingTop: 70 }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .35 }}
            style={{ fontFamily: 'var(--font-mono)', color: '#ff3038', fontSize: 'clamp(.68rem, 1vw, .85rem)', letterSpacing: '.22em', fontWeight: 800, marginBottom: 12 }}
          >
            
          </motion.div>
          <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
            <motion.div
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 13, ease: 'linear', repeat: Infinity }}
              style={{ display: 'inline-block', minWidth: 'max-content', fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: 'clamp(2rem, 5.5vw, 5.2rem)', letterSpacing: '-.045em', lineHeight: 1.05, textTransform: 'uppercase' }}
            >
              {scrambleText}&nbsp;&nbsp;✳&nbsp;&nbsp; BOLD IDEAS. UNMISTAKABLE IMPACT.&nbsp;&nbsp;✳
            </motion.div>
          </div>
          {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 18, marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: '.68rem', letterSpacing: '.12em', color: 'rgba(255,255,255,.7)' }}>
            <span>INDEPENDENT CREATIVE STUDIO</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div> */}
        </div>
      </section>

      {/* MARQUEE RUNNER */}

      <div

        style={{

          padding: '16px 0',

          backgroundColor: '#E02626',

          color: '#FFFFFF',

          overflow: 'hidden'

        }}

      >

        <div className="marquee-container">

          <div className="marquee-content">

            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.12em' }}>

              RELOAD BRANDING ● 3D GLASS TYPOGRAPHY ● MOTION DESIGN ● ART DIRECTION ● VISUAL IDENTITY ●

            </span>

            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.12em' }}>

              RELOAD BRANDING ● 3D GLASS TYPOGRAPHY ● MOTION DESIGN ● ART DIRECTION ● VISUAL IDENTITY ●

            </span>

          </div>

        </div>

      </div>



      {/* SECTION 2 — STATEMENT HEADLINE & UNIFIED CARD DECK */}

      <section

        style={{

          padding: '100px 24px',

          backgroundColor: '#FFFFFF',

          color: '#171717',

          position: 'relative'

        }}

        className="bg-grid-white"

      >

        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.6 }}

            style={{ marginBottom: 50 }}

          >

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>

              <span style={{ color: '#E02626', fontSize: '1.8rem' }}>✱</span>

              <span

                style={{

                  fontFamily: 'var(--font-mono)',

                  fontSize: '0.78rem',

                  fontWeight: 700,

                  letterSpacing: '0.14em',

                  color: '#171717'

                }}

              >

                SHAPE THE FUTURE

              </span>

            </div>



            <h2

              style={{

                fontFamily: 'var(--font-sans)',

                fontSize: 'clamp(2.4rem, 5.2vw, 4.6rem)',

                fontWeight: 900,

                lineHeight: 1.05,

                letterSpacing: '-0.02em',

                textTransform: 'uppercase',

                maxWidth: 1100

              }}

            >

              RELOAD DESIGNS MAKE BRAND SYSTEMS{' '}

              <span

                style={{

                  display: 'inline-flex',

                  alignItems: 'center',

                  justifyContent: 'center',

                  verticalAlign: 'middle',

                  width: 58,

                  height: 36,

                  borderRadius: 999,

                  backgroundColor: '#E02626',

                  color: '#FFFFFF',

                  fontSize: '0.85rem',

                  margin: '0 6px'

                }}

              >

                🔥

              </span>{' '}

              THAT REDEFINE MODERN <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#E02626' }}>VISUAL CULTURE</span>

            </h2>



            <p

              style={{

                fontFamily: 'var(--font-mono)',

                fontSize: '0.9rem',

                color: '#555',

                maxWidth: 600,

                marginTop: 18,

                lineHeight: 1.6

              }}

            >

              Reload builds brands that cut through noise, challenge clichés, and perform at the highest visual standards.

            </p>

          </motion.div>



          <div style={{ textAlign: 'center', margin: '70px 0 40px' }}>

            <h3

              style={{

                fontFamily: 'var(--font-sans)',

                fontSize: 'clamp(2rem, 4.2vw, 3.5rem)',

                fontWeight: 900,

                textTransform: 'uppercase',

                letterSpacing: '-0.02em',

                color: '#171717'

              }}

            >

              EVERYTHING <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#777', fontWeight: 400 }}>YOUR BRAND</span> NEEDS TO GROW

            </h3>

          </div>



          {/* UNIFIED LUXURY CARDS DECK */}

          <div

            style={{

              display: 'grid',

              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',

              gap: 22,

              position: 'relative',

              margin: '40px 0'

            }}

          >

            {deckCards.map((card, idx) => {

              const isActive = idx === activeDeckIndex;

              return (

                <div

                  key={card.id}

                  onClick={() => setActiveDeckIndex(idx)}

                  style={{

                    backgroundColor: '#121216',

                    color: '#FFFFFF',

                    borderRadius: 22,

                    padding: 28,

                    minHeight: 310,

                    display: 'flex',

                    flexDirection: 'column',

                    justifyContent: 'space-between',

                    boxShadow: isActive ? '0 20px 50px rgba(224, 38, 38, 0.35)' : '0 10px 30px rgba(0,0,0,0.15)',

                    border: isActive ? '1.5px solid #E02626' : '1px solid rgba(255,255,255,0.08)',

                    transform: isActive ? 'translateY(-8px)' : 'none',

                    opacity: isActive ? 1 : 0.85,

                    transition: 'all 0.3s ease',

                    cursor: 'pointer'

                  }}

                >

                  <div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>

                      <span

                        style={{

                          fontFamily: 'var(--font-mono)',

                          fontSize: '0.68rem',

                          fontWeight: 700,

                          padding: '4px 10px',

                          borderRadius: 4,

                          backgroundColor: 'rgba(224, 38, 38, 0.15)',

                          color: '#E02626'

                        }}

                      >

                        {card.category}

                      </span>

                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>

                        {card.number}

                      </span>

                    </div>



                    <h4

                      style={{

                        fontFamily: 'var(--font-sans)',

                        fontSize: '1.75rem',

                        fontWeight: 900,

                        lineHeight: 1.1,

                        marginBottom: 10

                      }}

                    >

                      {card.title}

                    </h4>



                    <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.48 }}>

                      {card.desc}

                    </p>

                  </div>



                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.08)' }}>

                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#E02626', fontWeight: 700 }}>

                      {isActive ? '● ACTIVE SYSTEM' : 'Click to select'}

                    </span>

                    <div

                      style={{

                        width: 32,

                        height: 32,

                        borderRadius: '50%',

                        backgroundColor: '#E02626',

                        color: '#FFFFFF',

                        display: 'flex',

                        alignItems: 'center',

                        justifyContent: 'center'

                      }}

                    >

                      <ArrowUpRight size={16} />

                    </div>

                  </div>

                </div>

              );

            })}

          </div>



          <div style={{ textAlign: 'center', marginTop: 60 }}>

            <a

              href="#work"

              style={{

                display: 'inline-flex',

                alignItems: 'center',

                gap: 12,

                padding: '14px 30px',

                border: '1.5px solid #171717',

                borderRadius: 999,

                backgroundColor: '#171717',

                color: '#FFFFFF',

                fontFamily: 'var(--font-mono)',

                fontSize: '0.82rem',

                fontWeight: 700,

                textDecoration: 'none',

                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',

                transition: 'all 0.25s ease'

              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.backgroundColor = '#E02626';

                e.currentTarget.style.borderColor = '#E02626';

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.backgroundColor = '#171717';

                e.currentTarget.style.borderColor = '#171717';

              }}

            >

              EXPLORE THE PORTFOLIO <ArrowUpRight size={16} />

            </a>

          </div>

        </div>

      </section>

    </div>

  );

}
