import React from "react";
import data from "../Logements.json";

const FetchDataLogements = () => {
  return (
    <div className="fetch">
      {data.map((data, i) => (
        <div className="title" key={i}>
          <img src={data.cover} alt="" />
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default FetchDataLogements;
