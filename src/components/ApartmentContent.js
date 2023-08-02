import React, { useState, useEffect } from "react";
import vector from "../asset/Vector.png";
import { Link, useLocation, useParams } from "react-router-dom";
import "../components/ApartmentContent.scss";

const ApartmentContent = (props) => {
  const [contentVisibility, setContentVisibility] = useState(
    new Array(2).fill(false)
  );

  const [imageRotation, setImageRotation] = useState(new Array(2).fill(0));

  const showContent = (index) => {
    const updatedVisibility = [...contentVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setContentVisibility(updatedVisibility);

    const updatedRotation = [...imageRotation];
    updatedRotation[index] = updatedVisibility[index] ? 180 : 0;
    setImageRotation(updatedRotation);
  };

  const fullName = props.flat.host.name;
  const [firstName, lastName] = fullName.split(" ");

  const pictures = props.flat.pictures;
  const [currentPic, setCurrentPic] = useState(0);
  const  

  return (
    <div className="apartment_content">
      <div className="apartment_img">
        {pictures.map((pic) => (
          <img key={pic} src={pic} alt="All Pictures Of Apartment"></img>
        ))}
      </div>

      <div className="apartment_info_container">
        <div className="info_general">
          <div className="apartment_title">
            <h1>{props.flat.title}</h1>
            <h2>{props.flat.location}</h2>
          </div>
          <div className="owner_info">
            <h3>
              <span>{firstName}</span>
              <span>{lastName}</span>
            </h3>
            <img src={props.flat.host.picture} alt="HostPic" />
          </div>
        </div>

        <div className="tag_stars">
          <div className="apartment_tag">
            {props.flat.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="apartment_owner_stars">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={props.flat.rating >= num ? "on" : null}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="apartment_text">
        <div className="article_description">
          <div className="title_arrow">
            <p className="p_description">Description</p>
            <img
              src={vector}
              alt="view more details"
              style={{ transform: `rotate(${imageRotation[0]}deg)` }}
              onClick={() => showContent(0)}
            />
          </div>
          {contentVisibility[0] && (
            <p className="paragraphe_description">{props.flat.description}</p>
          )}
        </div>
        <div className="article_description">
          <div className="title_arrow">
            <p className="p_description">Equipement</p>
            <img
              src={vector}
              alt="view more details"
              style={{ transform: `rotate(${imageRotation[1]}deg)` }}
              onClick={() => showContent(1)}
            />
          </div>
          {contentVisibility[1] && (
            <p className="paragraphe_description">
              {props.flat.equipments.map((eq) => (
                <li>{eq}</li>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentContent;
