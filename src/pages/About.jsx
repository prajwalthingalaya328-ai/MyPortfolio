import { useState } from 'react';
import PageFrame from '../components/PageFrame';
import DetailPanel from '../components/DetailPanel';

const identityNodes = [
	{ key: 'who', label: 'WHO I AM', value: 'B.Tech CSE student', detail: 'B.Tech Computer Science and Engineering student focused on learning, building, and exploring technology.' },
	{ key: 'university', label: 'UNIVERSITY', value: 'REVA University', detail: 'REVA University\nB.Tech - Computer Science and Engineering\nBangalore' },
	{ key: 'currently', label: 'CURRENTLY', value: '2nd Year', detail: '2nd Year\n2025 - Present' },
	{ key: 'interests', label: 'INTERESTS', value: 'Web / AI / Build', detail: 'Web Development\nArtificial Intelligence\nProject Development\nProgramming' },
];

export default function About() {
	const [selected, setSelected] = useState(null);
	const active = identityNodes.find((node) => node.key === selected);

	return <PageFrame eyebrow="02 / digital identity" title={<>IDENTITY <em>INTERFACE</em></>} intro="A living profile system. Select a node to reveal the signal behind it.">
		<section className="identity-stage secondary-stage">
			<div className="identity-grid-lines" aria-hidden="true" />
			<div className="identity-orbit orbit-large" aria-hidden="true" /><div className="identity-orbit orbit-small" aria-hidden="true" />
			<div className="identity-core"><span>IDENTITY / 01</span><strong>PRAJWAL</strong><b>N THINGALAYA</b><small>BUILDING • LEARNING • EXPLORING</small></div>
			{identityNodes.map((node, index) => <button className={`identity-node identity-node-${index + 1}`} data-cursor="VIEW" key={node.key} onClick={() => setSelected(node.key)}><span>0{index + 1}</span><strong>{node.label}</strong><small>{node.value}</small></button>)}
			<div className="identity-status"><i /> DIGITAL IDENTITY SCANNER <b>ONLINE</b></div>
		</section>
		{active && <DetailPanel title={active.label} eyebrow="Identity signal" onClose={() => setSelected(null)}><p className="preserve-lines">{active.detail}</p></DetailPanel>}
	</PageFrame>;
}
