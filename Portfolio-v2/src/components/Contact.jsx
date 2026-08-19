import './Contact.css';

export default function Contact() {
  return (
    <footer id="contact" className="contact-footer">
      <div><p className="section-kicker">05 / Let&apos;s connect</p><h2>Have an idea<br />worth building?</h2></div>
      <div className="contact-details">
        <p>Whether it is a collaboration, an opportunity, or just a good conversation, my inbox is open.</p>
        <a href="mailto:hello@genesisjim.dev" className="email-link">hello@genesisjim.dev <span aria-hidden="true">&#8599;</span></a>
        <p className="footer-note">Batangas City, Philippines / 2026</p>
      </div>
    </footer>
  );
}