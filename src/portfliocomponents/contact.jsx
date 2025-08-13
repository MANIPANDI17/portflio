// import React from 'react';

// const Contact = () => (
//   <section id="contact" className="section">
//     <h2>Contact</h2>
//     <form>
//       <input type="text" placeholder="Name" required />
//       <input type="email" placeholder="Email" required />
//       <textarea placeholder="Your Message" rows="4" required></textarea>
//       <button type="submit">Send Message</button>
//     </form>
//   </section>
// );

// export default Contact;

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>+(91 7604990074)</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>manipandichinnapandi@gmail.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>120H/7 Arumgam North street Thirumangalam Madurai-625 706</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="Your Email Address" required />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Your Subject" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
