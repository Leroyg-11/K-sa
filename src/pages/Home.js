import React from "react";
import "./Home.scss";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <main>
      <div className="banner">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="gallery_grid">
        <Gallery />
      </div>
    </main>
  );
};

export default Home;
