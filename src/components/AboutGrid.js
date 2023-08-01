import React, { useState } from "react";
import vector from "../asset/Vector.png";
import "./AboutGrid.scss";

const AboutGrid = () => {
  const [contentVisibility, setContentVisibility] = useState(
    new Array(4).fill(false)
  );

  const [imageRotation, setImageRotation] = useState(new Array(4).fill(0));

  const showContent = (index) => {
    const updatedVisibility = [...contentVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setContentVisibility(updatedVisibility);

    const updatedRotation = [...imageRotation];
    updatedRotation[index] = updatedVisibility[index] ? 180 : 0;
    setImageRotation(updatedRotation);
  };

  return (
    <div className="about_grid">
      <article>
        <div className="title">
          <h2>Fiabilité</h2>
          <img
            src={vector}
            alt="view more details"
            style={{ transform: `rotate(${imageRotation[0]}deg)` }}
            onClick={() => showContent(0)}
          />
        </div>
        {contentVisibility[0] && (
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        )}
      </article>

      <article>
        <div className="title">
          <h2>Respect</h2>
          <img
            src={vector}
            alt="view more details"
            style={{ transform: `rotate(${imageRotation[1]}deg)` }}
            onClick={() => showContent(1)} // Associez cette image au premier paragraphe (index 0).
          />
        </div>
        {contentVisibility[1] && (
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        )}
      </article>

      <article>
        <div className="title">
          <h2>Service</h2>
          <img
            src={vector}
            alt="view more details"
            style={{ transform: `rotate(${imageRotation[2]}deg)` }}
            onClick={() => showContent(2)} // Associez cette image au premier paragraphe (index 0).
          />
        </div>
        {contentVisibility[2] && (
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        )}
      </article>

      <article>
        <div className="title">
          <h2>Securité</h2>
          <img
            src={vector}
            alt="view more details"
            style={{ transform: `rotate(${imageRotation[3]}deg)` }}
            onClick={() => showContent(3)} // Associez cette image au premier paragraphe (index 0).
          />
        </div>
        {contentVisibility[3] && (
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        )}
      </article>
    </div>
  );
};

export default AboutGrid;
