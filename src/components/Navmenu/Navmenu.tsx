import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

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
    </div>
  );
};

export default Navmenu;
