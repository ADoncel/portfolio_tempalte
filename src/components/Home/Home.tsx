import "./Home.css";
import { NavLink } from "react-router-dom";

interface Props {
  setIsSelected: React.Dispatch<React.SetStateAction<number>>;
  menuItems: string[];
}

const Home = (props: Props) => {
  return (
    <>
      <div className="home">
        <div></div>
        <div className="home__data">
          <h1>Hello! I am <span style={{"color": "#ff7e55"}}><u>Antonio Doncel</u></span></h1>
          <h1>I am a Software Engineer Manager</h1>
          <NavLink to="/contact">
            <button
              onClick={() => {
                props.setIsSelected(props.menuItems.indexOf("contact"));
                sessionStorage.setItem("option", "contact");
              }}
            >
              Get in touch
            </button>
          </NavLink>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
