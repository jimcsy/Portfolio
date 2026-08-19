import './Experience.css';

const experience = [
  { period: '2024 - Present', role: 'Computer Science Student', detail: 'Building a strong foundation in software development, systems thinking, and user-focused problem solving.' },
  { period: 'Selected Work', role: 'Independent Developer', detail: 'Turning ideas into small, practical products while exploring modern frontend tools and development workflows.' },
];

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section experience-section">
      <div className="section-heading">
        <span className="section-number">03</span>
        <p className="section-kicker">The road so far</p>
        <h2>Experience</h2>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-item" key={item.role}>
            <span className="experience-period">{item.period}</span>
            <div><h3>{item.role}</h3><p>{item.detail}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}