import { useState } from "react";
import "./Navmenu.css";

import { NavLink } from "react-router-dom";

const Navmenu = () => {
  let menuItems = ["home", "about", "experience", "projects", "contact"];

  const [isSelected, setIsSelected] = useState<number>(0);

  const handleToggle = (i:number) => {
    setIsSelected(i);
  };

  return (
    <div className="main">
      <ul className="menu">
        {menuItems.map((item, i) => (
          <NavLink to={i == 0 ? "/" : "/" + item} key={i}>
            <li
              className={
                isSelected === i ? "menu-selected" : "menu-item"
              }
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
    </div>
  );
};

export default Navmenu;
