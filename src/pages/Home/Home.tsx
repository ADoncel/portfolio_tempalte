import "./Home.css";
import { Link } from "react-router-dom";

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
        <Link to="/contact">
          <button>Get in touch</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
