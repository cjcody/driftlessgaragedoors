import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import Home component directly for eager loading (critical path)
import Home from './components/Home';

// Lazy load non-critical components for better performance
const Contact = lazy(() => import('./components/Contact'));
const Services = lazy(() => import('./components/Services'));
const Showcase = lazy(() => import('./components/Showcase'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const NotFound = lazy(() => import('./components/NotFound'));

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/contact" 
          element={
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          } 
        />
        <Route 
          path="/services" 
          element={
            <Suspense fallback={null}>
              <Services />
            </Suspense>
          } 
        />
        <Route 
          path="/showcase" 
          element={
            <Suspense fallback={null}>
              <Showcase />
            </Suspense>
          } 
        />
        <Route 
          path="/privacy-policy" 
          element={
            <Suspense fallback={null}>
              <PrivacyPolicy />
            </Suspense>
          } 
        />
        <Route 
          path="*" 
          element={
            <Suspense fallback={null}>
              <NotFound />
            </Suspense>
          } 
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App; 