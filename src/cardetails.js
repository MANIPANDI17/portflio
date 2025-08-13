import React from 'react';

function CarDetails({ car }) {
  return (
    <div className="car-details">
      <h2>Car Details</h2>
      <h3>{car.name} ({car.year})</h3>
      <p>{car.description}</p>
    </div>
  );
}

export default CarDetails;
