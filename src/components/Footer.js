import React from "react";
import footerLogo from "../asset/FootertLOGO.png";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/home">
            <img src={footerLogo} alt="KasaLogoFooter" />
          </Link>
        </li>
        <li>© 2023 Kasa. All rights reserved</li>
      </ul>
    </footer>
  );
};

export default Footer;
