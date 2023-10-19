import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Contacts from './components/pages/Contacts/Contacts';
import Skills from './components/pages/Skills/Skills';
import Footer from './components/Footer/Footer'
import Project from './components/pages/Project/Project';

import ScrollToTop from './helpers/scrollToTop';

const App = () => {
  return (
    <div className='App'>

      <Router>
        <ScrollToTop/>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project/:id" element={<Project/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
