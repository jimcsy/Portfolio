import './Projects.css';

const projects = [
  { number: '01', title: 'Personal Portfolio', type: 'Web Experience', detail: 'A living portfolio for experiments, case studies, and a clearer view of the work behind the code.' },
  { number: '02', title: 'Campus Companion', type: 'Mobile Concept', detail: 'A student-first concept for keeping campus resources, schedules, and everyday tasks in one place.' },
  { number: '03', title: 'More In Progress', type: 'Coming Soon', detail: 'A growing collection of projects is on the way. Check back soon for the next build.' },
];

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="section-heading"><span className="section-number">04</span><p className="section-kicker">Things I have made</p><h2>Projects</h2></div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <span className="project-number">{project.number}</span>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.detail}</p>
            <a href="#contact" className="project-link">Discuss a project <span aria-hidden="true">&#8599;</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}