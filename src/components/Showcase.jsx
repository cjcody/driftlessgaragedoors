import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageCarousel from './ImageCarousel';
import { config } from '../config';
import { Helmet } from 'react-helmet-async';

function Showcase() {
  // Slideshow images with responsive options
  const slideshowImages = [
    '/garagedoor2.webp',
    '/garagedoor3.webp',
    {
      desktop: '/friendphotodrift.webp',
      mobile: '/friendphotodriftm.webp'
    },
    '/garagedoor4.webp',
    '/garagedoor5.webp',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  // Lazy loading for Facebook iframe with preloading
  const [isFacebookVisible, setIsFacebookVisible] = useState(false);
  const [isFacebookPreloaded, setIsFacebookPreloaded] = useState(false);
  const facebookRef = useRef(null);

  // Function to sync showcase state with localStorage
  const syncFacebookState = () => {
    const facebookEnabled = localStorage.getItem('facebook-tracking-enabled');
    const facebookContent = document.getElementById('facebook-content');
    const toggleSection = document.getElementById('facebook-toggle-section');
    
    if (facebookContent && toggleSection) {
      if (facebookEnabled === 'true') {
        facebookContent.classList.remove('hidden');
        toggleSection.classList.add('hidden');
        
        // Load Facebook SDK if not already loaded
        if (window.loadFacebookSDK && !window.FB) {
          window.loadFacebookSDK();
        }
      } else {
        facebookContent.classList.add('hidden');
        toggleSection.classList.remove('hidden');
        
        // Ensure Facebook tracking is disabled
        if (window.disableFacebookTracking) {
          window.disableFacebookTracking();
        }
      }
    }
  };

  // Check if Facebook was previously enabled and restore state
  useEffect(() => {
    syncFacebookState();
  }, []);

  // Listen for page visibility changes to sync state
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        syncFacebookState();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const toggleShowcaseFacebook = () => {
    const facebookContent = document.getElementById('facebook-content');
    const toggleSection = document.getElementById('facebook-toggle-section');
    const toggleSwitch = document.getElementById('showcase-facebook-toggle');
    const toggleSlider = document.getElementById('showcase-facebook-toggle-slider');

    if (facebookContent && toggleSection && toggleSwitch && toggleSlider) {
      if (facebookContent.classList.contains('hidden')) {
        // Enable Facebook features
        facebookContent.classList.remove('hidden');
        toggleSection.classList.add('hidden'); // Hide the toggle section
        localStorage.setItem('facebook-tracking-enabled', 'true');
        
        // Load Facebook SDK if not already loaded
        if (window.loadFacebookSDK) {
          window.loadFacebookSDK();
        }
        
        // Parse Facebook plugins after a short delay
        setTimeout(() => {
          if (window.FB && window.FB.XFBML) {
            window.FB.XFBML.parse();
          }
        }, 1000);
        
      } else {
        // Disable Facebook features
        facebookContent.classList.add('hidden');
        toggleSection.classList.remove('hidden'); // Show the toggle section again
        toggleSwitch.classList.remove('bg-red-500');
        toggleSwitch.classList.add('bg-gray-600');
        toggleSlider.classList.remove('translate-x-6');
        toggleSlider.classList.add('translate-x-1');
        localStorage.setItem('facebook-tracking-enabled', 'false');
        
        // Disable Facebook tracking and clear cookies
        if (window.disableFacebookTracking) {
          window.disableFacebookTracking();
        }
      }
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Our Work | Garage Door Projects in La Crosse, Trempealeau, Winona & Surrounding Areas</title>
        <meta name="description" content="See completed garage door installations and repairs by Driftless Garage Doors in La Crosse, Trempealeau, Winona, Holmen, Onalaska, West Salem, Galesville, Centerville, Sparta, Tomah, Arcadia, La Crescent, Melrose, Mindoro and surrounding areas. Quality you can trust!" />
        <meta name="keywords" content="garage door projects, garage door installation examples, garage door repair work, La Crosse garage door projects, Trempealeau garage door work, Winona garage door installations, garage door showcase, completed garage door work" />
        <meta name="author" content="Driftless Garage Doors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://driftlessgaragedoors.com/showcase" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://driftlessgaragedoors.com/showcase" />
        <meta property="og:title" content="Our Work | Garage Door Projects in La Crosse, Trempealeau, Winona & Surrounding Areas" />
        <meta property="og:description" content="See completed garage door installations and repairs by Driftless Garage Doors in La Crosse, Trempealeau, Winona, Holmen, Onalaska, West Salem, Galesville, Centerville, Sparta, Tomah, Arcadia, La Crescent, Melrose, Mindoro and surrounding areas. Quality you can trust!" />
        <meta property="og:image" content="https://driftlessgaragedoors.com/garagedoor4.webp" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://driftlessgaragedoors.com/showcase" />
        <meta property="twitter:title" content="Our Work | Garage Door Projects in La Crosse, Trempealeau, Winona & Surrounding Areas" />
        <meta property="twitter:description" content="See completed garage door installations and repairs by Driftless Garage Doors in La Crosse, Trempealeau, Winona, Holmen, Onalaska, West Salem, Galesville, Centerville, Sparta, Tomah, Arcadia, La Crescent, Melrose, Mindoro and surrounding areas. Quality you can trust!" />
        <meta property="twitter:image" content="https://driftlessgaragedoors.com/garagedoor4.webp" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Work | Garage Door Projects",
            "description": "See completed garage door installations and repairs by Driftless Garage Doors",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Driftless Garage Doors",
              "telephone": "+1-608-790-3890",
              "email": "driftlessgaragedoors@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "WI",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "La Crosse"
                },
                {
                  "@type": "City",
                  "name": "Trempealeau"
                },
                {
                  "@type": "City",
                  "name": "Winona"
                },
                {
                  "@type": "City", 
                  "name": "Holmen"
                },
                {
                  "@type": "City",
                  "name": "Onalaska"
                },
                {
                  "@type": "City",
                  "name": "West Salem"
                },
                {
                  "@type": "City",
                  "name": "Galesville"
                },
                {
                  "@type": "City",
                  "name": "Centerville"
                },
                {
                  "@type": "City",
                  "name": "Sparta"
                },
                {
                  "@type": "City",
                  "name": "Tomah"
                },
                {
                  "@type": "City",
                  "name": "Arcadia"
                },
                {
                  "@type": "City",
                  "name": "La Crescent"
                },
                {
                  "@type": "City",
                  "name": "Melrose"
                },
                {
                  "@type": "City",
                  "name": "Mindoro"
                }
              ],
              "serviceType": [
                "Garage Door Installation",
                "Garage Door Repair",
                "Spring Replacement",
                "Operator Installation",
                "Emergency Garage Door Repair"
              ]
            }
          })}
        </script>
      </Helmet>
      <Navbar />

      {/* Full-bleed Hero Slideshow */}
      <section className="w-full h-56 md:h-64 relative overflow-hidden">
        {slideshowImages.map((img, idx) => {
          const isResponsive = typeof img === 'object';
          const imageUrl = isResponsive ? img.desktop : img;
          
          return (
            <div
              key={isResponsive ? img.desktop : img}
              className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ backgroundImage: `url(${imageUrl})` }}
              aria-hidden={idx !== currentSlide}
            >
              {isResponsive && (
                <picture className="w-full h-full">
                  <source media="(max-width: 639px)" srcSet={img.mobile} />
                  <img 
                    src={img.desktop} 
                    alt="" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
              )}
            </div>
          );
        })}
        {/* Logo overlay - hidden for friend photo slide */}
        <div className={`absolute inset-0 flex items-bottom justify-center md:items-center md:justify-center items-end justify-center pointer-events-none z-20 transition-opacity duration-1000 ${currentSlide === 2 ? 'opacity-0' : 'opacity-100'}`}>
          <img
            src="/slidelogodrift1.png"
            alt="Driftless Garage Doors Logo"
            className="max-h-12 md:max-h-24 w-auto drop-shadow-xl"
            style={{objectFit: 'contain'}}
          />
        </div>
      </section>

      {/* Showcase Section - Full Width */}
      <section className="relative py-20 bg-gray-900">
        <div className="relative max-w-6xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">COMPANY</span> <span className="text-red-500">SHOWCASE</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio
            </p>
          </div>
          
          {/* Showcase Content */}
          <div className="grid gap-8 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                We take pride in every project we complete. From residential installations to commercial solutions, our work speaks for itself. Each garage door is installed with precision and care, ensuring years of reliable operation.
              </p>
              <p className="text-gray-300 text-lg">
                Browse through our showcase to see examples of our craftsmanship, attention to detail, and the quality materials we use in every installation.
              </p>
            </div>
            <ImageCarousel 
              csvUrl={config.googleSheetCsvUrl}
            />
          </div>
        </div>
      </section>

      {/* Facebook SDK Plugin Test Section */}
      <section className="relative pb-20 bg-gray-900 facebook-section">
        <div className="relative max-w-4xl mx-auto px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-white">FOLLOW</span> <span className="text-red-500">OUR WORK</span>
            </h3>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          {/* Facebook Content Container */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">Driftless Garage Doors</h4>
                <p className="text-gray-400 text-sm">Follow our latest work and updates</p>
              </div>
            </div>
            
            {/* Facebook Toggle Section */}
            <div id="facebook-toggle-section" className="text-center py-8">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-2">Enable Facebook Social Features</h4>
                <p className="text-gray-400 mb-6">
                  Connect with us on Facebook to see our latest projects, customer reviews, and garage door tips.
                </p>
                
                {/* Toggle Switch */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-4 text-sm">Disabled</span>
                    <button 
                      id="showcase-facebook-toggle"
                      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => toggleShowcaseFacebook()}
                    >
                      <span 
                        id="showcase-facebook-toggle-slider"
                        className="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out translate-x-1"
                      ></span>
                    </button>
                    <span className="text-gray-400 ml-4 text-sm">Enabled</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500">
                  When enabled, Facebook can collect data about your visit to provide social features. 
                  You can control this setting anytime in our <a href="/privacy-policy#tracking" className="text-red-400 hover:text-red-300">Privacy Policy</a>.
                </p>
              </div>
            </div>
            
            {/* Facebook Content (Hidden by default) */}
            <div id="facebook-content" className="hidden">
              <div className="flex justify-center">
                {/* Desktop: Facebook Page Plugin */}
                <div className="hidden md:block">
                  <div 
                    className="fb-page" 
                    data-href="https://www.facebook.com/DriftlessGarageDoors"
                    data-tabs="timeline"
                    data-width="500"
                    data-height="600"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  ></div>
                </div>
                
                {/* Mobile: Facebook Page Plugin scaled down */}
                <div className="md:hidden facebook-mobile-container" style={{transform: 'scale(0.58)', transformOrigin: 'center top', marginBottom: '-15.75rem'}}>
                  <div 
                    className="fb-page" 
                    data-href="https://www.facebook.com/DriftlessGarageDoors"
                    data-tabs="timeline"
                    data-width="500"
                    data-height="600"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-6">
              <a 
                href="https://facebook.com/driftlessgaragedoors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow Us on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Showcase; 