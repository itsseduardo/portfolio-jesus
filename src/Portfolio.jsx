import Navigation from './components/portfolio/Navigation';
import Hero from './components/portfolio/Hero';
import ProjectExplorer from './components/portfolio/ProjectExplorer';
import Journey from './components/portfolio/Journey';
import StackExplorer from './components/portfolio/StackExplorer';
import Contact from './components/portfolio/Contact';

export default function Portfolio() {
  return (
    <div className="site">
      <a className="skip-link" href="#work">Saltar al contenido</a>
      <Navigation />
      <main>
        <Hero />
        <ProjectExplorer />
        <Journey />
        <StackExplorer />
      </main>
      <Contact />
    </div>
  );
}
