import React from "react";
import "./GalleryCard.scss";

function GalleryCard(props) {
  return (
    <div className="card">
      <img
        className="card_cover"
        src={props.imageUrl}
        alt="Image de bien Immo "
      />
      <div className="card_title">{props.title}</div>
    </div>
  );
}

export default GalleryCard;
