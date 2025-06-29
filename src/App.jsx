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

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const [visitedPages, setVisitedPages] = useState(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Track visited pages
  useEffect(() => {
    setVisitedPages(prev => new Set([...prev, location.pathname]));
  }, [location.pathname]);

  // Preload all components immediately after first render
  useEffect(() => {
    if (isInitialLoad) {
      // Preload all components in the background
      const preloadAll = async () => {
        try {
          await Promise.all([
            import('./components/Contact'),
            import('./components/Services'),
            import('./components/DoorSpecifications'),
            import('./components/Showcase')
          ]);
        } catch (error) {
          console.log('Preloading completed');
        }
      };
      
      preloadAll();
      setIsInitialLoad(false);
    }
  }, [isInitialLoad]);

  // Show loading spinner only for pages that haven't been visited
  const shouldShowSpinner = isInitialLoad || !visitedPages.has(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={shouldShowSpinner ? <LoadingSpinner /> : null}>
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
    // Preload the logo image globally - this ensures it's cached across all pages
    const logoImage = new Image();
    logoImage.src = '/Zeiklogo3.png';
    
    // Also preload other critical images
    const preloadImages = [
      '/Zeiklogo3.png'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 