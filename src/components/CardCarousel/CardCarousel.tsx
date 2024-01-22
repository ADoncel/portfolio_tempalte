import React, { useState, useEffect, useCallback } from "react";

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
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(10);

  const handleNextCard = () => {
    let index = currentCard === p.data.length - 1 ? 0 : currentCard + 1;
    setCurrentCard(index);
  };

  const handlePrevCard = () => {
    let index = currentCard === 0 ? p.data.length - 1 : currentCard - 1;
    setCurrentCard(index);
  };

  const handleGotoCard = (i: number) => {
    if (currentCard === i) return;
    else setCurrentCard(i);
  };

  const handleItemsToShow = useCallback(
    (i: number) => {
      if (i + 5 >= p.data.length) {
        setStartIndex(p.data.length - 11);
        setEndIndex(p.data.length);
      } else if (i - 5 <= 0) {
        setStartIndex(0);
        setEndIndex(10);
      } else {
        setStartIndex(i - 5);
        setEndIndex(i + 5);
      }
    },
    [p.data.length, setStartIndex, setEndIndex],
  );

  useEffect(() => {
    // Update the component when startIndex or endIndex changes
    handleItemsToShow(currentCard);
  }, [currentCard, handleItemsToShow, startIndex, endIndex]);

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
              ),
            )}
          </ul>
        </div>
        <div className="experience-controls">
          <button onClick={handlePrevCard}>
            <IconContext.Provider
              value={{
                size: "4em",
              }}
            >
              <IoIosArrowDropleftCircle />
            </IconContext.Provider>
          </button>
          <div className="experience-dots">
            {p.data.map((_, index) => (
              <React.Fragment key={index}>
                <span
                  className={`experience-dot ${
                    index === currentCard ? "active" : ""
                  }`}
                  onClick={() => handleGotoCard(index)}
                  style={{
                    display:
                      index > endIndex
                        ? "none"
                        : index < startIndex
                        ? "none"
                        : "inline-block",
                  }}
                />
              </React.Fragment>
            ))}
          </div>
          <button onClick={handleNextCard}>
            <IconContext.Provider
              value={{
                size: "4em",
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
