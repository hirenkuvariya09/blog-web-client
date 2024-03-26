

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './navbar.css'; // Import the CSS file

// function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear local storage
//     localStorage.removeItem('userData');
//     // Update isLoggedIn state to false
//     setIsLoggedIn(false);
//     // Redirect to the home page
//     navigate('/');
//   };

//   return (
//     <div className="container-xxl position-relative p-2">
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-2">
//         <a href="#" className="navbar-brand p-0" style={{ textDecoration: 'none' }}>
//           <h1 className="text-warning m-0"><i className="fa fa-utensils me-3"></i>IT Interview</h1>
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto"> 
//             <li className="nav-item">
//             <Link className="nav-link " to="/home">Home</Link>       
//                  </li>
//             <li className="nav-item">
//               <Link className="nav-link " to="/Blog">Blog</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link " to="/Feedback">Feedback</Link>
//             </li>
//             {isLoggedIn ? (
//               <li className="nav-item">
//                 <button className="nav-link " onClick={handleLogout}>Logout</button>
//               </li>
//             ) : (
//               <li className="nav-item">
//                 <Link className="nav-link " to="/">Login</Link>
//               </li>
//             )}
//           </ul>
//         </div>
//         </nav>
//       </div>
    
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar({ isLoggedIn, setIsLoggedIn, toggleTheme }) {
  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
  };

  return (
    <div className="container position-relative p-2">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-2">
        <a href="#" className="navbar-brand p-0" style={{ textDecoration: 'none' }}>
          <h1 className="text-warning m-0"><i className="fa fa-utensils me-3"></i>IT Interview</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">Feedback</Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="nav-link" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/">Login</Link>
              </li>
            )}
            <li className="nav-item">
              <button className="nav-link" onClick={toggleTheme}>Toggle Theme</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
