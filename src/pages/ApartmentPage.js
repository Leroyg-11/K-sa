import React, { useState, useEffect } from "react";
import "./ApartmentPage.scss";
import { useLocation, useParams } from "react-router-dom";
import ApartmentContent from "../components/ApartmentContent";

function ApartmentPage() {
  const location = useLocation();
  // console.log("location:", location);
  // console.log("our apartment id is:", location.state.apartmentId);
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(fetchApartmentData, []);

  function fetchApartmentData() {
    fetch("db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setSelectedFlat(flat);
      })
      .catch(console.error);
  }

  if (selectedFlat == null) return <div> ...Loading</div>;
  return (
    <div className="apartment_page">
      {/* selectedFlat: {JSON.stringify(selectedFlat)} */}
      <ApartmentContent flat={selectedFlat} />
    </div>
  );
}

export default ApartmentPage;
