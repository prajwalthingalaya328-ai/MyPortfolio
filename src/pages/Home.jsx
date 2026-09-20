import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

function OpeningMark() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  return <div className={`opening-mark ${visible ? 'is-visible' : 'is-hidden'}`} aria-hidden="true"><span>PNT</span><i /><strong>PRAJWAL N THINGALAYA</strong></div>;
}

const worlds = [
  { number: '01', label: 'CODE', detail: 'C / PYTHON', meta: 'PROGRAMMING', path: '/skills', cursor: 'OPEN', className: 'world-code' },
  { number: '02', label: 'AI', detail: 'INTELLIGENCE', meta: 'EXPLORATION', path: '/skills', cursor: 'EXPLORE', className: 'world-ai' },
  { number: '03', label: 'WEB', detail: 'INTERFACES', meta: 'INTERACTIVE EXPERIENCES', path: '/projects', cursor: 'VIEW', className: 'world-web' },
  { number: '04', label: 'BUILD', detail: 'IOT SYSTEMS', meta: 'PROJECT DEVELOPMENT', path: '/projects', cursor: 'OPEN', className: 'world-build' },
];

function WorldNode({ world }) {
  return <Link className={`world-node ${world.className}`} data-cursor={world.cursor} to={world.path}><span className="world-number">{world.number}</span><span className="world-point" /><span className="world-label">{world.label}</span><span className="world-detail">{world.detail}</span><small>{world.meta}</small><i className="world-arrow">↗</i></Link>;
}

function ParticleField() {
  return <div className="particle-field" aria-hidden="true">{Array.from({ length: 14 }, (_, index) => <i key={index} className={`particle particle-${index + 1}`} />)}<span className="micro micro-one">PNT-01 / BLR</span><span className="micro micro-two">SYSTEM ONLINE</span><span className="micro micro-three">BUILD MODE / 2026</span><span className="micro micro-four">REVA / 12.97°N</span></div>;
}

export default function Home() {
  const sceneRef = useRef(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return undefined;
    const move = (event) => setPointer({ x: (event.clientX / window.innerWidth - 0.5) * 2, y: (event.clientY / window.innerHeight - 0.5) * 2 });
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return <main className="home premium-home"><OpeningMark /><section ref={sceneRef} className="identity-universe" style={{ '--pointer-x': `${pointer.x * 14}px`, '--pointer-y': `${pointer.y * 10}px` }}><ParticleField /><div className="universe-header"><span>PERSONAL DIGITAL UNIVERSE</span><b>01 / 01</b></div><div className="core-stage"><div className="core-halo" /><div className="core-grid" /><div className="core-orbit core-orbit-a" /><div className="core-orbit core-orbit-b" /><div className="core-orbit core-orbit-c" /><div className="core-node node-top">AI MODULE</div><div className="core-node node-side">PNT / 01</div><div className="core-center"><span>CORE IDENTITY</span><strong>PNT</strong><i>ACTIVE</i></div><div className="identity-wordmark"><span>DIGITAL IDENTITY / 2026</span><h1>PRAJWAL</h1><h2>N THINGALAYA</h2><p>B.Tech CSE Student <em>•</em> REVA University • Bangalore</p><small>BUILDING <b>•</b> LEARNING <b>•</b> EXPLORING</small></div></div><div className="world-field">{worlds.map((world) => <WorldNode key={world.label} world={world} />)}</div><div className="identity-actions"><Link className="identity-control primary-control" data-cursor="VIEW" to="/projects"><span>EXPLORE MY WORK</span><b>→</b></Link><Link className="identity-control" data-cursor="VIEW" to="/about"><span>ENTER MY PROFILE</span><b>↗</b></Link></div><div className="identity-status"><span><i /> SYSTEM ACTIVE</span><small>CURRENTLY EXPLORING</small><b>AI • WEB • PROJECTS</b></div><div className="identity-socials"><a data-cursor="CODE" href={portfolioData.github} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a><a data-cursor="CONNECT" href={portfolioData.linkedin} target="_blank" rel="noreferrer">LINKEDIN <span>↗</span></a></div><div className="universe-footer"><span>LIGHT FIELD // PNT</span><span>INTERACT TO EXPLORE</span></div></section></main>;
}
