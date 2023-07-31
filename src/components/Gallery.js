import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import GalleryCard from "./GalleryCard";

function Gallery() {
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
        <GalleryCard title={apartment.title} imageUrl={apartment.cover} />
      ))}
    </div>
  );
}

// const Gallery = () => {
//   return (
//     <div className="grid">
//       <h1></h1>
//       <GalleryCard />
//     </div>
//   );
// };

export default Gallery;
