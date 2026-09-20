import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    setEntering(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
    const timer = window.setTimeout(() => setEntering(false), 300);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const pageName = location.pathname === '/' ? 'home' : location.pathname.slice(1).split('/')[0];
  return <><div className={`page-wipe ${entering ? 'is-entering' : ''}`} aria-hidden="true"><span>PRAJWAL N THINGALAYA</span></div><div className={`page-content page-${pageName} ${entering ? 'is-entering' : ''}`}>{children}</div></>;
}
