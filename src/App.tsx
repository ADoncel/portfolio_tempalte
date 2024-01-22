import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import logo from "./assets/logo_nobg.png";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navmenu from "./components/Navmenu/Navmenu";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import MyExpEdu from "./pages/MyExpEdu/MyExpEdu";
import Projects from "./pages/Projects/Projects";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="header" className="header">
          <Link to="/">
            <img
              src={logo}
              className="header__logo"
              width={"120px"}
              alt="logo"
            />
          </Link>
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
      </BrowserRouter>
    </>
  );
}

export default App;
