import { useState } from 'react';
import { stackLayers } from '../../data/portfolio';

export default function StackExplorer() {
  const [active, setActive] = useState(0); const layer = stackLayers[active];
  return <section className="stack section-shell" id="stack"><div className="section-intro"><span className="section-code mono">03 / SYSTEM ARCHITECTURE</span><h2>Tools arranged<br />by <em>purpose.</em></h2><p>No es una colección de logos. Es la forma en que conecto cada capa para construir un producto.</p></div>
    <div className="stack-console"><div className="layer-list" role="tablist">{stackLayers.map((item, i) => <button key={item.id} onClick={() => setActive(i)} aria-selected={active === i}><span>{item.number}</span>{item.label}<i>{active === i ? 'ACTIVE' : 'LOAD'}</i></button>)}</div>
      <div className="layer-detail"><div className="signal mono">LAYER {layer.number} / ONLINE <i /></div><h3>{layer.label}</h3><div className="tool-cloud">{layer.tools.map((tool, i) => <span key={tool} style={{ '--i': i }}>{tool}</span>)}</div><div className="layer-notes"><div><b>WHAT I BUILD</b><p>{layer.builds}</p></div><div><b>USED IN</b><p>{layer.projects.join(' · ')}</p></div></div></div></div>
  </section>;
}
