export default function Hero() {
  return <header className="hero section-shell" id="top">
    <div className="hero-meta mono"><span>SOFTWARE DEVELOPER</span><span>VALENCIA · ES</span><span>LOCAL TIME / <Time /></span></div>
    <div className="hero-display"><p className="hero-index mono">SYS.001<br />BUILD / SHIP / EVOLVE</p><h1>I build systems<br />that move <em>business.</em></h1><div className="hero-orbit" aria-hidden="true"><span>JA</span></div></div>
    <div className="hero-bottom"><p>Transformo necesidades empresariales en productos digitales claros, escalables y listos para operar.</p><a className="button primary" href="#work">Explorar proyectos <span>↓</span></a></div>
    <div className="scroll-note mono">SCROLL TO ENTER THE SYSTEM</div>
  </header>;
}

function Time() {
  const time = new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid' }).format(new Date());
  return <>{time}</>;
}
