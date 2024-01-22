import { useState } from "react";

import ShowInfo from "../../components/ShowInfo/ShowInfo";

import educationCards from "../../data/education.json";
import experienceCards from "../../data/experience.json";

const MyExpEdu = () => {
  const [activeTab, setActiveTab] = useState<string>("Experience");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <ShowInfo
        title={"My"}
        tabs={["Experience", "Education"]}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        data={activeTab === "Experience" ? experienceCards : educationCards}
      />
    </>
  );
};

export default MyExpEdu;
