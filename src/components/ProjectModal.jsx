import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowUpRight, ArrowLeft, MoveUpRight, Menu } from 'lucide-react';

export default function ProjectModal({ project, projects = [], onClose }) {
  const [activeProject, setActiveProject] = useState(project);
  const [revealedCount, setRevealedCount] = useState(0);
  const galleryRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const gallery = projects.length ? projects : [project];

  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);

  // This gallery behaves like a hash-addressable page: #explore.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (window.location.hash !== '#explore') window.history.pushState({ explore: true }, '', '#explore');
    const handleKey = (event) => { if (event.key === 'Escape') onCloseRef.current?.(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  // Reveal color one image at a time, beginning at the top-right and sweeping left.
  const revealOrder = useMemo(() => {
    const order = [];
    for (let row = 0; row < Math.ceil(gallery.length / 4); row += 1) {
      const start = row * 4;
      const end = Math.min(start + 4, gallery.length);
      for (let index = end - 1; index >= start; index -= 1) order.push(index);
    }
    return order;
  }, [gallery.length]);

  useEffect(() => {
    setRevealedCount(0);
    let count = 0;
    const timer = window.setInterval(() => {
      count += 1;
      setRevealedCount(count);
      if (count >= gallery.length) window.clearInterval(timer);
    }, 260);
    return () => window.clearInterval(timer);
  }, [gallery.length]);

  const revealed = useMemo(() => new Set(revealOrder.slice(0, revealedCount)), [revealOrder, revealedCount]);
  const closeGallery = () => {
    if (window.location.hash === '#explore') window.history.pushState(null, '', '#work');
    onClose?.();
  };
  const chooseProject = (item) => {
    setActiveProject(item);
    if (galleryRef.current) galleryRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div id="explore" className="case-gallery-overlay" role="dialog" aria-modal="true" aria-label={`${activeProject.title} project gallery`}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <style>{`
        .case-gallery-overlay{position:fixed;inset:0;z-index:1200;overflow-y:auto;overscroll-behavior:contain;background:#fbfbf9;color:#171717;scroll-behavior:smooth}
        .case-gallery-shell{max-width:1680px;margin:0 auto;padding:clamp(16px,2.5vw,38px) clamp(16px,3.7vw,58px) 48px}
        .case-gallery-nav{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:0 0 18px;border-bottom:1px solid #1717171b}
        .case-gallery-brand{font-weight:900;font-size:.9rem;letter-spacing:-.04em;line-height:1}
        .case-gallery-nav-right{display:flex;align-items:center;gap:12px}
        .case-gallery-menu{width:42px;height:42px;display:grid;place-items:center;background:transparent;border:0;color:#171717}
        .case-gallery-close{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border:1px solid #17171725;border-radius:50%;background:#fff;color:#171717;cursor:pointer;transition:transform .25s,background .25s}
        .case-gallery-close:hover{transform:rotate(90deg);background:#171717;color:#fff}
        .case-gallery-intro{display:grid;grid-template-columns:minmax(245px,.7fr) minmax(0,1.3fr);align-items:center;gap:clamp(26px,5vw,76px);padding:clamp(28px,4.5vw,66px) 0 clamp(38px,5vw,72px)}
        .case-gallery-kicker{color:#777;font:700 .65rem var(--font-mono,monospace);letter-spacing:.13em;text-transform:uppercase}
        .case-gallery-title{font-size:clamp(2.4rem,5.3vw,5.8rem);line-height:.94;letter-spacing:-.075em;margin:14px 0 16px;max-width:600px;font-weight:750}
        .case-gallery-title em{font-family:var(--font-serif,Georgia,serif);font-weight:400;color:#777;text-transform:none;letter-spacing:-.055em}
        .case-gallery-subtitle{font-size:clamp(.86rem,1vw,1rem);line-height:1.6;color:#5e5e5e;max-width:360px;margin-bottom:20px}
        .case-gallery-selected{border-top:1px solid #1717171b;padding-top:15px;margin-top:20px;max-width:380px}
        .case-gallery-selected small{font:700 .62rem var(--font-mono,monospace);letter-spacing:.12em;text-transform:uppercase;color:#a83232}
        .case-gallery-selected h2{font-size:clamp(1.15rem,1.8vw,1.8rem);line-height:1.05;letter-spacing:-.045em;margin:8px 0}
        .case-gallery-selected p{font-size:.8rem;line-height:1.55;color:#696969}
        .case-gallery-selected-meta{font:700 .62rem var(--font-mono,monospace);color:#888;margin-top:9px;letter-spacing:.06em;text-transform:uppercase}
        .case-gallery-mosaic{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(3,clamp(70px,9vw,130px));gap:8px;min-width:0}
        .case-gallery-mosaic-tile{position:relative;min-width:0;min-height:0;overflow:hidden;border:0;border-radius:8px;padding:0;background:#ddd;cursor:pointer}
        .case-gallery-mosaic-tile:nth-child(1){grid-column:1;grid-row:2 / span 2}
        .case-gallery-mosaic-tile:nth-child(2){grid-column:2;grid-row:2}
        .case-gallery-mosaic-tile:nth-child(3){grid-column:3;grid-row:1 / span 2}
        .case-gallery-mosaic-tile:nth-child(4){grid-column:4;grid-row:1}
        .case-gallery-mosaic-tile:nth-child(5){grid-column:2;grid-row:3}
        .case-gallery-mosaic-tile:nth-child(6){grid-column:3;grid-row:3}
        .case-gallery-mosaic-tile:nth-child(7){grid-column:4;grid-row:2 / span 2}
        .case-gallery-mosaic-tile:nth-child(n+8){display:none}
        .case-gallery-mosaic-tile img{display:block;width:100%;height:100%;object-fit:cover;filter:grayscale(1);transition:filter 1s ease,transform .75s cubic-bezier(.2,.8,.2,1)}
        .case-gallery-mosaic-tile.colorized img{filter:grayscale(0)}
        .case-gallery-mosaic-tile:hover img{transform:scale(1.055)}
        .case-gallery-mosaic-tile:after{content:"";position:absolute;inset:50% 0 0;background:linear-gradient(transparent,#0007);opacity:0;transition:opacity .25s}
        .case-gallery-mosaic-tile:hover:after{opacity:1}
        .case-gallery-mosaic-tile span{position:absolute;z-index:1;left:8px;right:8px;bottom:8px;color:white;font-size:.64rem;font-weight:700;opacity:0;transform:translateY(4px);transition:all .25s;text-align:left}
        .case-gallery-mosaic-tile:hover span{opacity:1;transform:translateY(0)}
        .case-gallery-grid-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin:0 0 22px;padding-top:clamp(30px,4vw,54px);border-top:1px solid #1717171b}
        .case-gallery-grid-head h3{font-size:clamp(2.5rem,6vw,5.4rem);line-height:.88;letter-spacing:-.075em;text-transform:uppercase;font-weight:850}
        .case-gallery-grid-head h3 em{font-family:var(--font-serif,Georgia,serif);font-weight:400;color:#a83232;text-transform:none}
        .case-gallery-grid-head p{color:#777;font:700 .65rem var(--font-mono,monospace);letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}
        .case-gallery-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(8px,1vw,16px)}
        .case-gallery-tile{display:block;position:relative;width:100%;aspect-ratio:1.12;padding:0;border:0;border-radius:2px;background:#e6e6e3;text-align:left;cursor:pointer;overflow:hidden}
        .case-gallery-tile:nth-child(4n+2){aspect-ratio:.85}.case-gallery-tile:nth-child(5n){aspect-ratio:.92}
        .case-gallery-tile img{display:block;width:100%;height:100%;object-fit:cover;filter:grayscale(1);transition:transform .8s cubic-bezier(.2,.8,.2,1),filter 1s ease}
        .case-gallery-tile.colorized img{filter:grayscale(0)}
        .case-gallery-tile:hover img{transform:scale(1.045)}
        .case-gallery-tile:after{content:"";position:absolute;inset:45% 0 0;background:linear-gradient(transparent,#0009);opacity:0;transition:opacity .3s}
        .case-gallery-tile:hover:after{opacity:1}
        .case-gallery-tile span{position:absolute;z-index:1;left:12px;right:12px;bottom:12px;color:#fff;font-size:.76rem;font-weight:700;opacity:0;transform:translateY(5px);transition:all .3s}
        .case-gallery-tile:hover span{opacity:1;transform:translateY(0)}
        .case-gallery-footer{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:42px;padding:20px 0;border-top:1px solid #17171720;color:#777;font:700 .65rem var(--font-mono,monospace);letter-spacing:.08em;text-transform:uppercase}
        .case-gallery-back{display:inline-flex;align-items:center;gap:7px;border:0;background:none;color:#a83232;font:inherit;cursor:pointer}
        @media(max-width:850px){.case-gallery-intro{grid-template-columns:1fr}.case-gallery-mosaic{grid-template-rows:repeat(3,clamp(75px,17vw,130px))}.case-gallery-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.case-gallery-title{font-size:clamp(3rem,10vw,5.5rem)}.case-gallery-subtitle{max-width:520px}.case-gallery-selected{max-width:560px}}
        @media(max-width:560px){.case-gallery-shell{padding:16px 14px 32px}.case-gallery-intro{padding:28px 0 34px;gap:24px}.case-gallery-mosaic{grid-template-rows:repeat(3,76px);gap:5px}.case-gallery-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.case-gallery-grid-head{align-items:start;flex-direction:column}.case-gallery-grid-head p{white-space:normal}.case-gallery-title{font-size:clamp(2.8rem,14vw,4.5rem)}.case-gallery-footer{align-items:flex-start;flex-direction:column}}
        @media(prefers-reduced-motion:reduce){.case-gallery-overlay *{transition-duration:.01ms!important;animation-duration:.01ms!important}}
      `}</style>
      <div className="case-gallery-shell" ref={galleryRef}>
        <nav className="case-gallery-nav">
          <div className="case-gallery-brand">NOIR<span style={{ color: '#a83232' }}>.</span></div>
          <div className="case-gallery-nav-right"><span className="case-gallery-kicker">Visual archive / {gallery.length} projects</span><button type="button" className="case-gallery-close" onClick={closeGallery} aria-label="Close project gallery"><X size={19} /></button></div>
        </nav>

        <header className="case-gallery-intro">
          <div className="case-gallery-intro-copy">
            <div className="case-gallery-kicker">Selected visual stories / {String(activeProject.number || '01').padStart(2, '0')}</div>
            <h1 className="case-gallery-title">Beyond Color.<br/><em>Pure Emotion.</em></h1>
            <p className="case-gallery-subtitle">Timeless visual stories that speak without words. Explore material, image-making, typography and identity through a living project archive.</p>
            <div className="case-gallery-selected" aria-live="polite">
              <small>Currently exploring · {activeProject.discipline || 'Graphic design'}</small>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description || activeProject.summary}</p>
              <div className="case-gallery-selected-meta">{activeProject.year} · {activeProject.client || 'Independent project'}</div>
            </div>
          </div>
          <div className="case-gallery-mosaic" aria-label="Project image preview mosaic">
            {gallery.slice(0, 7).map((item, index) => (
              <button type="button" key={item.id} className={`case-gallery-mosaic-tile ${revealed.has(index) ? 'colorized' : ''}`} onClick={() => chooseProject(item)} aria-label={`Explore ${item.title}`}>
                <img src={item.image} alt={item.title} loading={index > 3 ? 'lazy' : 'eager'} />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </header>

        <div className="case-gallery-grid-head"><h3>Visual stories<br/><em>in full color.</em></h3><p>{gallery.length} projects · grayscale to color</p></div>
        <div className="case-gallery-grid">
          {gallery.map((item, index) => (
            <motion.button type="button" className={`case-gallery-tile ${revealed.has(index) ? 'colorized' : ''}`} key={item.id}
              onClick={() => chooseProject(item)} aria-label={`View ${item.title} project details`}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }}
              transition={{ opacity: { duration: .5, delay: (index % 4) * .04 }, y: { duration: .5, delay: (index % 4) * .04 } }} whileHover={{ y: -4 }}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <span>{item.title} <MoveUpRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
            </motion.button>
          ))}
        </div>
        <footer className="case-gallery-footer"><span>Selected work / {activeProject.title}</span><button type="button" className="case-gallery-back" onClick={closeGallery}>Back to portfolio <ArrowLeft size={14}/></button></footer>
      </div>
    </motion.div>
  );
}
