import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import '../pages/Details.css';

function TripDetails() {
  const { tripId } = useParams(); // Hämta ID från URL:en
  const navigate = useNavigate();
  const trips  = useSelector((state) => state.trips.trips);
  
  const trip = trips.find((trip) => trip.id === tripId);

  if (!trip) {
    return <p>Resa med ID {tripId} hittades inte.</p>;
  }

  return (
    <div className="detailsInfo">
      <button onClick={() => navigate("/")}>Till startsidan</button>
      <h2>Detaljer om resan: {trip.name}</h2>
      {trip.firstDate === trip.secondDate ? (
        <p>Datum: {trip.firstDate}</p>
      ) : (
        <>
          <p>Från: {trip.firstDate}</p>
          <p>Till: {trip.secondDate}</p>
        </>
      )}
      <p><strong>Plats:</strong> {trip.location}</p>
    </div>
  );
}

export default TripDetails;