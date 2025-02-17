import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import Shipping from '@/pages/Shipping';
import Warranty from '@/pages/Warranty';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};
<nav className="bg-white shadow-md p-4">
  <ul className="flex space-x-4 justify-center">
    <li><a href="/" className="text-gray-800 hover:text-blue-600">Home</a></li>
    <li><a href="/about-us" className="text-gray-800 hover:text-blue-600">About Us</a></li>
    <li><a href="/shipping" className="text-gray-800 hover:text-blue-600">Shipping</a></li>
    <li><a href="/warranty" className="text-gray-800 hover:text-blue-600">Warranty</a></li>
  </ul>
</nav>


export default App;
