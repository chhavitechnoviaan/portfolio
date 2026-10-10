import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, BookOpen, MoveUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const capabilities = [
  'Creative Direction & Strategy',
  'Experimental 3D Rope Typography',
  'Tactile Editorial & Print Systems',
  'Interactive WebGL & Motion Direction',
  'Visual Identity Systems',
  'Campaign Art Direction'
];

export default function AboutSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const resetTilt = () => setTilt({ x: 0, y: 0 });
  const onPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - y) * 10, y: (x - 0.5) * 12 });
  };

  return (
    <section id="about" className="about-editorial-section">
      <style>{`
        .about-editorial-section{position:relative;isolation:isolate;overflow:hidden;padding:clamp(90px,10vw,150px) clamp(20px,5vw,76px);background:#fff;color:#171717;background-image:linear-gradient(rgba(0,0,0,.032) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.032) 1px,transparent 1px);background-size:36px 36px}
        .about-editorial-section:before,.about-editorial-section:after{content:'';position:absolute;z-index:-1;pointer-events:none;left:-12%;width:124%;height:42%;border-radius:44% 56% 0 0 / 14% 18% 0 0;filter:blur(1px);opacity:.28;transform:translate3d(0,0,0);background:radial-gradient(ellipse at 30% 40%,rgba(217,38,38,.10),transparent 48%),radial-gradient(ellipse at 70% 50%,rgba(100,140,160,.12),transparent 48%);animation:aboutWaterDrift 13s ease-in-out infinite alternate}
        .about-editorial-section:before{top:8%;}
        .about-editorial-section:after{bottom:-10%;opacity:.22;animation-duration:17s;animation-direction:alternate-reverse;background:radial-gradient(ellipse at 65% 50%,rgba(217,38,38,.10),transparent 48%),radial-gradient(ellipse at 25% 45%,rgba(100,140,160,.13),transparent 48%)}
        @keyframes aboutWaterDrift{0%{transform:translate3d(-2%,0,0) rotate(-1deg) scaleY(.94);border-radius:44% 56% 0 0 / 14% 18% 0 0}50%{transform:translate3d(1%,12px,0) rotate(.6deg) scaleY(1.04);border-radius:57% 43% 0 0 / 20% 12% 0 0}100%{transform:translate3d(2%,-8px,0) rotate(1deg) scaleY(.98);border-radius:48% 52% 0 0 / 12% 20% 0 0}}
        .about-editorial-shell{max-width:1450px;margin:0 auto;display:grid;grid-template-columns:minmax(300px,.82fr) minmax(0,1.18fr);align-items:center;gap:clamp(36px,6vw,96px)}
        .about-profile-wrap{perspective:1200px;position:relative;max-width:620px;width:100%;margin:0 auto}
        .about-profile-card{position:relative;transform-style:preserve-3d;transition:transform .15s ease-out;background:#121216;color:#fff;border-radius:28px;padding:clamp(18px,3vw,34px);box-shadow:0 35px 90px #0002;overflow:hidden}
        .about-profile-card:before{content:"";position:absolute;inset:-30%;background:radial-gradient(ellipse at 20% 20%,#d9262630,transparent 36%),radial-gradient(ellipse at 75% 65%,rgba(105,164,178,.14),transparent 38%);pointer-events:none;animation:aboutCardWater 9s ease-in-out infinite alternate}
        .about-profile-card:after{content:'';position:absolute;inset:0;pointer-events:none;border-radius:inherit;background:linear-gradient(115deg,transparent 28%,rgba(255,255,255,.055) 42%,transparent 56%);transform:translateX(-120%);transition:transform 1s ease}
        .about-profile-card:hover:after{transform:translateX(120%)}
        @keyframes aboutCardWater{0%{transform:translate3d(-4%,-2%,0) scale(1);filter:hue-rotate(0deg)}100%{transform:translate3d(4%,3%,0) scale(1.08);filter:hue-rotate(18deg)}}
        .about-profile-image{position:relative;overflow:hidden;border-radius:17px;aspect-ratio:.9;background:#262626}
        .about-profile-image img{display:block;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.06);transform:scale(1.02);transition:filter .8s,transform 1s}
        .about-profile-card:hover .about-profile-image img{filter:grayscale(0) contrast(1.02);transform:scale(1.07)}
        .about-profile-image:after{content:"";position:absolute;inset:50% 0 0;background:linear-gradient(transparent,#0006);pointer-events:none}
        .about-profile-index{position:absolute;z-index:2;top:14px;left:14px;background:#f5f0e6;color:#171717;padding:7px 10px;font:700 .64rem var(--font-mono,monospace);letter-spacing:.12em}
        .about-profile-copy{text-align:center;padding:24px 8px 8px;position:relative}
        .about-profile-copy h3{font-size:clamp(1.5rem,2.7vw,2.25rem);font-weight:900;letter-spacing:-.05em;text-transform:uppercase}
        .about-profile-copy p{font:700 .72rem var(--font-mono,monospace);color:#f04444;margin-top:7px}
        .about-profile-location{font:700 .7rem var(--font-mono,monospace);color:#b7b7bc;margin-top:13px}
        .about-kicker{display:flex;align-items:center;gap:9px;color:#b33232;font:700 .7rem var(--font-mono,monospace);letter-spacing:.15em;text-transform:uppercase;margin-bottom:18px}
        .about-title{font-size:clamp(2.4rem,5.5vw,5.4rem);line-height:.9;letter-spacing:-.075em;font-weight:900;text-transform:uppercase}
        .about-title em{font-family:var(--font-serif,Georgia,serif);font-weight:400;color:#d92626;text-transform:none;letter-spacing:-.06em}
        .about-lede{margin-top:24px;max-width:760px;color:#575757;font-size:clamp(1rem,1.35vw,1.16rem);line-height:1.8}
        .about-matrix-heading{margin:36px 0 14px;font:700 .7rem var(--font-mono,monospace);letter-spacing:.13em;text-transform:uppercase}
        .about-capabilities{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
        .about-capability{display:flex;align-items:center;gap:11px;min-height:68px;padding:15px 16px;border:1px solid #17171712;border-radius:12px;background:#f8f6f0;font-size:.88rem;font-weight:650;transition:transform .25s,border-color .25s,background .25s}
        .about-capability:hover{transform:translateY(-3px);border-color:#d9262650;background:#fff}
        .about-capability i{width:8px;height:8px;border-radius:50%;background:#d92626;flex:none}
        .about-signoff{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-top:30px;padding-top:18px;border-top:1px solid #17171720;color:#777;font:700 .67rem var(--font-mono,monospace);letter-spacing:.1em;text-transform:uppercase}
        .about-signoff a{display:inline-flex;align-items:center;gap:7px;color:#a83232;text-decoration:none}
        @media(max-width:900px){.about-editorial-shell{grid-template-columns:1fr;gap:48px}.about-profile-wrap{max-width:540px}.about-profile-image{aspect-ratio:1.1}}
        @media(max-width:560px){.about-editorial-section{padding:84px 18px}.about-capabilities{grid-template-columns:1fr}.about-title{font-size:clamp(2.5rem,12vw,4rem)}.about-signoff{align-items:flex-start;flex-direction:column}}
        @media(prefers-reduced-motion:reduce){.about-editorial-section *,.about-editorial-section:before,.about-editorial-section:after{transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}
      `}</style>
      <div className="about-editorial-shell">
        <motion.div className="about-profile-wrap" initial={{ opacity: 0, x: -36, rotateY: -5 }} whileInView={{ opacity: 1, x: 0, rotateY: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .85, ease: [.16, 1, .3, 1] }}>
          <motion.div className="about-profile-card"
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            onMouseMove={onPointerMove} onMouseLeave={resetTilt}
            style={{ transformStyle: 'preserve-3d' }}>
            <div className="about-profile-image">
              <img src="/assets/images/hero-director-portrait.png" alt={`${portfolioData.profile.name} creative portrait`} loading="lazy" />
              <span className="about-profile-index">CREATIVE FILE / 001</span>
            </div>
            <div className="about-profile-copy" style={{ transform: 'translateZ(24px)' }}>
              <h3>{portfolioData.profile.name}</h3>
              <p>{portfolioData.profile.title}</p>
              <div className="about-profile-location">⌖ &nbsp;{portfolioData.profile.location}</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={{ visible: { transition: { staggerChildren: .11 } }, hidden: {} }}>
          <motion.div className="about-kicker" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}><BookOpen size={15} /> About the designer / creative notes</motion.div>
          <motion.h2 className="about-title" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>DESIGNING WITH TACTILE GRIT IN AN INCREASINGLY <em>WEIGHTLESS</em> DIGITAL WORLD.</motion.h2>
          <motion.p className="about-lede" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            I’m {portfolioData.profile.name}, a designer exploring the space between physical craft and digital motion. My practice brings tactile textures, bold identities, editorial typography and cinematic image-making into visual systems with a distinct point of view.
          </motion.p>
          <motion.p className="about-lede" style={{ marginTop: 12 }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            From the first sketch to the final frame, I look for the detail that makes a brand feel unmistakably its own — considered, expressive, and built to move.
          </motion.p>
          <motion.h3 className="about-matrix-heading" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>Selected capabilities & discipline matrix</motion.h3>
          <div className="about-capabilities">
            {capabilities.map((capability, index) => (
              <motion.div key={capability} className="about-capability" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .45, delay: index * .04 }}>
                <i />{capability}
              </motion.div>
            ))}
          </div>
          <motion.div className="about-signoff" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <span>Independent practice / New Delhi & worldwide</span>
            <a href="#contact">Start a conversation <MoveUpRight size={14}/></a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
