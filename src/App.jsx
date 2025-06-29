import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Lazy load components for better performance
const Contact = lazy(() => import('./components/Contact'));
const Home = lazy(() => import('./components/Home'));
const DoorSpecifications = lazy(() => import('./components/DoorSpecifications'));
const Services = lazy(() => import('./components/Services'));
const Showcase = lazy(() => import('./components/Showcase'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
  </div>
);

function AppContent() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show transition overlay
    setIsTransitioning(true);
    
    // Hide transition overlay after a short delay
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-gray-900 z-[9999] transition-opacity duration-150"></div>
      )}
      
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/specs" element={<DoorSpecifications />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </Suspense>
    </>
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