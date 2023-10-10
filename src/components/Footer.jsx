import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/danuruiz7" target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-elias-ruiz-medina/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/danuruiz7/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
