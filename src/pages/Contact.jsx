import { useState } from 'react';
import PageFrame from '../components/PageFrame';
import DetailPanel from '../components/DetailPanel';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
	const [open, setOpen] = useState(false);
	const [status, setStatus] = useState('');
	const submit = (event) => { event.preventDefault(); setStatus('Your message is ready to be connected to an email service.'); event.currentTarget.reset(); };
	return <PageFrame eyebrow="09 / connection interface" title={<>CONNECT <em>WITH ME</em></>} intro="Choose a direct channel. External profiles open in a new tab.">
		<section className="connection-stage secondary-stage"><div className="connection-web" aria-hidden="true" /><div className="connection-core"><span>OPEN CHANNELS</span><strong>CONNECT</strong><small>PRAJWAL N THINGALAYA</small></div><a className="connection-node connection-linkedin" data-cursor="CONNECT" href={portfolioData.linkedin} target="_blank" rel="noreferrer"><span>01</span><strong>LINKEDIN</strong><small>PROFESSIONAL NETWORK</small><b>↗</b></a><a className="connection-node connection-github" data-cursor="CODE" href={portfolioData.github} target="_blank" rel="noreferrer"><span>02</span><strong>GITHUB</strong><small>DEVELOPER PROFILE</small><b>↗</b></a><button className="connection-message" data-cursor="TALK" onClick={() => setOpen(true)}>CONTACT <b>MESSAGE →</b></button></section>
		{open && <DetailPanel title="Send a message" eyebrow="Contact detail" onClose={() => setOpen(false)}><form className="compact-form" onSubmit={submit}><label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Message<textarea name="message" required /></label><button className="button button-solid" type="submit">SEND MESSAGE ↗</button><p role="status">{status}</p></form></DetailPanel>}
	</PageFrame>;
}
