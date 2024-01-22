import { useState } from "react";

import ShowInfo from "../../components/ShowInfo/ShowInfo";

import projectsDone from "../../data/projects_done.json";
import projectsManaged from "../../data/projects_managed.json";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("Developed");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <ShowInfo
        title={"Projects"}
        tabs={["Developed", "Managed"]}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        data={activeTab === "Developed" ? projectsDone : projectsManaged}
      />
    </>
  );
};

export default Projects;
