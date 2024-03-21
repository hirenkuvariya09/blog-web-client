import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider
import Signup from './assets/Signup';
import Login from './assets/signin';
import Home from './assets/Home';
import Navbar from './assets/Navbar';
import  Feedback  from './assets/Feedback';
import Blog from './assets/Blog';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}> {/* Wrap the entire application with SnackbarProvider */}
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path='/register' element={<Signup isLoggedIn={isLoggedIn} />} />
          <Route path='/' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/home' element={ <Home />}/>
          {/* <Route path='/Blog' element={isLoggedIn ? <Blog /> : <Navigate to="/" />} /> */}
          <Route path='/Blog' element={<Blog />} />
          <Route path='/feedback' element={  <Feedback />} />
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;