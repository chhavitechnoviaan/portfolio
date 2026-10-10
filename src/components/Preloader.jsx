import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ isLoaded, onComplete }) {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isLoaded && (
        <motion.div
          key="portfolio-intro"
          className="portfolio-intro-screen"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: .9, ease: [.77, 0, .175, 1] } }}
          style={{ position: 'fixed', inset: 0, zIndex: 99999, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4efe5', color: '#171717' }}
        >
          <style>{`
            .portfolio-intro-screen:before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(91,65,39,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(91,65,39,.045) 1px,transparent 1px);background-size:28px 28px}
            .portfolio-intro-inner{position:relative;z-index:1;width:min(1200px,92vw);padding:30px 0}
            .portfolio-intro-kicker{display:block;text-align:center;font:700 .72rem var(--font-mono,monospace);letter-spacing:.24em;color:#a83232;text-transform:uppercase;margin-bottom:clamp(12px,3vh,30px)}
            .portfolio-intro-title{font-family:var(--font-serif,Georgia,serif);font-size:clamp(5rem,18vw,15rem);font-weight:400;line-height:.76;letter-spacing:-.085em;text-align:center}
            .portfolio-intro-title span{display:inline-block;color:#b83232;font-style:italic}
            .portfolio-intro-bottom{display:flex;justify-content:flex-end;margin:clamp(20px,4vh,42px) clamp(0px,5vw,70px) 0;font:700 .8rem var(--font-mono,monospace);letter-spacing:.16em;text-transform:uppercase}
            .portfolio-intro-rule{height:2px;width:min(230px,40vw);margin:clamp(24px,5vh,50px) auto 0;background:#17171720;overflow:hidden}
            @media(max-width:560px){.portfolio-intro-kicker{font-size:.63rem}.portfolio-intro-title{font-size:clamp(4.7rem,22vw,8rem)}.portfolio-intro-bottom{font-size:.66rem}}
          `}</style>
          <div className="portfolio-intro-inner">
            <motion.span className="portfolio-intro-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>Graphic Designer · Art Direction · Visual Culture</motion.span>
            <motion.h1 className="portfolio-intro-title" initial={{ opacity: 0, y: 38, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: .9, delay: .12, ease: [.16, 1, .3, 1] }}>
              Port<span>folio</span>
            </motion.h1>
            <motion.div className="portfolio-intro-bottom" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6, delay: .55 }}>Anshum Lal <span style={{ color: '#b83232', marginLeft: 9 }}>↗</span></motion.div>
            <div className="portfolio-intro-rule"><motion.div initial={{ x: '-100%' }} animate={{ x: '0%' }} transition={{ duration: 1.35, ease: 'easeInOut' }} style={{ height: '100%', width: '100%', background: '#b83232' }} /></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
