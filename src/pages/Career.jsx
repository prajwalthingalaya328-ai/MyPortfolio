import { useState } from 'react';
import PageFrame from '../components/PageFrame';
import DetailPanel from '../components/DetailPanel';
import { portfolioData } from '../data/portfolioData';

export default function Career() { const [selected, setSelected] = useState(null); return <PageFrame eyebrow="07 / direction" title={<>WHERE I'M <em>HEADING.</em></>} intro="Career interests for continued learning, not professional experience." ><div className="career-stage screen-stage">{portfolioData.career.map((item, index) => <button className="career-node" data-cursor="EXPLORE" key={item.title} onClick={() => setSelected(item)}><span>0{index + 1}</span><strong>{item.title}</strong><i>↗</i></button>)}</div>{selected && <DetailPanel title={selected.title} eyebrow="Career interest" onClose={() => setSelected(null)}><p>{selected.description}</p><p className="detail-muted">An area Prajwal is exploring toward the future.</p></DetailPanel>}</PageFrame>; }
