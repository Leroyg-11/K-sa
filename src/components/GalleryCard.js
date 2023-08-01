import React from "react";
import "./GalleryCard.scss";
import { Link } from "react-router-dom";

function GalleryCard(props) {
  const state = {
    apartmentId: props.id,
  };
  return (
    <div className="card">
      <Link to="/flat/" state={state}>
        <img
          className="card_cover"
          src={props.imageUrl}
          alt="Image de bien Immo "
        />
        <div className="card_title">{props.title}</div>
      </Link>
    </div>
  );
}

export default GalleryCard;
