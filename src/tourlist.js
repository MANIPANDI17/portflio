// import React from 'react';

// function TourList({ tours, setSelectedTour }) {
//   return (
//     <div className="tour-list">
//       <h2>Available Tours</h2>
//       <ul>
//         {tours.map((tour) => (
//           <li key={tour.id} onClick={() => setSelectedTour(tour)}>
//             {tour.name} - {tour.location}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TourList;
import React from 'react'

const TourList = ({tours, setSelectedTour}) => {
  return (
    <div className="tour-list">
      <h2>Available Tour</h2>
      
      <ul>
         {tours.map((tour) => (
          <li key={tour.id} onClick={() => setSelectedTour(tour)}>
           {tour.name} - {tour.location}
          </li>
         ))}
      </ul>
      
    </div>
  )
}

export default TourList;
