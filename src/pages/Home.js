import React from "react";
import "./Home.scss";
import ApartmentGrid from "../components/ApartmentGrid";
import Fetch from "../components/Fetch";

const Home = () => {
  return (
    <main>
      <div className="banner">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="ApartmentGrid_grid">
        <ApartmentGrid />
      </div>
    </main>
  );
};

export default Home;
