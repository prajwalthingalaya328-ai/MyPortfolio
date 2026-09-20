import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './compact.css';
import './home.css';
import './voice.css';
import './home-mobile.css';
import './spacing.css';
import './premium-home.css';
import './certifications.css';
import './secondary-pages.css';
import './about-skills.css';
import './command-constellation.css';
import './skill-arcade.css';
import './experience-pages.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
