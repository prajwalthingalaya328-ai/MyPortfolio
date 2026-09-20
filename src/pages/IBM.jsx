import { Link } from 'react-router-dom';
import PageFrame from '../components/PageFrame';
import { portfolioData } from '../data/portfolioData';

function CertificateOption({ certificate, index }) {
  return <article className="certificate-option reveal"><div className="option-glyph"><span>IBM</span><strong>SB</strong></div><div className="option-copy"><span className="certificate-issuer">IBM SkillsBuild</span><h2>{certificate.title}</h2><p>{certificate.description}</p></div><a className="certificate-link" data-cursor="OPEN" href={certificate.file} target="_blank" rel="noopener noreferrer">VIEW CERTIFICATE <span>↗</span></a><small className="option-index">0{index + 1}</small></article>;
}

export default function IBM() {
  return <PageFrame eyebrow="IBM / 02 certificates" title="IBM SKILLSBUILD" intro="MY IBM CERTIFICATES"><Link className="cert-back-link" data-cursor="VIEW" to="/certifications">← BACK TO CERTIFICATIONS</Link><div className="provider-detail-heading"><span className="eyebrow">SOURCE DOCUMENTS</span><h2>Two Python learning certificates</h2></div><div className="certificate-options">{portfolioData.certificateFiles.map((certificate, index) => <CertificateOption key={certificate.file} certificate={certificate} index={index} />)}</div></PageFrame>;
}
