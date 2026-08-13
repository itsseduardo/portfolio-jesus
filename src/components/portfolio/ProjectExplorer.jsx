import { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCaseStudy from './ProjectCaseStudy';

export default function ProjectExplorer() {
  const [selected, setSelected] = useState(0);
  return <section className="projects section-shell" id="work">
    <div className="section-intro"><span className="section-code mono">01 / SELECTED WORK · {String(projects.length).padStart(2, '0')} CASES</span><h2>Systems built<br />for the <em>real world.</em></h2><p>Productos digitales que convierten procesos complejos en herramientas utilizables.</p></div>
    <div className="project-explorer">
      <div className="project-list" role="tablist" aria-label="Seleccionar proyecto">{projects.map((project, index) => <button key={project.id} role="tab" aria-selected={selected === index} onClick={() => setSelected(index)} style={{ '--accent': project.color }}><span>{String(index + 1).padStart(2, '0')}</span><b>{project.title}{project.featured && <em className="list-featured" aria-label="Proyecto destacado">★</em>}</b><small>{project.category}</small><i>↗</i></button>)}</div>
      <div role="tabpanel" key={projects[selected].id} className="case-wrap"><ProjectCaseStudy project={projects[selected]} displayIndex={selected} total={projects.length} /></div>
    </div>
    <div className="mobile-projects">{projects.map((project, index) => <ProjectCaseStudy project={project} displayIndex={index} total={projects.length} key={project.id} />)}</div>
  </section>;
}
