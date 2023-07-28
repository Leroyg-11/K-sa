import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../asset/LOGO.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <img src={logo} alt="KasaLogoHeader" />
            </Link>
          </li>
          <div className="right_side">
            <li>
              <Link to="/home">Accueil</Link>
            </li>
            <li>
              <Link to="/about"> A propos</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
