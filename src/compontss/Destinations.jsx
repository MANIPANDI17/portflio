import React from 'react';
import parisImg from '../img/paris.jpg';
import baliImg from '../img/bali.jpg';
import dubaiImg from '../img/travalse.1.img.jpg';

const Destinations = () => {
  const places = [
    { name: 'Paris', image: parisImg, },
    { name: 'Bali', image: baliImg, },
    { name: 'Dubai', image: dubaiImg, },
  ];

  return (
    <section className="destinations">
      <h3>Popular Destinations</h3>
      <div className="grid">
        {places.map((place, idx) => (
          <div key={idx} className="card">
            <img src={place.image} alt={place.name.A} className="place-image" />
            <h4>{place.name}</h4>
           
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
