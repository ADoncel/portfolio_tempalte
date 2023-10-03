import CardCarousel from "../Utils/CardCarousel";
import projectCards from "./projects.json";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div />
        <div>
          <h1>My Projects</h1>
          <CardCarousel data={projectCards} />
        </div>
        <div />
      </div>
    </>
  );
};

export default Projects;
