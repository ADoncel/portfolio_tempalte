import { useState } from "react";

import CardCarousel from "../Utils/CardCarousel";

import "./Projects.css";

import projectCards from "./projects.json";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("Experience");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="projects">
        <div />
        <div>
          <h1>
            {"Projects "}
            <span
              onClick={() => handleTabClick("Experience")}
              style={{
                textDecoration:
                  activeTab === "Experience" ? "underline" : "none",
              }}
            >
              Done
            </span>
            {" | "}
            <span
              onClick={() => handleTabClick("Education")}
              style={{
                textDecoration:
                  activeTab === "Education" ? "underline" : "none",
              }}
            >
              Managed
            </span>
          </h1>
          {activeTab === "Experience" ? (
            <CardCarousel data={projectCards} />
          ) : (
            <CardCarousel data={projectCards} />
          )}
        </div>
        <div />
      </div>
    </>
  );
};

export default Projects;
