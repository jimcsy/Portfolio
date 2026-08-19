import './Skills.css';

const skills = ['React', 'JavaScript', 'Python', 'Java', 'Flutter', 'Firebase', 'Git', 'UI Design'];

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section skills-section">
      <div className="section-heading">
        <span className="section-number">02</span>
        <p className="section-kicker">Tools of the trade</p>
        <h2>Skills</h2>
      </div>
      <div className="skill-list">
        {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}