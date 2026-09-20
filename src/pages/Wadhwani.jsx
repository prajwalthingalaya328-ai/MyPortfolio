import { Link } from 'react-router-dom';
import PageFrame from '../components/PageFrame';

export default function Wadhwani() {
  return <PageFrame eyebrow="Wadhwani / 01 certificate" title="WADHWANI FOUNDATION" intro="MY CERTIFICATE"><Link className="cert-back-link" data-cursor="VIEW" to="/certifications">← BACK TO CERTIFICATIONS</Link><div className="provider-detail-heading"><span className="eyebrow">SOURCE DOCUMENT</span><h2>Certificate details to be added.</h2></div><article className="certificate-option certificate-option-unavailable"><div className="option-glyph option-glyph-wadhwani"><span>WF</span><strong>01</strong></div><div className="option-copy"><span className="certificate-issuer">Wadhwani Foundation</span><h2>Certificate details to be added.</h2><p>No Wadhwani certificate PDF is currently present in the project. No file or verification link has been invented.</p></div></article></PageFrame>;
}
