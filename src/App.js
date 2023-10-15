import React from 'react';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default App;
