import { NavLink } from 'react-router-dom';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ReportIcon from '@mui/icons-material/Report';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
function Navbar() {
  return (
    <nav className="navbar">
<NavLink to="/" className="nav-link"><GridViewRoundedIcon style={{margin:"1rem"}}></GridViewRoundedIcon >    Dashboard</NavLink>
<NavLink to="/statistics" className="nav-link"><AutoGraphRoundedIcon style={{margin:"1rem"}}></AutoGraphRoundedIcon>  Statistics</NavLink>
<NavLink to="/balances" className="nav-link"><AssuredWorkloadIcon style={{margin:"1rem"}}></AssuredWorkloadIcon>    Balances</NavLink>
<NavLink to="/reports" className="nav-link"><ReportIcon style={{margin:"1rem"}}></ReportIcon>   Reports</NavLink>
<NavLink to="/schedule" className="nav-link"><CalendarMonthRoundedIcon style={{margin:"1rem"}}></CalendarMonthRoundedIcon>    Schedule</NavLink>

    </nav>
  );
}

export default Navbar;

// import { NavLink } from 'react-router-dom';

//  function Navbar() {
//   return (
//    <nav className='navbar'>
//     <NavLink to="/" className="nav-link" > Dashboard</NavLink>
//     <NavLink to="/statistics" className="nav-link"> statistics</NavLink>
//     <NavLink to="/Balance" className="nav-link">Balance</NavLink>
//     <NavLink to="/report" className="nav-link">Report</NavLink>
//     <NavLink to="/schedule" className="nav-link">Schedule</NavLink>
//    </nav>
//   )
// }
// export default Navbar;