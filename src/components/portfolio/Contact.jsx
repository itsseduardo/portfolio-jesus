import { useState } from 'react';
const email = 'jesus.dev8@gmail.com';
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => { try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { window.location.href = `mailto:${email}`; } };
  return <footer className="contact section-shell" id="contact"><span className="section-code mono">04 / OPEN CHANNEL</span><div className="contact-status mono"><i /> AVAILABLE FOR NEW PROJECTS</div><h2>Let’s build<br />what’s <em>next.</em></h2><p>¿Tienes una idea, un sistema que mejorar o un problema que necesita una solución digital?</p><div className="contact-actions"><a className="button primary" href={`mailto:${email}`}>Iniciar conversación ↗</a><button className="button secondary" onClick={copy}>{copied ? 'Correo copiado ✓' : 'Copiar correo'}</button></div><a className="email" href={`mailto:${email}`}>{email}</a><div className="footer-line"><span>© {new Date().getFullYear()} JESÚS E. AGUILAR</span><div><a href="https://www.linkedin.com/in/jesusaguilars/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/itsseduardo" target="_blank" rel="noreferrer">GitHub ↗</a></div><a href="#top">Back to top ↑</a></div></footer>;
}
