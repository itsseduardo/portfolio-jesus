import { useEffect, useState } from 'react';

const links = [['work', 'Work'], ['journey', 'Journey'], ['stack', 'Stack'], ['contact', 'Contact']];

export default function Navigation() {
  const [active, setActive] = useState('work');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55%' });
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return <nav className="system-nav" aria-label="Navegación principal">
    <a className="os-mark" href="#top" aria-label="Inicio">EDUARDO<span>.OS</span></a>
    <button className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links">{open ? 'CLOSE' : 'MENU'}</button>
    <div className={`nav-links ${open ? 'is-open' : ''}`} id="nav-links">
      {links.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>{label}</a>)}
    </div>
    <span className="availability"><i /> Available</span>
  </nav>;
}
