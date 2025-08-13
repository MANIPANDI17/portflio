import React from 'react';

function BikeList({ bikes, setSelectedBike }) {
  return (
    <div className="bike-list">
      <h2>Available Bikes</h2>
      <ul>
        {bikes.map((bike) => (
          <li key={bike.id} onClick={() => setSelectedBike(bike)}>
            {bike.name} ({bike.year})
          </li>
         
        ))}
      </ul>
    </div>
  );
}
export default BikeList;
