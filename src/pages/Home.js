import React from "react";
import bgBanner from "../asset/BackgroundBanner.png";
import "./Home.scss";
import Api from "../components/Api";

const Home = () => {
  return (
    <main>
      <div className="banner">
        {/* <img src={bgBanner} alt="Image falaise" /> */}
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="article container">
        <article>
          <Api />
        </article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
      </div>
    </main>
  );
};

export default Home;
