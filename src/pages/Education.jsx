import { useState } from 'react';
import PageFrame from '../components/PageFrame';
import DetailPanel from '../components/DetailPanel';
import { portfolioData } from '../data/portfolioData';

export default function Education() { const [open, setOpen] = useState(false); return <PageFrame eyebrow="06 / foundation" title={<>THE <em>FOUNDATION.</em></>} intro="One ongoing academic chapter. Click the node to reveal it." ><div className="education-stage screen-stage"><button className="education-node" data-cursor="EXPLORE" onClick={() => setOpen(true)}><span>2025</span><i /><strong>2025 - PRESENT</strong><small>CLICK TO OPEN</small></button><div className="education-copy"><div className="eyebrow">Current study</div><h2>B.Tech CSE</h2><p>{portfolioData.university}</p><strong>{portfolioData.year}</strong></div><div className="education-line" /></div>{open && <DetailPanel title="Academic journey" eyebrow="Education detail" onClose={() => setOpen(false)}><p>{portfolioData.degree}</p><p>{portfolioData.university}</p><p className="detail-accent">{portfolioData.year} · {portfolioData.period}</p></DetailPanel>}</PageFrame>; }
