import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HashRouter } from "react-router-dom";

import logo from "./assets/logo_nobg.png";
import Footer from "./components/Footer/Footer";
import Navmenu from "./components/Navmenu/Navmenu";

import "./App.css";

function App() {
  return (
    <>
      <div id="header" className="header">
        <img src={logo} className="header__logo" width={"120px"} alt="logo" />
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
      <div id="main">
        <HashRouter>
          <Navmenu />
        </HashRouter>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
