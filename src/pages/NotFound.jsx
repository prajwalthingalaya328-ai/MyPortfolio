import { Link } from 'react-router-dom';
export default function NotFound() { return <main className="page-frame"><div className="container"><div className="page-heading"><div className="eyebrow">404 / not found</div><h1>This page went <em>elsewhere.</em></h1><p>That route does not exist yet.</p><Link className="button button-solid" to="/">Back home ↗</Link></div></div></main>; }
