import { useState } from "react";

import CardCarousel from "../Utils/CardCarousel";

import "./Projects.css";

import projectCards from "./projects.json";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("Done");

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
              onClick={() => handleTabClick("Done")}
              style={{
                textDecoration: activeTab === "Done" ? "underline" : "none",
                color: activeTab === "Done" ? "#ff7e55" : "#FFF",
                textDecorationColor: activeTab === "Done" ? "#FFF" : "none",
              }}
            >
              Done
            </span>
            {" | "}
            <span
              onClick={() => handleTabClick("Managed")}
              style={{
                textDecoration: activeTab === "Managed" ? "underline" : "none",
                color: activeTab === "Managed" ? "#ff7e55" : "#FFF",
                textDecorationColor: activeTab === "Managed" ? "#FFF" : "none",
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
