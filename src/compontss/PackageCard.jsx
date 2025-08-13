import Booking from "../pagesss/Booking";

const PackageCard = ({ title, price, description }) => (
    <div className="package-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <span>${price}</span>
      <button onClick={Booking}>Book 🖥️ Now</button>
    </div>
  );
  
  export default PackageCard;
  
