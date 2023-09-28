import { Link } from "react-scroll";
import "./Navmenu.css";

const Navmenu = () => {
  let menuItems = ["home", "about", "experience", "projects", "contact"];

  return (
    <nav className="main">
      <ul className="menu">
        {menuItems.map((item, i) => (
          <li className="item" key={i}>
            <Link activeClass="selected" smooth spy to={item}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navmenu;
