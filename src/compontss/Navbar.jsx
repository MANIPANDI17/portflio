import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h1>✈️ TravelEase</h1>
    <ul>
      <li><Link to="/">🏞️Home</Link></li>
      <li><Link to="/packages">🗺️Packages</Link></li>
      <li><Link to="/booking">📅Booking</Link></li>
      <li><Link to="/contact">☎️Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
