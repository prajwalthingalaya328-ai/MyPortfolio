import { useState } from 'react';
import PageFrame from '../components/PageFrame';
import DetailPanel from '../components/DetailPanel';
import { portfolioData } from '../data/portfolioData';

export default function Contact() { return <PageFrame eyebrow="09 / connection interface" title={<>CONNECT <em>WITH ME</em></>} intro="Choose a direct channel. External profiles open in a new tab." ><section className="connection-stage secondary-stage"><div className="connection-web" aria-hidden="true" /><div className="connection-core"><span>OPEN CHANNELS</span><strong>CONNECT</strong><small>PRAJWAL N THINGALAYA</small></div><a className="connection-node connection-linkedin" data-cursor="CONNECT" href={portfolioData.linkedin} target="_blank" rel="noreferrer"><span>01</span><strong>LINKEDIN</strong><small>PROFESSIONAL NETWORK</small><b>↗</b></a><a className="connection-node connection-github" data-cursor="CODE" href={portfolioData.github} target="_blank" rel="noreferrer"><span>02</span><strong>GITHUB</strong><small>DEVELOPER PROFILE</small><b>↗</b></a></section></PageFrame>; }
