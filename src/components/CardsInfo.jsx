import React, { useEffect, useState, useRef } from "react";
import "../styles/CardsInfo.css";
import { getData } from "../utils/AppService.js";

function CardsInfo() {
  const [myData, setMyData] = useState([]);
  const [myIndex, setMyIndex] = useState(0);
  const backButton = useRef(null);
  const forwardButton = useRef(null);

  useEffect(() => {
    backButton.current.removeAttribute("disabled", false);
    forwardButton.current.removeAttribute("disabled", false);
    if (myIndex == 0) {
      backButton.current.setAttribute("disabled", true);
    } else if (myIndex >= myData.length - 5) {
      forwardButton.current.setAttribute("disabled", true);
    }
    getData().then((result) => setMyData(result));
  }, [myIndex]);

  const moveBack = (e) => {
    setMyIndex(myIndex - 1);
  };

  const moveForward = () => {
    setMyIndex(myIndex + 1);
  };
  console.log(myData);
  return (
    <>
      <div className="info-container">
        {myData.slice(myIndex, myIndex + 5).map((element) => {
          return (
            <div className="person-card" key={element.id}>
              <div className="info id">{element.id}</div>
              <div className="info name">{element.name}</div>
              <div className="info mail">{element.email}</div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button ref={backButton} onClick={moveBack} className="btn back">
          ←
        </button>
        <button
          ref={forwardButton}
          onClick={moveForward}
          className="btn forward"
        >
          →
        </button>
      </div>
    </>
  );
}

export default CardsInfo;
