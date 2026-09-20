import { useEffect, useRef } from 'react';

export default function PageFrame({ eyebrow, title, intro, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 });
    ref.current?.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <main ref={ref} className="page-frame"><div className="container"><div className="page-heading reveal"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{intro && <p>{intro}</p>}</div>{children}</div></main>;
}
