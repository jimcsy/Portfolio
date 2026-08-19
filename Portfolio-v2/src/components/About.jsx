import './About.css';

export default function About() {
  return (
    <section id="about" className="portfolio-section about-section">
      <div className="section-heading">
        <span className="section-number">01</span>
        <p className="section-kicker">A little context</p>
        <h2>About me</h2>
      </div>
      <div className="about-copy">
        <p className="section-lead">I am Genesis Jim, a Computer Science student who enjoys making digital experiences feel thoughtful, useful, and human.</p>
        <p>I am curious about the space where clean interfaces meet dependable technology. I learn by building, refining, and staying open to better ways of solving a problem.</p>
      </div>
    </section>
  );
}