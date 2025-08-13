// import React from 'react';

// function TourDetails({ tour }) {
//   return (
//     <div className="tour-details">
//       <h2>Tour Details</h2>
//       <h3>{tour.name} ({tour.location})</h3>
//       <p>{tour.description}</p>
//     </div>
//   );
// }
// export default TourDetails;

import React from 'react'

function TourDetails ({tour})  {
  return (
    <div className='tour-details'>
      <h2>TourDetails</h2>
      <h3>{tour.name}({tour.location})</h3>
      <p>{tour.description}</p>

    </div>
  )
}

export default TourDetails;
