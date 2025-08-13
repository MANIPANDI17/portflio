import React from 'react';
import { Link } from 'react-scroll';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">It's<span>Me</span></div>
      <ul className="nav-links">
      <li><Link to="about" smooth={true}>About</Link></li>
<li><Link to="skills" smooth={true}>Skill</Link></li>
<li><Link to="projects" smooth={true}>Project</Link></li>
<li><Link to="contact" smooth={true}>Contact</Link></li>
      </ul>
      {/* <button  className="download-btn"><a href='./img/'></a>Download CV</button> */}
            <a href=".D:\react js demo\mylogin\src\img\manpandi1 .resume.pdf" className="download-btn" download>Download CV</a>

    </nav>
  );
}

export default Navbar;
