import "./Footer.css";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <a href="https://www.adoncca.nl/">
          <FaCopyright />
          <span style={{ marginBottom: 3 }}>Adoncca 2023</span>
        </a>
      </div>
      <div className="footer__right">
        <a
          href="https://github.com/adoncel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/adoncel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
