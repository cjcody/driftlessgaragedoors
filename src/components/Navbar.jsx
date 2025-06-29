import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [animateGarage, setAnimateGarage] = useState(false);
  const [hideGarage, setHideGarage] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

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
    <nav className="relative bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center relative">
            {/* Logo Image */}
            <a href="/" className="flex items-center">
              <img 
                src="/Zeiklogo3.png" 
                alt="Zeik Logo" 
                className="h-10 w-auto mr-4 object-contain"
              />
              {/* Company Name - Always Visible */}
              <h1 className="text-2xl font-bold metallic-text relative z-0 text-center md:text-left tracking-wide select-none" style={{ letterSpacing: '2px' }}>
                <span className="hidden md:inline">Driftless Garage Doors</span>
                <span className="md:hidden">
                  <span className="block text-left">Driftless</span>
                  <span className="block text-left">Garage Doors</span>
                </span>
              </h1>
            </a>
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
              <a href="/" className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${isActive('/') ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
                Home
              </a>
              <a href="/services" className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${isActive('/services') ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
                Services
              </a>
              <a href="/specs" className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${isActive('/specs') ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
                Specs
              </a>
              <a href="/showcase" className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${isActive('/showcase') ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
                Showcase
              </a>
              <a href="/contact" className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${isActive('/contact') ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
                Contact
              </a>
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
        {mobileNavOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 flex flex-col space-y-2 animate-fade-in-down">
            <a href="/" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/') ? 'text-red-500' : 'text-white hover:text-red-500'}`} onClick={() => setMobileNavOpen(false)}>
              Home
            </a>
            <a href="/services" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/services') ? 'text-red-500' : 'text-white hover:text-red-500'}`} onClick={() => setMobileNavOpen(false)}>
              Services
            </a>
            <a href="/specs" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/specs') ? 'text-red-500' : 'text-white hover:text-red-500'}`} onClick={() => setMobileNavOpen(false)}>
              Specs
            </a>
            <a href="/showcase" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/showcase') ? 'text-red-500' : 'text-white hover:text-red-500'}`} onClick={() => setMobileNavOpen(false)}>
              Showcase
            </a>
            <a href="/contact" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/contact') ? 'text-red-500' : 'text-white hover:text-red-500'}`} onClick={() => setMobileNavOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;