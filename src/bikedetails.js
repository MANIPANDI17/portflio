import React from 'react';

function BikeDetails({ bike }) {
  return (
    <div className="bike-details">
      <h2>Bike Details</h2>
      <h3>{bike.name} ({bike.year})</h3>
      <p>{bike.description}</p>
    </div>
  );
}

export default BikeDetails;
    