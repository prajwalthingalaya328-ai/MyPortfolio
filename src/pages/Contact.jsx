import { useState } from 'react';
import PageFrame from '../components/PageFrame';

const contactItems = [
	{ number: '01', label: 'PHONE', value: '+91 6364642835', href: 'tel:+916364643835', action: 'CALL', icon: 'TEL', copyValue: '+916364643835' },
	{ number: '02', label: 'EMAIL', value: 'prajwalthingalaya@gmail.com', href: 'mailto:prajwalthingalaya@gmail.com', action: 'SEND EMAIL', icon: '@', copyValue: 'prajwalthingalaya@gmail.com' },
	{ number: '03', label: 'GITHUB', value: '@prajwalthingalaya328-ai', href: 'https://github.com/prajwalthingalaya328-ai', action: 'VIEW GITHUB', icon: 'GH', external: true },
	{ number: '04', label: 'LINKEDIN', value: 'Prajwal N Thingalaya', href: 'https://www.linkedin.com/in/prajwal-n-thingalaya/', action: 'VIEW LINKEDIN', icon: 'in', external: true },
];

function ContactIcon({ children }) {
	return <span className="contact-directory-icon" aria-hidden="true">{children}</span>;
}

export default function Contact() {
	const [copied, setCopied] = useState('');
	const copy = async (item) => {
		try {
			await navigator.clipboard.writeText(item.copyValue);
			setCopied(item.label);
			window.setTimeout(() => setCopied(''), 1600);
		} catch {
			setCopied('');
		}
	};

	return <PageFrame eyebrow="" title="" intro="">
		<section className="contact-directory">
			<header className="contact-directory-header reveal">
				<div className="contact-directory-kicker">CONTACT DIRECTORY / OPEN CHANNELS</div>
				<h1>LET&apos;S<br /><span>CONNECT.</span></h1>
				<p>Have a project idea, collaboration opportunity, or simply want to connect? You can reach me through any of the channels below.</p>
				<div className="contact-directory-status"><span>AVAILABLE FOR</span><strong>PROJECTS <i>•</i> COLLABORATION <i>•</i> CONNECTIONS</strong></div>
			</header>

			<div className="contact-directory-list" aria-label="Contact directory">
				{contactItems.map((item) => <div className="contact-directory-row reveal" key={item.label}>
					<span className="contact-directory-number">{item.number}</span>
					<ContactIcon>{item.icon}</ContactIcon>
					<a className="contact-directory-main" href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
						<span>{item.label}</span><strong>{item.value}</strong>
					</a>
					<div className="contact-directory-action"><a href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{item.action} <span>→</span></a>{item.copyValue && <button type="button" onClick={() => copy(item)}>{copied === item.label ? 'COPIED' : 'COPY'}</button>}</div>
				</div>)}
			</div>

			<footer className="contact-directory-footer reveal"><p>Built with curiosity, code and continuous learning.</p><strong>PRAJWAL N THINGALAYA</strong><span>B.Tech CSE <i>•</i> REVA University</span></footer>
		</section>
	</PageFrame>;
}
