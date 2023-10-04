import { useState } from "react";

import "./CardCarousel.css";

import { IconContext } from "react-icons";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

interface Props {
  data: {
    title: string;
    subtitle?: string;
    image?: string;
    date: string;
    content: string[];
  }[];
}

const CardCarousel = (p: Props) => {
  // const smallScreen = useMediaQuery("(max-width: 768px)"); npm install @material-ui/core import { useMediaQuery } from '@material-ui/core';
  const [currentCard, setCurrentCard] = useState<number>(0);

  const handleNextCard = () => {
    setCurrentCard(currentCard === p.data.length - 1 ? 0 : currentCard + 1);
  };

  const handlePrevCard = () => {
    setCurrentCard(currentCard === 0 ? p.data.length - 1 : currentCard - 1);
  };

  const handleGotoCard = (i: number) => {
    if (currentCard === i) return;
    else setCurrentCard(i);
  };

  return (
    <>
      <div className="experience-container">
        <div className="experience-card">
          <h2>{p.data[currentCard].title}</h2>
          <p>{p.data[currentCard].date}</p>
          <ul>
            {Object.values(p.data[currentCard].content).map(
              (paragraph, index) => (
                <li key={index}>{paragraph}</li>
              )
            )}
          </ul>
        </div>
        <div className="experience-controls">
          <button onClick={handlePrevCard}>
            <IconContext.Provider
              value={{
                color: "#000",
                size: "5em",
                style: { filter: "drop-shadow(0 0 0.3em #d4d4d4)" },
              }}
            >
              <IoIosArrowDropleftCircle />
            </IconContext.Provider>
          </button>
          <div className="experience-dots">
            {p.data.map((_, index) => (
              <span
                key={index}
                className={`experience-dot ${
                  index === currentCard ? "active" : ""
                }`}
                onClick={() => handleGotoCard(index)}
              />
            ))}
          </div>
          <button onClick={handleNextCard}>
            <IconContext.Provider
              value={{
                color: "#000",
                size: "5em",
                style: { filter: "drop-shadow(0 0 0.3em #d4d4d4)" },
              }}
            >
              <IoIosArrowDroprightCircle />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
