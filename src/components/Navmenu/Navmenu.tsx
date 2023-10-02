import { useState, useEffect } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { Route, Routes, HashRouter } from "react-router-dom";
import "./Navmenu.css";

import { NavLink } from "react-router-dom";

const Navmenu = () => {
  let menuItems = ["home", "about", "experience", "projects", "contact"];

  const [isSelected, setIsSelected] = useState<number>(0);

  const handleToggle = (i:number) => {
    setIsSelected(i);
  };

  useEffect(() => {
    let active = sessionStorage.getItem("option")
    menuItems.forEach(item => {
      if(active === item){
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
          <NavLink to={i == 0 ? "/" : "/" + item} key={i}>
            <li
              className={
                isSelected === i ? "selected" : "item"
              }
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
            <Route path="/" element={<Home setIsSelected={setIsSelected} menuItems={menuItems}/>} />
            <Route path="/about" element={<About setIsSelected={setIsSelected} menuItems={menuItems}/>} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
    </div>
  );
};

export default Navmenu;