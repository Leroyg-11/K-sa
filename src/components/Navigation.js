import React from "react";
import { NavLink } from "react-router-dom";
import "../Sass/components/Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <br />
        <br />
        <br />

        <NavLink to="/about">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
