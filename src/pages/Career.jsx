import { useState } from 'react';
import PageFrame from '../components/PageFrame';
import DetailPanel from '../components/DetailPanel';
import { portfolioData } from '../data/portfolioData';

export default function Career() { const [selected, setSelected] = useState(null); return <PageFrame eyebrow="07 / future direction" title={<>FUTURE <em>DIRECTION</em></>} intro="Career interests for continued learning, not current job titles."><section className="path-stage secondary-stage"><div className="path-route" aria-hidden="true" />{portfolioData.career.map((item, index) => <button className={`path-node path-node-${index + 1}`} data-cursor="EXPLORE" key={item.title} onClick={() => setSelected(item)}><span>0{index + 1}</span><strong>{item.title}</strong><small>CAREER INTEREST</small><i>↗</i></button>)}</section>{selected && <DetailPanel title={selected.title} eyebrow="Career interest" onClose={() => setSelected(null)}><p>{selected.description}</p></DetailPanel>}</PageFrame>; }
