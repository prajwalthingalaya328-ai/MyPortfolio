import { useEffect, useRef, useState } from 'react';
import PageFrame from '../components/PageFrame';

const systems = [
  { key: 'c', name: 'C', level: 'GOOD', state: 'ACTIVE', support: ['PROGRAMMING', 'LOGIC', 'PROBLEM SOLVING'], theme: 'structured' },
  { key: 'python', name: 'PYTHON', level: 'BASIC', state: 'LEARNING', support: ['BUILDING', 'LEARNING', 'EXPERIMENTING'], theme: 'intelligent' },
  { key: 'web', name: 'WEB DEVELOPMENT', level: 'FOCUS', state: 'EXPLORING', support: ['INTERFACES', 'WEB PROJECTS'], theme: 'interface' },
  { key: 'ai', name: 'AI', level: 'EXPLORING', state: 'EXPLORING', support: ['ARTIFICIAL INTELLIGENCE'], theme: 'future' },
  { key: 'projects', name: 'PROJECT DEVELOPMENT', level: 'ACTIVE', state: 'BUILDING', support: ['PROJECT DEVELOPMENT'], theme: 'builder' },
  { key: 'programming', name: 'PROGRAMMING', level: 'CORE', state: 'ACTIVE', support: ['PROGRAMMING'], theme: 'logic' },
];

export default function Skills() {
  const [index, setIndex] = useState(0);
  const [activated, setActivated] = useState(false);
  const dragStart = useRef(null);
  const system = systems[index];
  const select = (nextIndex) => { setIndex((nextIndex + systems.length) % systems.length); setActivated(false); };

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % systems.length), 9000);
    return () => window.clearInterval(timer);
  }, []);

  const onPointerDown = (event) => { dragStart.current = event.clientX; event.currentTarget.setPointerCapture?.(event.pointerId); };
  const onPointerUp = (event) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    if (Math.abs(distance) > 45) select(index + (distance < 0 ? 1 : -1));
    dragStart.current = null;
  };

  return <PageFrame eyebrow="SKILLS / 02" title="" intro="">
    <section className={`skill-arcade theme-${system.theme} ${activated ? 'is-activated' : ''}`} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
      <div className="arcade-particles" aria-hidden="true" /><div className="arcade-grid" aria-hidden="true" /><div className="arcade-meta">SELECT A SYSTEM <span>06 / LAB</span></div>
      <div className="arcade-header"><span>SKILLS</span><small>TECH LAB / INTERACTIVE MODE</small></div>
      <div className="arcade-machine"><div className="machine-ring ring-back" /><div className="machine-ring ring-front" /><div className="machine-crosshair" /><div className="arcade-selected"><span className="selected-index">0{index + 1} / SYSTEM</span><h2>{system.name}</h2><strong>{system.level}</strong><div className="selected-support">{system.support.map((word) => <span key={word}>{word}</span>)}</div><button className="activate-control" onClick={(event) => { event.stopPropagation(); setActivated(!activated); }}>{activated ? 'DEACTIVATE' : 'ACTIVATE'} <b>↗</b></button></div></div>
      <div className="arcade-neighbors" aria-label="Select a skill">{systems.map((item, itemIndex) => <button key={item.key} className={`arcade-neighbor neighbor-${itemIndex} ${itemIndex === index ? 'is-current' : ''}`} onClick={(event) => { event.stopPropagation(); select(itemIndex); }}><span>0{itemIndex + 1}</span><strong>{item.name}</strong></button>)}</div>
      <aside className="arcade-readout"><span>SYSTEM READOUT</span><b>SYSTEM <em>{system.name}</em></b><b>LEVEL <em>{system.level}</em></b><b>STATE <em>{system.state}</em></b><i>DRAG / CLICK / EXPLORE</i></aside>
      <div className="arcade-controls"><button data-cursor="VIEW" onClick={() => select(index - 1)} aria-label="Previous skill">←</button><span>SWIPE TO SHIFT</span><button data-cursor="VIEW" onClick={() => select(index + 1)} aria-label="Next skill">→</button></div>
      {activated && <button className="arcade-back" onClick={() => setActivated(false)}>BACK TO SKILLS <b>×</b></button>}
    </section>
  </PageFrame>;
}
