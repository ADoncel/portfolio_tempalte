import CardCarousel from "../Utils/CardCarousel";
import { useState } from "react";
import "./MyExpEdu.css";
import educationCards from "./education.json"
import experienceCards from "./experience.json"

const MyExpEdu = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs-content">
      <div></div>
      <div>
        <h1>
        {"My "}
          <span
            onClick={() => handleTabClick("Experience")}
            style={{
              textDecoration: activeTab === "Experience" ? "underline" : "none",
            }}
          >
             Experience
          </span>
          {" | "}
          <span
            onClick={() => handleTabClick("Education")}
            style={{
              textDecoration: activeTab === "Education" ? "underline" : "none",
            }}
          >
             Education
          </span>
        </h1>
        {activeTab === "Experience" ? <CardCarousel data={experienceCards}/> : <CardCarousel data={educationCards}/>}
      </div>
      <div></div>
    </div>
  );
};

export default MyExpEdu;
