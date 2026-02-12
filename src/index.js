import React from 'react';
import ReactDOM from 'react-dom/client'; // Use '/client' for React 18+
import App from './App';

// Create a root for your application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
