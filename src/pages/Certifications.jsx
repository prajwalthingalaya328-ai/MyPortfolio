import { Link } from 'react-router-dom';
import PageFrame from '../components/PageFrame';

const providers = [
  { name: 'IBM', title: 'SKILLSBUILD', count: '02 CERTIFICATES', path: '/certifications/ibm', className: 'provider-ibm', cursor: 'EXPLORE' },
  { name: 'WADHWANI', title: 'FOUNDATION', count: '01 CERTIFICATE', path: '/certifications/wadhwani', className: 'provider-wadhwani', cursor: 'EXPLORE' },
];

export default function Certifications() {
  return <PageFrame eyebrow="05 / verified learning" title="CERTIFICATIONS" intro="Knowledge • Skills • Growth"><div className="provider-gateway-grid">{providers.map((provider, index) => <Link key={provider.path} className={`provider-gateway ${provider.className} reveal`} data-cursor={provider.cursor} to={provider.path}><span className="gateway-number">0{index + 1}</span><div className="gateway-orbit" /><div className="gateway-copy"><span>{provider.name}</span><strong>{provider.title}</strong><small>{provider.count}</small></div><i>EXPLORE <b>→</b></i></Link>)}</div></PageFrame>;
}
