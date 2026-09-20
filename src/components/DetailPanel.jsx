import { useEffect } from 'react';

export default function DetailPanel({ title, eyebrow, children, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return <div className="detail-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><section className="detail-panel" role="dialog" aria-modal="true" aria-label={title}><button className="detail-close" onClick={onClose} aria-label="Close detail panel">×</button><div className="eyebrow">{eyebrow}</div><h2>{title}</h2><div className="detail-body">{children}</div></section></div>;
}
