import React from "react";
import "./Home.scss";
import Api from "../components/FetchDataLogements";
import FetchDataLogements from "../components/FetchDataLogements";

const Home = () => {
  return (
    <main>
      <div className="banner">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="article_container">
        <article>
          <h2>
            <FetchDataLogements />
          </h2>
        </article>
        <article>
          <h2>Nom de la location</h2>
        </article>
        <article>
          <h2>Nom de la location</h2>
        </article>
        <article>
          <h2>Nom de la location</h2>
        </article>
        <article>
          <h2>Nom de la location</h2>
        </article>
        <article>
          <h2>Nom de la location</h2>
        </article>
      </div>
    </main>
  );
};

export default Home;
