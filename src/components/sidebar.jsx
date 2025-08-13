// // src/components/Sidebar.jsx
// import { Home, BarChart, Settings } from 'lucide-react';

// function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-gray-800 text-white p-5">
//       <h2 className="text-2xl font-bold mb-10">Dashboard</h2>
//       <ul>
//         <li className="mb-4 flex items-center"><Home className="mr-2" /> Home</li>
//         <li className="mb-4 flex items-center"><BarChart className="mr-2" /> Analytics</li>
//         <li className="mb-4 flex items-center"><Settings className="mr-2" /> Settings</li>
//       </ul>
//     </div>
//   );
// }
// export default Sidebar;




import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>My Dashboard</h2>
      <NavLink to="/" className="nav-link">Overview</NavLink>
      <NavLink to="/reports" className="nav-link">Reports</NavLink>
      <NavLink to="/users" className="nav-link">Users</NavLink>
      <NavLink to="/settings" className="nav-link">Settings</NavLink>
      <NavLink to="/profile" className="nav-link">Profile</NavLink>
    </div>
  );
}

export default Sidebar;

