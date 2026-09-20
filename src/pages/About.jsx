import { useEffect, useState } from 'react';
import PageFrame from '../components/PageFrame';

const modules = [
	{ key: 'who', number: '01', label: 'WHO', title: <>PRAJWAL<br />N THINGALAYA</>, sub: 'B.TECH CSE · 2ND YEAR' },
	{ key: 'education', number: '02', label: 'EDUCATION', title: <>B.TECH<br />COMPUTER SCIENCE<br />&amp; ENGINEERING</>, sub: '2025 — PRESENT' },
	{ key: 'focus', number: '03', label: 'FOCUS', title: <>WEB<br />AI<br />PROJECTS<br />PROGRAMMING</>, sub: 'CURRENT SIGNAL' },
	{ key: 'university', number: '04', label: 'UNIVERSITY', title: <>REVA<br />UNIVERSITY</>, sub: 'BENGALURU' },
	{ key: 'now', number: '05', label: 'NOW', title: <>2ND YEAR<br />CSE</>, sub: 'LEARNING · BUILDING · EXPLORING' },
];

export default function About() {
	const [activeKey, setActiveKey] = useState(null);
	const [pointer, setPointer] = useState({ x: 0, y: 0 });
	const active = modules.find((module) => module.key === activeKey);

	useEffect(() => {
		const move = (event) => setPointer({ x: (event.clientX / window.innerWidth - .5) * 2, y: (event.clientY / window.innerHeight - .5) * 2 });
		window.addEventListener('pointermove', move, { passive: true });
		return () => window.removeEventListener('pointermove', move);
	}, []);

	return <PageFrame eyebrow="ABOUT / 01" title="" intro="">
		<section className={`command-center ${active ? 'is-focused' : ''}`} style={{ '--command-x': `${pointer.x * 10}px`, '--command-y': `${pointer.y * 7}px` }}>
			<div className="command-grid" aria-hidden="true" /><div className="command-scan" aria-hidden="true" /><div className="command-coordinates" aria-hidden="true">PNT.SYSTEM <span>•</span> BUILD_2026</div>
			<div className="command-core"><div className="core-crosshair" /><div className="core-rings" /><div className="core-state"><span>{active ? 'COMMAND / FOCUS' : 'CONTROL CENTER'}</span>{active ? <><strong>{active.title}</strong><small>{active.sub}</small><button onClick={() => setActiveKey(null)}>RETURN <b>×</b></button></> : <><strong>PRAJWAL</strong><em>PNT</em><small>DIGITAL REPRESENTATION</small></>}</div></div>
			<div className="command-modules">{modules.map((module, index) => <button key={module.key} className={`command-module command-module-${index + 1} ${activeKey === module.key ? 'is-active' : ''}`} data-cursor="VIEW" onClick={() => setActiveKey(module.key)}><span>{module.number}</span><strong>{module.label}</strong><i /></button>)}</div>
			<div className="system-status"><span>SYSTEM STATUS</span><b>PNT.SYSTEM <em>ONLINE</em></b><b>IDENTITY <em>ACTIVE</em></b><b>BUILD MODE <em>ACTIVE</em></b></div>
			<div className="command-footer">DIGITAL COMMAND CENTER <span>CONNECTED</span></div>
		</section>
	</PageFrame>;
}
