import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css';

// Remove loading state once app loads
const removeLoadingState = () => {
  document.body.classList.add('app-loaded');
};

// Create root and render with performance optimizations
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use requestIdleCallback for better performance if available
const renderApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // Remove loading state after render
  setTimeout(removeLoadingState, 100);
};

if ('requestIdleCallback' in window) {
  requestIdleCallback(renderApp);
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(renderApp, 0);
} 