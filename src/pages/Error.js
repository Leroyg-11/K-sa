import React from "react";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <br />
      <p>Retourner sur la page d’accueil</p>
    </div>
  );
};

export default Error;
