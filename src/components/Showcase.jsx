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

  // Facebook state management
  const [isFacebookEnabled, setIsFacebookEnabled] = useState(false);
  const [isFacebookSDKReady, setIsFacebookSDKReady] = useState(false);
  const [isFacebookLoading, setIsFacebookLoading] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const hasInitializedFacebook = useRef(false);



  // Check if Facebook was previously enabled and restore state
  useEffect(() => {
    // Initialize Facebook state from localStorage
    const facebookEnabled = localStorage.getItem('facebook-tracking-enabled') === 'true';
    setIsFacebookEnabled(facebookEnabled);
  }, []);

  // Handle Facebook SDK loading and initialization
  useEffect(() => {
    if (isFacebookEnabled) {
      // Load Facebook SDK if not already loaded
      if (!window.FB && window.loadFacebookSDK) {
        window.loadFacebookSDK();
        
        // Set up a listener for when the SDK is ready
        const checkSDKReady = () => {
          if (window.FB && window.FB.XFBML) {
            setIsFacebookSDKReady(true);
            // Let Facebook auto-parse since we loaded with xfbml=1
            hasInitializedFacebook.current = true;
          } else {
            setTimeout(checkSDKReady, 100);
          }
        };
        
        setTimeout(checkSDKReady, 500);
      } else if (window.FB && window.FB.XFBML && !isFacebookSDKReady) {
        // SDK is already loaded but we haven't marked it as ready yet
        setIsFacebookSDKReady(true);
        
        // If this is the first time we're enabling Facebook on this page load,
        // we need to manually parse since the SDK was already loaded
        if (!hasInitializedFacebook.current) {
          setTimeout(() => {
            window.FB.XFBML.parse();
            hasInitializedFacebook.current = true;
          }, 500);
        }
      } else if (window.FB && window.FB.XFBML && isFacebookSDKReady) {
        // SDK is already loaded and ready - ensure we're initialized
        if (!hasInitializedFacebook.current) {
          setTimeout(() => {
            window.FB.XFBML.parse();
            hasInitializedFacebook.current = true;
          }, 500);
        }
      }

      // Check for Facebook SDK loading issues (spinning wheel stuck)
      const checkFacebookLoadingState = () => {
        if (isFacebookEnabled && !showFallback) {
          const fbRoot = document.getElementById('fb-root');
          
          if (fbRoot) {
            // Check for Facebook iframes - these are where the loading wheel likely is
            const fbIframes = fbRoot.querySelectorAll('iframe');
            const allIframes = document.querySelectorAll('iframe');
            
            // Check for any iframes anywhere that might be Facebook-related
            const facebookIframes = Array.from(allIframes).filter(iframe => {
              const src = iframe.src || '';
              return src.includes('facebook.com') || src.includes('fbcdn.net') || src.includes('fb.com');
            });
            
            // Check iframe dimensions to detect loading state
            let iframeHeightIssue = false;
            if (facebookIframes.length > 0) {
              const iframeHeights = facebookIframes.map(iframe => {
                const rect = iframe.getBoundingClientRect();
                const height = rect.height;
                const width = rect.width;
                return { height, width, src: iframe.src };
              });
              
              // Check if any iframe has a height less than expected (indicating stuck/partial loading)
              // Desktop: first iframe should have height of 600, stuck feed has height of 331
              // Mobile: second iframe should have height of 348, stuck feed has height of 191.98
              const firstIframe = iframeHeights[0];
              const secondIframe = iframeHeights[1];
              
              // Check for desktop pattern (first iframe with height > 0)
              // Use hybrid approach: minimum viable height AND percentage of expected
              const desktopPartialHeight = firstIframe && 
                firstIframe.height > 0 && 
                firstIframe.height < 400 && // Conservative minimum (any post should be taller)
                firstIframe.height < (600 * 0.7); // 70% of expected (stuck is ~55% of working)
              
              // Check for mobile pattern (second iframe with height > 0)
              // Use hybrid approach: minimum viable height AND percentage of expected
              const mobilePartialHeight = secondIframe && 
                secondIframe.height > 0 && 
                secondIframe.height < 250 && // Conservative minimum
                secondIframe.height < (348 * 0.7); // 70% of expected
              
              iframeHeightIssue = desktopPartialHeight || mobilePartialHeight;
              
              if (iframeHeightIssue) {
                console.log('DEBUG: Iframe stuck loading detected (partial height issue)');
                console.log('DEBUG: Desktop height:', firstIframe?.height, 'Mobile height:', secondIframe?.height);
                setShowFallback(true);
              }
            }
          }
        }
      };

      // Set up a timeout to check for Facebook loading issues
      const loadingCheckTimeout = setTimeout(() => {
        if (isFacebookEnabled && !showFallback) {
          checkFacebookLoadingState();
        }
      }, 3000); // Wait 3 seconds before checking

      return () => {
        clearTimeout(loadingCheckTimeout);
      };
    } else {
      setIsFacebookSDKReady(false);
      setShowFallback(false);
      // Reset the initialization flag when Facebook is disabled
      hasInitializedFacebook.current = false;
    }
  }, [isFacebookEnabled, isFacebookSDKReady]);

  const toggleShowcaseFacebook = () => {
    const newEnabledState = !isFacebookEnabled;
    setIsFacebookEnabled(newEnabledState);
    localStorage.setItem('facebook-tracking-enabled', newEnabledState.toString());
    
    // Show loading spinner when enabling Facebook
    if (newEnabledState) {
      setIsFacebookLoading(true);
      // Hide loading spinner after a reasonable time
      setTimeout(() => {
        setIsFacebookLoading(false);
      }, 1000);
    }
    
    // If disabling Facebook, clear tracking and cookies
    if (!newEnabledState) {
      if (window.disableFacebookTracking) {
        window.disableFacebookTracking();
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

      {/* Facebook SDK Plugin Section */}
      <section className="relative pb-20 bg-gray-900 facebook-section">
        <div className="relative max-w-4xl mx-auto px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-white">FOLLOW</span> <span className="text-red-500">OUR WORK</span>
            </h3>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay connected for the latest projects, customer reviews, and garage door tips
            </p>
          </div>
          
          {/* Facebook Content Container */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">Driftless Garage Doors</h4>
              </div>
            </div>
            
            {/* Facebook Toggle Section */}
            <div className={`text-center pt-8 ${isFacebookEnabled ? 'hidden' : ''}`}>
              <h4 className="text-xl font-semibold text-white mb-2">Enable Live Facebook Feed</h4>
              
              {/* Toggle Switch */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center">
                  <span className="text-gray-400 mr-4 text-sm">Disabled</span>
                  <button 
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${isFacebookEnabled ? 'bg-red-500' : 'bg-gray-600'}`}
                    onClick={() => toggleShowcaseFacebook()}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${isFacebookEnabled ? 'translate-x-6' : 'translate-x-1'}`}
                    ></span>
                  </button>
                  <span className="text-gray-400 ml-4 text-sm">Enabled</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500">
                When enabled, this feature will display our latest Facebook posts on this page. Please note that loading this feed allows Facebook to collect certain data about your visit — such as your IP address, browser details, and pages you view.
                <br /><br />
                You can change this setting anytime within the Privacy Policy page. Learn more in our <a href="/privacy-policy#tracking" className="text-red-400 hover:text-red-300">Privacy Policy</a>.
              </p>
            </div>
            
            {/* Facebook Content */}
            <div className={`${isFacebookEnabled ? '' : 'hidden'}`}>
              <div className="text-center pt-6 relative">
                {/* Facebook elements - always present when enabled */}
                <div id="fbPageWrapper" className="flex justify-center" style={{ display: showFallback ? 'none' : 'flex' }}>
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
                  <div className="md:hidden facebook-mobile-container flex justify-center" style={{transform: 'scale(0.58)', transformOrigin: 'center top', marginBottom: '-15.75rem', width: '100%'}}>
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

                {/* Fallback Content - Only show when SDK fails to load */}
                {showFallback && isFacebookEnabled && (
                  <div className="text-center py-8">
                    <div className="bg-gray-700 rounded-lg p-6 max-w-md mx-auto">
                      <div className="flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <h4 className="text-white font-semibold text-lg">Facebook Feed Unavailable</h4>
                      </div>
                        <p className="text-gray-300 mb-4">
                          Currently unavailable due to Facebook's integration system; clear your browser data, open in private browser, or visit our Facebook page directly to check out our latest updates!
                        </p>
                    </div>
                  </div>
                )}
                
                {/* Loading overlay - positioned absolutely over the Facebook content */}
                {isFacebookLoading && (
                  <>
                    {/* Desktop loading overlay */}
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-100 flex flex-col items-center justify-center rounded-lg hidden md:flex" style={{zIndex: 10}}>
                      <div className="flex items-center">
                        <div 
                          className="w-10 h-10 rounded-full mr-4 animate-spin"
                          style={{
                            border: '3px solid #4b5563',
                            borderTop: '3px solid #dc2626'
                          }}
                        ></div>
                        <span className="text-gray-400 text-sm">Loading Facebook feed...</span>
                      </div>
                    </div>
                    
                    {/* Mobile loading overlay - covers the entire section */}
                    <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-100 flex items-center justify-center" style={{zIndex: 50}}>
                      <div className="flex items-center">
                        <div 
                          className="w-10 h-10 rounded-full mr-4 animate-spin"
                          style={{
                            border: '3px solid #4b5563',
                            borderTop: '3px solid #dc2626'
                          }}
                        ></div>
                        <span className="text-gray-400 text-sm">Loading Facebook feed...</span>
                      </div>
                    </div>
                  </>
                )}
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