import CardCarousel from "../../components/CardCarousel/CardCarousel";

import "./ShowInfo.css";

interface InfoProps {
  title: string;
  tabs: [string, string];
  activeTab: string;
  handleTabClick: (tabName: string) => void;
  data: any;
}

const MyExpEdu = ({
  title,
  tabs,
  activeTab,
  handleTabClick,
  data,
}: InfoProps) => {
  return (
    <div className="tabs-content">
      <h1>
        <section>{title}</section>
        {tabs.map((tab) => {
          return (
            <span
              onClick={() => handleTabClick(tab)}
              style={{
                textDecoration: activeTab === tab ? "underline" : "none",
                color: activeTab === tab ? "#ff7e55" : "#FFF",
                textDecorationColor: activeTab === tab ? "#FFF" : "none",
              }}
            >
              {tab}
            </span>
          );
        })}
      </h1>
      <CardCarousel data={data} />
    </div>
  );
};

export default MyExpEdu;
