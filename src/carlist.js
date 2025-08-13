import React from 'react';

function CarList({ cars, setSelectedCar }) {
  return (
    <div className="car-list">
      <h2>Available Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id} onClick={() => setSelectedCar(car)}>
            {car.name} ({car.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
