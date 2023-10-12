import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HashRouter, Route, Routes } from "react-router-dom";

import logo from "./assets/logo_nobg.png";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MyExpEdu from "./components/MyExpEdu/MyExpEdu";
import Navmenu from "./components/Navmenu/Navmenu";
import Projects from "./components/Projects/Projects";

import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <div id="header" className="header">
          <img src={logo} className="header__logo" width={"120px"} alt="logo" />
          <div className="navmenu">
            <Navmenu />
          </div>
          <div className="links">
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
        </div>
        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<MyExpEdu />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
