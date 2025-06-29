import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Lazy load components for better performance
const Contact = lazy(() => import('./components/Contact'));
const Home = lazy(() => import('./components/Home'));
const DoorSpecifications = lazy(() => import('./components/DoorSpecifications'));
const Services = lazy(() => import('./components/Services'));
const Showcase = lazy(() => import('./components/Showcase'));

// Minimal loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
  </div>
);

function AppContent() {
  const location = useLocation();

  // Preload components when hovering over navigation links
  useEffect(() => {
    const preloadComponent = (component) => {
      component();
    };

    // Preload all components after initial load
    const timer = setTimeout(() => {
      preloadComponent(() => import('./components/Contact'));
      preloadComponent(() => import('./components/Services'));
      preloadComponent(() => import('./components/DoorSpecifications'));
      preloadComponent(() => import('./components/Showcase'));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/specs" element={<DoorSpecifications />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  useEffect(() => {
    // Preload the logo image
    const logoImage = new Image();
    logoImage.src = '/Zeiklogo3.png';
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 