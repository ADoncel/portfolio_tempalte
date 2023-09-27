import Navmenu from "./components/Navmenu/Navmenu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div id="header"></div>
      <div id="main">
        <HashRouter>
          <Navmenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
