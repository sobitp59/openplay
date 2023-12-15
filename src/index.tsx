import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router  } from 'react-router-dom';
import ScollToTop from './helpers/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ScollToTop/>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
