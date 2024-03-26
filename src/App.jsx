// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider
// import Signup from './assets/Signup';
// import Login from './assets/signin';
// import Home from './assets/Home';
// import Navbar from './assets/Navbar';
// import  Feedback  from './assets/Feedback';
// import Blog from './assets/Blog';
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <BrowserRouter>
//       <SnackbarProvider maxSnack={3}> {/* Wrap the entire application with SnackbarProvider */}
//         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//         <Routes>
//           <Route path='/register' element={<Signup isLoggedIn={isLoggedIn} />} />
//           <Route path='/' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path='/home' element={ <Home />}/>
//           {/* <Route path='/Blog' element={isLoggedIn ? <Blog /> : <Navigate to="/" />} /> */}
//           <Route path='/Blog' element={<Blog />} />
//           <Route path='/feedback' element={  <Feedback />} />
//         </Routes>
//       </SnackbarProvider>
//     </BrowserRouter>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Signup from './assets/Signup';
import Login from './assets/signin';
import Home from './assets/Home';
import Navbar from './assets/Navbar';
import Feedback from './assets/Feedback';
import Blog from './assets/Blog';
import './App.css'; // Import the CSS file for global styles
import { Footer } from './assets/footer';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState('light'); // Add theme state

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <div className={`app ${theme}`}>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} toggleTheme={toggleTheme} />
          <Routes>
            <Route path='/register' element={<Signup isLoggedIn={isLoggedIn} />} />
            <Route path='/' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/feedback' element={<Feedback />} />
          </Routes>
        </div>
        <Footer/>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
