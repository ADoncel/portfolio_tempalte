import { useState, useEffect } from "react";
import { Route, Routes, HashRouter, NavLink } from "react-router-dom";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import MyExpEdu from "../MyExpEdu/MyExpEdu";
import Projects from "../Projects/Projects";

import "./Navmenu.css";

const Navmenu = () => {
  let menuItems = ["home", "about", "experience", "projects", "contact"];

  const [isSelected, setIsSelected] = useState<number>(0);

  const handleToggle = (i: number) => {
    setIsSelected(i);
  };

  useEffect(() => {
    let active = sessionStorage.getItem("option");
    menuItems.forEach((item) => {
      if (active === item) {
        handleToggle(menuItems.indexOf(item));
        return;
      }
    });
  });

  return (
    <div className="nav">
      <HashRouter>
        <ul className="menu">
          {menuItems.map((item, i) => (
            <NavLink to={i === 0 ? "/" : "/" + item} key={i}>
              <li
                className={isSelected === i ? "selected" : "item"}
                onClick={() => {
                  handleToggle(i);
                  sessionStorage.setItem("option", item);
                }}
                id={item}
              >
                {item}
              </li>
            </NavLink>
          ))}
        </ul>

        <Routes>
          <Route
            path="/"
            element={
              <Home setIsSelected={setIsSelected} menuItems={menuItems} />
            }
          />
          <Route
            path="/about"
            element={
              <About setIsSelected={setIsSelected} menuItems={menuItems} />
            }
          />
          <Route path="/experience" element={<MyExpEdu />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Navmenu;
