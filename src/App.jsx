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

// Background preloader for instant navigation from any page
const BackgroundPreloader = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Preload other routes in the background after initial render
    const preloadRoutes = async () => {
      // Wait for initial page to be fully rendered
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Define all routes that can be preloaded
      const allRoutes = [
        { path: '/', component: () => import('./components/Home') },
        { path: '/contact', component: () => import('./components/Contact') },
        { path: '/services', component: () => import('./components/Services') },
        { path: '/showcase', component: () => import('./components/Showcase') },
        { path: '/privacy-policy', component: () => import('./components/PrivacyPolicy') }
      ];
      
      // Filter out the current page and preload the rest
      const routesToPreload = allRoutes.filter(route => route.path !== pathname);
      
      // Preload routes in parallel
      const preloadPromises = routesToPreload.map(route => route.component());
      
      try {
        await Promise.all(preloadPromises);
        console.log(`Routes preloaded for instant navigation from ${pathname}`);
      } catch (error) {
        console.log('Background preloading completed');
      }
    };
    
    preloadRoutes();
  }, [pathname]);
  
  return null;
};

// Scroll to top component with smooth animation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Track if we've already scrolled for this navigation
    let hasScrolled = false;
    let timeoutId = null;

    const scrollToTop = () => {
      // Only scroll if we haven't already and we're not at the top
      if (!hasScrolled && window.scrollY > 0) {
        hasScrolled = true;
        
        // Try smooth scrolling first
        try {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        } catch (error) {
          // Fallback to instant scroll for older browsers
          window.scrollTo(0, 0);
        }
      }
    };

    // Single attempt with a small delay to ensure component is mounted
    timeoutId = setTimeout(scrollToTop, 100);

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <BackgroundPreloader />
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
      <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App; 