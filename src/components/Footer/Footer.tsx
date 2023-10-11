import "./Footer.css";

import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.adoncca.nl/">
        <FaCopyright />
        <span style={{ marginBottom: 3 }}>Adoncca 2023</span>
      </a>
    </footer>
  );
};

export default Footer;
