import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import GalleryCard from "./GalleryCard";
import { useLocation, useParams } from "react-router-dom";

function Gallery() {
  const location = useLocation();
  console.log("location:", location);

  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <GalleryCard
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  );
}

export default Gallery;
