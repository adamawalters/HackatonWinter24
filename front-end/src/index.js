import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Correct way to get the root DOM element
const rootElement = document.getElementById('root');
// Create a root
const root = ReactDOM.createRoot(rootElement); // Use createRoot to manage the root

// Use the root.render method
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
