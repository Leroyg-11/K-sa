import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

function ApartmentCard(props) {
  const state = {
    apartmentId: props.id,
  };

  return (
    <Link to="/flat" state={{ apartmentId: props.id }}>
      <div className="card">
        <img className="card_cover" src={props.cover} alt={props.description} />
        <div className="card_title">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentCard;
