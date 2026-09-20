import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const frame = useRef(null);
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const move = (event) => { target.current = { x: event.clientX, y: event.clientY }; };
    const animate = () => {
      setPosition((current) => ({ x: current.x + (target.current.x - current.x) * .22, y: current.y + (target.current.y - current.y) * .22 }));
      frame.current = window.requestAnimationFrame(animate);
    };
    const over = (event) => {
      const target = event.target.closest('a, button, .project-card, .social-link');
      setLabel(target?.dataset.cursor || (target?.tagName === 'BUTTON' ? 'CLICK' : target ? 'VIEW' : ''));
      setVisible(Boolean(target));
    };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    frame.current = window.requestAnimationFrame(animate);
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over); window.cancelAnimationFrame(frame.current); };
  }, []);

  return <div className={`custom-cursor ${visible ? 'is-active' : ''}`} style={{ '--cursor-x': `${position.x}px`, '--cursor-y': `${position.y}px` }} aria-hidden="true"><span>{label}</span></div>;
}
