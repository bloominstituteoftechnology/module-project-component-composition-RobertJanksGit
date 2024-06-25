import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";
import Explanation from "./Explanation";

function App() {
  const [picOfTheDayData, setPicOfTheDayData] = useState({});
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=091mMSPpOCdTLvf7K27PlD1M9iHuYerOmFgHur0w"
      )
      .then((res) => {
        setPicOfTheDayData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const imageURL = picOfTheDayData.hdurl;
  const imageTitle = picOfTheDayData.title;
  const explanation = picOfTheDayData.explanation;
  const buttonClick = () => {
    setIsClosed(!isClosed);
  };
  const display = isClosed;

  return (
    <>
      <Image imageURL={imageURL} imageTitle={imageTitle} />
      <button onClick={buttonClick}>
        {isClosed ? "Hide Explanation" : "Show Explanation"}
      </button>
      {display && <Explanation explanation={explanation} />}
    </>
  );
}

export default App;
