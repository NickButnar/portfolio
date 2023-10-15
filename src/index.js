import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

import './stylesheets/styles.css';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
