// FlightDetails.jsx

import React from "react";

function FlightDetails({ flight }) {
  return (
    <div>
      <h2>Flight Details</h2>
      <p>Flight No: {flight.flightNo}</p>
      <p>Airline: {flight.airline}</p>
      <p>Source: {flight.source}</p>
      <p>Destination: {flight.destination}</p>
      <p>Departure Time: {flight.departureTime}</p>
      <p>Arrival Time: {flight.arrivalTime}</p>
    </div>
  );
}

export default FlightDetails;
