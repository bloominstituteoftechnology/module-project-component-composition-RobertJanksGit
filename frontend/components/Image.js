import React from "react";

export default function Image({ imageURL, imageTitle }) {
  if (!imageURL) return <h3>Loading...</h3>;
  return (
    <div>
      <img
        src={imageURL}
        alt={imageTitle}
        style={{ width: "300px", height: "200px" }}
      />
    </div>
  );
}
