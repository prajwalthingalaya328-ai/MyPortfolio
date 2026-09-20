import { useState } from 'react';
import PageFrame from '../components/PageFrame';
import DetailPanel from '../components/DetailPanel';

const items = [
	{ name: 'C', level: 'Good', type: 'Programming skill', detail: 'Good knowledge of C programming fundamentals, with more learning ahead.' },
	{ name: 'PYTHON', level: 'Basic', type: 'Programming skill', detail: 'Basic knowledge of Python programming fundamentals, with more learning ahead.' },
	{ name: 'WEB', level: 'Interest', type: 'Learning area', detail: "An active area of curiosity in Prajwal's computer science journey: Web Development." },
	{ name: 'AI', level: 'Interest', type: 'Learning area', detail: "An active area of curiosity in Prajwal's computer science journey: Artificial Intelligence." },
	{ name: 'PROJECTS', level: 'Interest', type: 'Learning area', detail: "An active area of curiosity in Prajwal's computer science journey: Project Development." },
	{ name: 'PROGRAMMING', level: 'Interest', type: 'Core interest', detail: "An active area of curiosity in Prajwal's computer science journey: Programming." },
];

export default function Skills() {
	const [selected, setSelected] = useState(null);
	return <PageFrame eyebrow="03 / skill network" title={<>SKILL <em>CONSTELLATION</em></>} intro="No invented percentages. Select a signal to inspect the current learning state.">
		<section className="network-stage secondary-stage"><div className="network-lines" aria-hidden="true" /><div className="network-core"><span>CORE</span><strong>PRAJWAL</strong><small>LEARNING NETWORK</small></div>{items.map((item, index) => <button className={`network-node network-node-${index + 1}`} data-cursor="EXPLORE" key={item.name} onClick={() => setSelected(item)}><span>{item.name}</span><small>{item.level}</small></button>)}</section>
		{selected && <DetailPanel title={selected.name} eyebrow={selected.type} onClose={() => setSelected(null)}><p>{selected.detail}</p></DetailPanel>}
	</PageFrame>;
}
