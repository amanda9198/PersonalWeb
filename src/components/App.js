import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../css/style.css';
import NavBar from './NavBar';
import { useNavigation } from './NavScript';

function App() {
  const { isMenuOpen } = useNavigation();

  return (
    <div className={`app-container ${isMenuOpen ? 'blurred' : ''}`}>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;