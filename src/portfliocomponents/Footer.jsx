// import React from 'react';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>© {new Date().getFullYear()} Manipandi. All rights reserved.</p>
//       <div className="social-icons">
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin />
//         </a>
//         <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//           <FaGithub />
//         </a>
//         <a href="mailto:yourmail@example.com">
//           <FaEnvelope />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-column">
          <h4>Address</h4>
          <p>120H/7 Arumgam North street Thirumangalam Madurai-625 706</p>
        </div>

        <div className="footer-column">
          <h4>Email</h4>
          <p>manipandichinnapandi@gmail.com</p>
          <p className="highlight">+91 7604990074</p>
        </div>

        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li><a href="#">FACEBOOK</a></li>
            <li><a href="#">TWITTER</a></li>
            <li><a href="#">LINKEDIN</a></li>
            <li><a href="#">INSTAGRAM</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Type Your Email" />
            <button type="submit"><FaArrowRight /></button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Portflio. Design with ❤️ by Manipandi.</p>
      </div>
    </footer>
  );
};

export default Footer;
