import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const URL =
  "https://api.nasa.gov/planetary/apod?api_key=091mMSPpOCdTLvf7K27PlD1M9iHuYerOmFgHur0w";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    function fetchAPOD() {
      axios
        .get(URL)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
    fetchAPOD();
  }, []);

  if (!data) return <p>Fetching data...</p>;
  return (
    <section>
      <Card
        title={data.title}
        text={data.explanation}
        image={data.url}
        author={data.copyright}
        date={data.date}
      />
    </section>
  );
}
