import { useState, useEffect } from "react";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import MyExpEdu from "../MyExpEdu/MyExpEdu";
import Projects from "../Projects/Projects";

import "./Navmenu.css";

const Navmenu = () => {
  let menuItems = ["home", "about", "experience", "projects", "contact"];
  const location = useLocation();

  const [isSelected, setIsSelected] = useState<number>(0);

  const handleToggle = (i: number) => {
    setIsSelected(i);
  };

  useEffect(() => {
    let active = location.pathname.split("/")[1];

    if (active === "") handleToggle(menuItems.indexOf("home"));
    else handleToggle(menuItems.indexOf(active));
  });

  return (
    <div className="nav">
      <ul className="menu">
        {menuItems.map((item, i) => (
          <NavLink to={i === 0 ? "/" : "/" + item} key={i}>
            <li
              className={isSelected === i ? "selected" : "item"}
              onClick={() => {
                handleToggle(i);
              }}
              id={item}
            >
              {item}
            </li>
          </NavLink>
        ))}
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<MyExpEdu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Navmenu;
