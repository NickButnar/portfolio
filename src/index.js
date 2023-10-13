import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import './stylesheets/styles.css';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
      <Navbar />
  </React.StrictMode>
);

reportWebVitals();
