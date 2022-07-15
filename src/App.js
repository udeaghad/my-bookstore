import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayBooks from './components/DisplayBooks';
import Categories from './components/categories';
import Navbar from './components/NavBar';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<DisplayBooks />} />
        <Route path="*" element={<Categories />} />
      </Routes>
    </Router>

  </>

);

export default App;
