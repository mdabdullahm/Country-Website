// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import BrowserRouter to enable routing in the entire application.
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    {/* 2. Wrap the main App component with BrowserRouter. */}
    {/* This makes routing features available to all child components. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);