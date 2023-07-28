import axios from "axios";
import React, { useEffect } from "react";
import apijson from "../Api.json";

const Api = () => {
  const res = apijson;
  console.log(res);

  return (
    <div className="api">
      <h1>test api</h1>
    </div>
  );
};

export default Api;
