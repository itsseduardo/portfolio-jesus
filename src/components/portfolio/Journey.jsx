import { experience } from '../../data/portfolio';

export default function Journey() {
  return <section className="journey section-shell" id="journey">
    <div className="section-intro journey-title"><span className="section-code mono">02 / JOURNEY LOG</span><h2>Built through<br /><em>change.</em></h2><p>De la curiosidad técnica y el soporte a construir productos completos con equipos internacionales.</p></div>
    <div className="journey-log">
      <div className="origin"><span className="mono">ORIGIN / COLOMBIA</span><p>Formación en desarrollo de software en la Universidad Tecnológica de Pereira. Una base que evolucionó desde la administración y el soporte hacia el desarrollo.</p></div>
      {experience.map((item, index) => <article key={item.company}><div className="journey-year"><strong>{item.date}</strong><span>{item.range}</span></div><div><span className="journey-step mono">LOG.0{experience.length - index}</span><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.summary}</p></div></article>)}
      <div className="current"><i /> <div><span className="mono">CURRENT POSITION</span><strong>Valencia, España</strong><p>Construyendo sistemas completos con una visión técnica y de producto.</p></div></div>
    </div>
  </section>;
}
