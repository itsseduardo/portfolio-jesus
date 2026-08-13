export default function ProjectCaseStudy({ project, displayIndex, total }) {
  const number = String(displayIndex + 1).padStart(2, '0');
  const count = String(total).padStart(2, '0');
  return <article className="case-study" style={{ '--accent': project.color }}>
    <div className="case-visual">
      <div className="visual-bar mono"><span>LIVE CASE / {project.slug}</span><span>● SYSTEM READY</span></div>
      <img src={project.image} alt={`Vista conceptual de ${project.title}`} />
      <div className="visual-number" aria-hidden="true">{number}</div>
    </div>
    <div className="case-content">
      <div className="case-heading"><div><span className="eyebrow">{project.category}</span><h3>{project.title}</h3></div>{project.featured && <span className="featured mono">Featured system</span>}</div>
      <p className="case-headline">{project.headline}</p><p className="case-description">{project.description}</p>
      <div className="case-grid"><div><b>01 / Desafío</b><p>{project.challenge}</p></div><div><b>02 / Contribución</b><p>{project.contribution}</p></div><div><b>03 / Resultado</b><p>{project.result}</p></div></div>
      {project.modules?.length > 0 && <div className="modules"><span className="mono">MODULES</span>{project.modules.map((item) => <i key={item}>{item}</i>)}</div>}
      {project.notice && <p className="project-notice"><span aria-hidden="true">ⓘ</span><strong>Uso responsable</strong>{project.notice}</p>}
      <div className="case-footer"><div className="tags">{project.stack.length ? project.stack.map((tech) => <span key={tech}>{tech}</span>) : <span>Stack por confirmar</span>}</div><div className="case-actions">{project.deployUrl && <a href={project.deployUrl} target="_blank" rel="noreferrer">Live site ↗</a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source ↗</a>}</div></div>
      <span className="case-count mono">CASE {number} / {count}</span>
    </div>
  </article>;
}
