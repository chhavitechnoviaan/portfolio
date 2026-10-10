import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Paperclip, LayoutGrid, Search, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const categories = ['ALL', 'BRANDING', 'PACKAGING', 'EDITORIAL', 'POSTER', 'UI/UX', 'TYPOGRAPHY'];

function FlipProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);
  const tags = project.tags || [];
  return (
    <motion.article
      className={`flip-project ${flipped ? 'is-flipped' : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.07 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFlipped(false); }}
      onClick={() => { if (window.matchMedia('(hover: none)').matches) setFlipped((value) => !value); }}
      tabIndex={0}
      aria-label={`${project.title}. Hover or tap to flip for details.`}
    >
      <div className="flip-project-inner">
        <div className="flip-project-face flip-project-front">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="flip-front-shade" />
          <div className="flip-card-top"><span>CASE {String(project.number || index + 1).padStart(2, '0')}</span><span>{project.year}</span></div>
          <div className="flip-front-title">
            <small>{project.discipline}</small>
            <h3>{project.title}</h3>
            <span className="flip-hint">HOVER TO TURN <ArrowUpRight size={14} /></span>
          </div>
        </div>
        <div className="flip-project-face flip-project-back">
          <div className="flip-back-top"><span>PROJECT NOTEBOOK</span><span>{project.year}</span></div>
          <p className="flip-back-kicker">CASE {String(project.number || index + 1).padStart(2, '0')} / {project.discipline || 'Graphic design'}</p>
          <h3>{project.title}</h3>
          <p className="flip-back-description">{project.description || project.summary}</p>
          <div className="flip-tags">{tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="flip-back-footer"><span>{project.client || 'Independent project'}</span><span>↗</span></div>
        </div>
      </div>
    </motion.article>
  );
}

export default function SelectedWork() {
  const projects = portfolioData.projects || [];
  const [activeIndex, setActiveIndex] = useState(Math.max(0, projects.findIndex((p) => p.id === 'p12')));
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const activeProject = projects[activeIndex] || projects[0];

  useEffect(() => {
    if (!isPlaying || projects.length < 2) return undefined;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % projects.length), 3600);
    return () => window.clearInterval(timer);
  }, [isPlaying, projects.length]);

  const filteredProjects = useMemo(() => projects.filter((project) => {
    const category = activeCategory.toLowerCase();
    const tags = (project.tags || []).join(' ').toLowerCase();
    const discipline = (project.discipline || '').toLowerCase();
    const matchesCategory = activeCategory === 'ALL' || discipline.includes(category) || tags.includes(category.replace('/', ' ')) || tags.includes(category);
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery = !q || [project.title, project.summary, project.discipline, project.client, ...(project.tags || [])].filter(Boolean).join(' ').toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  }), [projects, activeCategory, searchQuery]);

  const move = (direction) => setActiveIndex((index) => (index + direction + projects.length) % projects.length);
  const thumbs = [1, 2, 3].map((offset) => ({ project: projects[(activeIndex + offset) % projects.length], index: (activeIndex + offset) % projects.length }));

  return (
    <section id="work" className="selected-work-section">
      <style>{`
        .selected-work-section{position:relative;isolation:isolate;display:flow-root;min-height:100vh;padding:clamp(92px,10vw,140px) clamp(18px,4.2vw,68px) clamp(72px,8vw,120px);color:#171717;background-color:#f4efe5;background-image:linear-gradient(rgba(91,65,39,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(91,65,39,.035) 1px,transparent 1px),radial-gradient(ellipse at 10% 10%,rgba(168,116,61,.07),transparent 42%);background-size:5px 5px,5px 5px,auto;overflow:visible}
        .sw-shell{max-width:1500px;margin:0 auto}
        .sw-eyebrow{display:flex;align-items:center;gap:9px;color:#ae3030;font:700 .72rem var(--font-mono,monospace);letter-spacing:.16em;text-transform:uppercase}
        .sw-heading{font-size:clamp(2.5rem,7vw,7.2rem);font-weight:900;letter-spacing:-.075em;line-height:.88;text-transform:uppercase;margin:18px 0 0;max-width:1100px}
        .sw-heading em{font-family:var(--font-serif,Georgia,serif);font-weight:400;color:#b53232}
        .sw-hero{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(280px,.92fr);align-items:center;gap:clamp(22px,4vw,62px);margin-top:clamp(46px,7vw,88px)}
        .sw-featured{position:relative;min-height:clamp(390px,48vw,650px);border-radius:7px;overflow:hidden;background:#101013;box-shadow:0 24px 65px rgba(50,31,20,.2);isolation:isolate}
        .sw-featured>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .sw-featured:after{content:"";position:absolute;inset:25% 0 0;background:linear-gradient(transparent,rgba(0,0,0,.88));pointer-events:none;z-index:1}
        .sw-featured-top{position:absolute;z-index:2;top:18px;left:20px;right:20px;display:flex;justify-content:space-between;color:#fff;font:700 .68rem var(--font-mono,monospace);letter-spacing:.13em}
        .sw-featured-copy{position:absolute;z-index:2;left:clamp(18px,3vw,40px);right:24px;bottom:clamp(22px,3vw,42px);color:#fff}
        .sw-featured-copy h3{font-size:clamp(1.8rem,4vw,4.1rem);line-height:.94;letter-spacing:-.055em;text-transform:uppercase;margin:0 0 13px;max-width:800px}
        .sw-featured-copy p{max-width:580px;color:#ffffffd1;line-height:1.6;font-size:.94rem}
        .sw-featured-open{display:inline-flex;align-items:center;gap:10px;margin-top:20px;padding:12px 17px;border:1px solid #ffffff80;border-radius:999px;color:#fff;background:#ffffff16;font:700 .7rem var(--font-mono,monospace);letter-spacing:.06em;text-transform:uppercase;cursor:pointer;backdrop-filter:blur(12px);transition:background .25s,transform .25s}
        .sw-featured-open:hover{background:#d92626;transform:translateY(-2px)}
        .sw-right{min-width:0;align-self:end}
        .sw-right-caption{display:flex;justify-content:space-between;gap:12px;margin-bottom:17px;color:#ae3030;font:700 .68rem var(--font-mono,monospace);letter-spacing:.13em;text-transform:uppercase}
        .sw-thumb-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
        .sw-thumb{position:relative;aspect-ratio:.78;overflow:hidden;border-radius:5px;background:#161616;cursor:pointer;padding:0;border:0;text-align:left}
        .sw-thumb img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .65s,filter .4s}
        .sw-thumb:hover img{transform:scale(1.06);filter:contrast(1.06)}
        .sw-thumb span{position:absolute;inset:auto 9px 9px;color:white;font:700 .63rem var(--font-mono,monospace);text-shadow:0 1px 8px #000}
        .sw-controls{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:18px}
        .sw-counter{font:700 .72rem var(--font-mono,monospace);letter-spacing:.12em;color:#68584d}
        .sw-buttons{display:flex;gap:7px}
        .sw-control{width:42px;height:42px;border:1px solid #17171735;border-radius:50%;display:grid;place-items:center;background:#ffffffa8;color:#171717;cursor:pointer;transition:all .2s}
        .sw-control:hover{background:#ad3030;color:white;transform:translateY(-2px)}
        .sw-note{display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap;margin-top:clamp(30px,5vw,64px);padding-top:16px;border-top:1px solid #1717172a;color:#a83232;font:700 .68rem var(--font-mono,monospace);letter-spacing:.12em;text-transform:uppercase}
        .sw-note span:last-child{color:#796c60;font-weight:400;letter-spacing:.04em}
        .sw-archive{padding-top:clamp(76px,10vw,138px);position:relative;z-index:1}
        .sw-archive-head{display:flex;align-items:end;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-bottom:28px}
        .sw-archive-title{margin:12px 0 0;font-size:clamp(2rem,4.8vw,4.5rem);line-height:.92;letter-spacing:-.065em;text-transform:uppercase;font-weight:900}
        .sw-search{width:min(350px,100%);border:1px solid #17171735;border-radius:999px;background:#ffffffa6;padding:13px 17px;outline:none;color:#171717;font: .78rem var(--font-mono,monospace)}
        .sw-search:focus{border-color:#ad3030}
        .sw-filters{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
        .sw-filter{border:1px solid #17171728;border-radius:999px;background:#ffffff9c;color:#171717;padding:10px 15px;font:700 .67rem var(--font-mono,monospace);cursor:pointer;transition:all .2s}
        .sw-filter.active,.sw-filter:hover{background:#ad3030;color:white;border-color:#ad3030}
        .sw-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;perspective:1400px}
        .flip-project{min-width:0;height:clamp(420px,43vw,550px);outline:none;cursor:pointer;perspective:1400px}
        .flip-project-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .8s cubic-bezier(.2,.75,.15,1)}
        .flip-project:hover .flip-project-inner,.flip-project:focus-visible .flip-project-inner,.flip-project.is-flipped .flip-project-inner{transform:rotateY(180deg)}
        .flip-project-face{position:absolute;inset:0;overflow:hidden;border-radius:5px;backface-visibility:hidden;-webkit-backface-visibility:hidden}
        .flip-project-front{background:#121214;color:white;box-shadow:0 14px 34px #37261b1b}
        .flip-project-front>img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .8s,filter .6s}
        .flip-project:hover .flip-project-front>img{transform:scale(1.045)}
        .flip-front-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.34),transparent 25%,transparent 42%,rgba(0,0,0,.9))}
        .flip-card-top{position:absolute;top:17px;left:17px;right:17px;display:flex;justify-content:space-between;color:#fff;font:700 .66rem var(--font-mono,monospace);letter-spacing:.1em}
        .flip-front-title{position:absolute;bottom:0;left:0;right:0;padding:24px}
        .flip-front-title small{display:block;color:#ff5757;font:700 .65rem var(--font-mono,monospace);letter-spacing:.12em;text-transform:uppercase;margin-bottom:9px}
        .flip-front-title h3{font-size:clamp(1.3rem,2.2vw,2rem);line-height:1;letter-spacing:-.045em;text-transform:uppercase}
        .flip-hint{display:flex;align-items:center;gap:7px;margin-top:18px;color:#ffffffbd;font:700 .63rem var(--font-mono,monospace);letter-spacing:.1em}
        .flip-project-back{transform:rotateY(180deg);display:flex;flex-direction:column;padding:clamp(20px,2.4vw,32px);background:#131316;color:#f7f3ec;border:1px solid #d9262640;box-shadow:inset 0 0 60px #d926260b}
        .flip-back-top{display:flex;justify-content:space-between;gap:10px;padding-bottom:15px;border-bottom:1px dashed #ffffff30;color:#a9a9ad;font:700 .63rem var(--font-mono,monospace);letter-spacing:.1em}
        .flip-back-kicker{margin-top:28px;color:#ff4545;font:700 .65rem var(--font-mono,monospace);letter-spacing:.12em;text-transform:uppercase}
        .flip-project-back h3{margin-top:12px;font-size:clamp(1.5rem,2.7vw,2.5rem);line-height:.98;letter-spacing:-.05em;text-transform:uppercase}
        .flip-back-description{margin-top:16px;color:#ceced1;font-size:.9rem;line-height:1.65}
        .flip-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:22px}
        .flip-tags span{border:1px solid #ffffff28;border-radius:999px;padding:7px 9px;color:#eee;font-size:.68rem}
        .flip-back-footer{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:auto;padding-top:20px;border-top:1px solid #ffffff24;color:#ff4848;font:700 .66rem var(--font-mono,monospace);letter-spacing:.07em;text-transform:uppercase}
        .sw-empty{padding:40px 0;color:#6e6258}
        @media(max-width:980px){.sw-hero{grid-template-columns:1fr}.sw-featured{min-height:clamp(380px,72vw,620px)}.sw-right{margin-top:12px}.sw-thumb{aspect-ratio:1.05}.sw-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.flip-project{height:clamp(410px,64vw,520px)}}
        @media(max-width:600px){.selected-work-section{padding:95px 16px 75px}.sw-heading{font-size:clamp(2.6rem,13.5vw,4.5rem)}.sw-featured{min-height:440px}.sw-thumb-row{gap:7px}.sw-thumb{aspect-ratio:.8}.sw-right-caption{font-size:.59rem}.sw-grid{grid-template-columns:1fr;gap:16px}.flip-project{height:480px}.sw-archive-head{align-items:stretch}.sw-search{width:100%}.sw-note{flex-direction:column}.flip-project-back{padding:24px}}
        @media(hover:none){.flip-project .flip-project-inner{transition-duration:.65s}}
        @media(prefers-reduced-motion:reduce){.selected-work-section *{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
      `}</style>

      <div className="sw-shell">
        <div className="sw-eyebrow"><Paperclip size={14} /> Selected works / Graphic design archive</div>
        <h2 className="sw-heading">SELECTED <em>PORTFOLIO.</em></h2>
        {activeProject && (
          <div className="sw-hero">
            <div className="sw-featured">
              <AnimatePresence mode="wait">
                <motion.img key={activeProject.id} src={activeProject.image} alt={activeProject.title}
                  initial={{ opacity: 0, scale: 1.045, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: .985, x: -18 }} transition={{ duration: .75, ease: [.22, 1, .36, 1] }} />
              </AnimatePresence>
              <div className="sw-featured-top"><span>FEATURED PROJECT / {String(activeIndex + 1).padStart(2, '0')}</span><span>{activeProject.year}</span></div>
              <AnimatePresence mode="wait">
                <motion.div key={`${activeProject.id}-copy`} className="sw-featured-copy"
                  initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .4 }}>
                  <h3>{activeProject.title}</h3><p>{activeProject.summary}</p>
                  <button className="sw-featured-open" onClick={() => setSelectedProject(activeProject)}>Explore project <ArrowUpRight size={15} /></button>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="sw-right">
              <div className="sw-right-caption"><span>Our latest projects</span><span>01 — {String(projects.length).padStart(2, '0')}</span></div>
              <div className="sw-thumb-row">
                <AnimatePresence initial={false}>
                  {thumbs.map(({ project, index }, position) => (
                    <motion.button type="button" className="sw-thumb" key={project.id}
                      onClick={() => setActiveIndex(index)} aria-label={`Feature ${project.title}`}
                      initial={{ opacity: 0, x: 55, scale: .96 }} animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -45, scale: .94 }} transition={{ duration: .5, delay: position * .07 }}>
                      <img src={project.image} alt={project.title} loading="lazy" />
                      <span>{String(index + 1).padStart(2, '0')} / {project.title}</span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
              <div className="sw-controls">
                <span className="sw-counter">{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
                <div className="sw-buttons">
                  <button type="button" className="sw-control" onClick={() => move(-1)} aria-label="Previous project"><ChevronLeft size={19} /></button>
                  <button type="button" className="sw-control" onClick={() => setIsPlaying((v) => !v)} aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}>{isPlaying ? <Pause size={15} /> : <Play size={15} />}</button>
                  <button type="button" className="sw-control" onClick={() => move(1)} aria-label="Next project"><ChevronRight size={19} /></button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="sw-note"><span>Selected visual culture / Identity / Art direction</span><span>Automatic carousel · pauses with controls</span></div>

        <div className="sw-archive">
          <div className="sw-archive-head">
            <div><div className="sw-eyebrow"><LayoutGrid size={14} /> Complete archive</div><h3 className="sw-archive-title">ALL PROJECTS <span style={{ color: '#ae3030' }}>IN FRAME.</span></h3></div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 9 }}><Search size={16} color="#76695e" /><input className="sw-search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search projects, tags..." aria-label="Search projects" /></label>
          </div>
          <div className="sw-filters">{categories.map((category) => <button type="button" key={category} className={`sw-filter ${activeCategory === category ? 'active' : ''}`} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
          <div className="sw-grid">{filteredProjects.map((project, index) => <FlipProjectCard key={project.id} project={project} index={index} />)}</div>
          {filteredProjects.length === 0 && <p className="sw-empty">No projects match that search. Try another title or category.</p>}
        </div>
      </div>

      <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} projects={projects} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
    </section>
  );
}
