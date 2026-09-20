import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { portfolioData, routes } from '../data/portfolioData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="navbar"><div className="container nav-inner"><NavLink to="/" className="logo" onClick={close}><span>PNT</span><i>+</i></NavLink><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span /><span /></button><nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">{routes.map((route) => <NavLink key={route.path} to={route.path} end={route.path === '/'} onClick={close}>{route.label}</NavLink>)}<a className="nav-social" data-cursor="CONNECT" href={portfolioData.linkedin} target="_blank" rel="noreferrer" onClick={close}>LinkedIn <span>↗</span></a></nav></div></header>;
}
