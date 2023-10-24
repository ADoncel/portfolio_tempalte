import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>
          Hello! I am{" "}
          <span>
            <u className="home__highlight">Antonio Doncel</u>
          </span>
        </h1>
        <h1>I am a Software Engineer Manager</h1>
        <NavLink to="/contact">
          <button>Get in touch</button>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
