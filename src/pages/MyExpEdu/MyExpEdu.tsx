import { useState } from "react";

import CardCarousel from "../../components/CardCarousel/CardCarousel";

import "./MyExpEdu.css";

import educationCards from "../../data/education.json";
import experienceCards from "../../data/experience.json";

const MyExpEdu = () => {
  const [activeTab, setActiveTab] = useState<string>("Experience");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs-content">
      <div />
      <div>
        <h1>
          {"My "}
          <span
            onClick={() => handleTabClick("Experience")}
            style={{
              textDecoration: activeTab === "Experience" ? "underline" : "none",
              color: activeTab === "Experience" ? "#ff7e55" : "#FFF",
              textDecorationColor: activeTab === "Experience" ? "#FFF" : "none",
            }}
          >
            Experience
          </span>
          {" | "}
          <span
            onClick={() => handleTabClick("Education")}
            style={{
              textDecoration: activeTab === "Education" ? "underline" : "none",
              color: activeTab === "Education" ? "#ff7e55" : "#FFF",
              textDecorationColor: activeTab === "Education" ? "#FFF" : "none",
            }}
          >
            Education
          </span>
        </h1>
        {activeTab === "Experience" ? (
          <CardCarousel data={experienceCards} />
        ) : (
          <CardCarousel data={educationCards} />
        )}
      </div>
      <div />
    </div>
  );
};

export default MyExpEdu;
