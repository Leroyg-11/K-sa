import React, { useState, useEffect } from "react";
import "./ApartmentPage.scss";
import vector from "../asset/Vector.png";

function ApartmentPage(props) {
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

  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }

  return (
    <div className="apartment_page">
      <div className="apartment_img">
        <img src={props.imageUrl} alt={setApartments.id} />
      </div>

      <div className="apartment_info_container">
        <div className="info_general">
          <div className="apartment_title">
            <h1>Crazy Loft...</h1>
            <h2>Paris - Ile de France</h2>
          </div>
          <div className="owner_info">
            <h3>
              Alexandre <br /> Dumas
            </h3>
            <img src="https://picsum.photos/65/65" alt="" />
          </div>
        </div>

        <div className="tag_stars">
          <div className="apartment_tag">
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris 10</p>
          </div>
          <div className="apartment_owner_stars">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
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
            <p className="paragraphe_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              perferendis eveniet nemo odit expedita molestias sapiente fugiat
              reprehenderit facilis maiores exercitationem laboriosam aliquam
              vero, ipsum ab eligendi cum id aspernatur aperiam perspiciatis. Et
              tempore alias odio nobis, praesentium nulla quas omnis cumque sunt
              voluptatem fugit eaque nisi. Ipsa, aliquam consectetur!
            </p>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              perferendis eveniet nemo odit expedita molestias sapiente fugiat
              reprehenderit facilis maiores exercitationem laboriosam aliquam
              vero, ipsum ab eligendi cum id aspernatur aperiam perspiciatis. Et
              tempore alias odio nobis, praesentium nulla quas omnis cumque sunt
              voluptatem fugit eaque nisi. Ipsa, aliquam consectetur!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApartmentPage;
