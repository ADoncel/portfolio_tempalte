import { useState } from "react";

// import "./Projects.css";
import ShowInfo from "../../components/ShowInfo/ShowInfo";

import projectsDone from "../../data/projects_done.json";
import projectsManaged from "../../data/projects_managed.json";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("Done");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <ShowInfo
        title={"Projects"}
        tabs={["Done", "Managed"]}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        data={activeTab === "Done" ? projectsDone : projectsManaged}
      />
    </>
  );
};

export default Projects;
