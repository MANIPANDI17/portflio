import React from 'react';
import profile from '../img/manipandi.jpg'; // Replace with your image

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>Hello, I'm</p>
        <h1>Manipandi</h1>
        <h2>
          A <span className="green">Mern Stack Developer</span> From <span className="blue">Madurai</span>
        </h2>
        <p className="description">
         A passionate MERN Stack Developer crafting modern web applications.
        </p>
        <button  className="about-btn">About Me</button>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-behance"></i>
        </div>
      </div>
      <div className="hero-image">
        <img src={profile} alt="Manipandi" />
      </div>
    </section>
  );
}

export default HeroSection;
