import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

// Global logo state that persists across page navigations
let globalLogoLoaded = false;
let globalLogoError = false;
let globalLogoPromise = null;

function Navbar() {
  const [animateGarage, setAnimateGarage] = useState(false);
  const [hideGarage, setHideGarage] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(globalLogoLoaded);
  const [logoError, setLogoError] = useState(globalLogoError);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle logo/company name click
  const handleLogoClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If on homepage, scroll to top and reset garage animation
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset garage door animation
      setAnimateGarage(false);
      setHideGarage(false);
      setTimeout(() => setAnimateGarage(true), 300);
      setTimeout(() => setHideGarage(true), 1300);
    } else {
      // If on other pages, navigate to home
      navigate('/');
    }
  };

  // Handle Home link click
  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top and reset garage animation
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset garage door animation
      setAnimateGarage(false);
      setHideGarage(false);
      setTimeout(() => setAnimateGarage(true), 300);
      setTimeout(() => setHideGarage(true), 1300);
    }
    // If on other pages, let the Link component handle navigation normally
  };

  // Persistent logo loading that only runs once per app session
  useEffect(() => {
    // If logo is already loaded globally, use that state
    if (globalLogoLoaded) {
      setLogoLoaded(true);
      return;
    }

    // If logo has already failed globally, use that state
    if (globalLogoError) {
      setLogoError(true);
      return;
    }

    // If we already have a loading promise, wait for it
    if (globalLogoPromise) {
      globalLogoPromise.then(() => {
        setLogoLoaded(true);
      }).catch(() => {
        setLogoError(true);
      });
      return;
    }

    // Check session storage for persistence across browser sessions
    if (sessionStorage.getItem('driftless_logo_loaded') === 'true') {
      globalLogoLoaded = true;
      setLogoLoaded(true);
      return;
    }

    // Load logo with promise-based approach
    globalLogoPromise = new Promise((resolve, reject) => {
      const img = new Image();
      
      const timeout = setTimeout(() => {
        globalLogoLoaded = true;
        globalLogoError = false;
        sessionStorage.setItem('driftless_logo_loaded', 'true');
        resolve();
      }, 300); // Very short timeout for fast fallback

      img.onload = () => {
        clearTimeout(timeout);
        globalLogoLoaded = true;
        globalLogoError = false;
        sessionStorage.setItem('driftless_logo_loaded', 'true');
        resolve();
      };

      img.onerror = () => {
        clearTimeout(timeout);
        globalLogoError = true;
        reject();
      };

      img.src = '/Zeiklogo3.png';
    });

    // Handle the promise result
    globalLogoPromise.then(() => {
      setLogoLoaded(true);
    }).catch(() => {
      setLogoError(true);
    });
  }, []); // Only run once on mount, never on location changes

  useEffect(() => {
    // Only trigger animation on home page
    if (location.pathname === '/') {
      setTimeout(() => setAnimateGarage(true), 300);
      setTimeout(() => setHideGarage(true), 1300);
    }
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <nav className="relative bg-gray-900 bg-opacity-60 backdrop-blur shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center relative">
            {/* Logo Image - Always maintain dimensions */}
            <div 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              <div className="navbar-logo-container w-10 h-10 mr-4 flex items-center justify-center">
                {logoLoaded && (
                  <img 
                    src="/Zeiklogo3.png" 
                    alt="Zeik Logo" 
                    className="navbar-logo h-10 w-auto object-contain"
                                onLoad={() => {}}
            onError={() => {}}
                    // Let browser handle caching naturally
                    loading="eager"
                  />
                )}
                {!logoLoaded && !logoError && (
                  <div className="navbar-logo h-10 w-10 bg-gray-700 animate-pulse rounded"></div>
                )}
                {logoError && !logoLoaded && (
                  <div className="navbar-logo h-10 w-10 bg-gray-700 rounded flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              {/* Company Name - Always Visible */}
              <h1 className="text-2xl font-bold metallic-text relative z-0 text-center md:text-left tracking-wide select-none" style={{ letterSpacing: '2px' }}>
                <span className="hidden md:inline">Driftless Garage Doors</span>
                <span className="md:hidden">
                  <span className="block text-left">Driftless</span>
                  <span className="block text-left">Garage Doors</span>
                </span>
              </h1>
            </div>
            {/* Garage Door Animation - Only on home page */}
            {location.pathname === '/' && !hideGarage && (
              <span className="absolute inset-0 z-10">
                {/* Animated Garage Door Panel */}
                <span
                  className={`absolute left-0 w-full h-full bg-gradient-to-b from-gray-900 via-black to-gray-800 border-2 border-gray-700 rounded-md shadow-lg transition-transform duration-1000 ${animateGarage ? 'translate-y-[-64px] md:translate-y-[-48px]' : ''}`}
                  style={{
                    top: 0,
                    zIndex: 20,
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.25)',
                  }}
                >
                  {/* Garage Door Grooves */}
                  <span className="absolute left-4 right-4 md:hidden" style={{ top: '20%', height: '4px', background: '#6b7280', borderRadius: '2px', boxShadow: 'inset 0 1px 2px #2228', opacity: 0.9 }} />
                  <span className="absolute left-4 right-4 md:hidden" style={{ top: '40%', height: '4px', background: '#6b7280', borderRadius: '2px', boxShadow: 'inset 0 1px 2px #2228', opacity: 0.9 }} />
                  <span className="absolute left-4 right-4 md:hidden" style={{ top: '60%', height: '4px', background: '#6b7280', borderRadius: '2px', boxShadow: 'inset 0 1px 2px #2228', opacity: 0.9 }} />
                  <span className="absolute left-4 right-4 md:hidden" style={{ top: '80%', height: '4px', background: '#6b7280', borderRadius: '2px', boxShadow: 'inset 0 1px 2px #2228', opacity: 0.9 }} />
                  {/* Desktop/tablet grooves */}
                  <span className="absolute left-4 right-4 hidden md:block" style={{ top: '20%', height: '4px', background: '#6b7280', borderRadius: '2px', boxShadow: 'inset 0 1px 2px #2228', opacity: 0.9 }} />
                  <span className="absolute left-4 right-4 hidden md:block" style={{ top: '50%', height: '4px', background: '#6b7280', borderRadius: '2px', boxShadow: 'inset 0 1px 2px #2228', opacity: 0.9 }} />
                  <span className="absolute left-4 right-4 hidden md:block" style={{ top: '80%', height: '4px', background: '#6b7280', borderRadius: '2px', boxShadow: 'inset 0 1px 2px #2228', opacity: 0.9 }} />
                  {/* Bottom Shadow for Depth */}
                  <span className="absolute left-0 right-0 bottom-0 h-3 bg-gradient-to-t from-black/60 to-transparent" />
                </span>
              </span>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${isActive('/') ? 'text-red-500' : 'text-white hover:text-red-500'}`} onClick={handleHomeClick}>
                Home
              </Link>
              <Link to="/services" className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${isActive('/services') ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
                Services
              </Link>
              <Link to="/showcase" className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${isActive('/showcase') ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
                Showcase
              </Link>
              <Link to="/contact" className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${isActive('/contact') ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="lg:hidden">
            <button className="text-white hover:text-red-500 focus:outline-none" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Nav Dropdown */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur border-t border-gray-800 transition-all duration-300 ease-in-out ${mobileNavOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2 pointer-events-none'}`}>
          <div className="px-4 py-3 space-y-1 text-center">
            <Link to="/" className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${isActive('/') ? 'text-red-500' : 'text-white hover:text-red-500 hover:bg-gray-800'}`} onClick={(e) => { handleHomeClick(e); setMobileNavOpen(false); }}>
              Home
            </Link>
            <Link to="/services" className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${isActive('/services') ? 'text-red-500' : 'text-white hover:text-red-500 hover:bg-gray-800'}`} onClick={() => setMobileNavOpen(false)}>
              Services
            </Link>
            <Link to="/showcase" className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${isActive('/showcase') ? 'text-red-500' : 'text-white hover:text-red-500 hover:bg-gray-800'}`} onClick={() => setMobileNavOpen(false)}>
              Showcase
            </Link>
            <Link to="/contact" className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${isActive('/contact') ? 'text-red-500' : 'text-white hover:text-red-500 hover:bg-gray-800'}`} onClick={() => setMobileNavOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;