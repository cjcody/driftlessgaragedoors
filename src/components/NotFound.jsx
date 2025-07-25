import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Driftless Garage Doors - La Crosse, Trempealeau, Winona & Surrounding Areas</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find garage door installation, repair, and maintenance services in La Crosse, Trempealeau, Winona and surrounding areas." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://driftlessgaragedoors.com/404" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://driftlessgaragedoors.com/404" />
        <meta property="og:title" content="Page Not Found | Driftless Garage Doors" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Find garage door services in La Crosse, Trempealeau, Winona and surrounding areas." />
        <meta property="og:image" content="https://driftlessgaragedoors.com/Zeiklogo3.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://driftlessgaragedoors.com/404" />
        <meta property="twitter:title" content="Page Not Found | Driftless Garage Doors" />
        <meta property="twitter:description" content="The page you're looking for doesn't exist. Find garage door services in La Crosse, Trempealeau, Winona and surrounding areas." />
        <meta property="twitter:image" content="https://driftlessgaragedoors.com/Zeiklogo3.png" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-red-500 mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">PAGE </span>
                <span className="text-red-500">NOT FOUND</span>
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              The page you're looking for doesn't exist. But don't worry - we're still here to help with all your garage door needs!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Need Garage Door Services?</h3>
                <p className="text-gray-300 mb-4">
                  Get professional installation, repair, and maintenance services in La Crosse, Trempealeau, Winona and surrounding areas.
                </p>
                <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-none font-bold transition-colors duration-200 inline-block">
                  GET FREE QUOTE
                </Link>
              </div>
              
              <div className="bg-black border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">View Our Services</h3>
                <p className="text-gray-300 mb-4">
                  Explore our comprehensive range of garage door services and see examples of our work.
                </p>
                <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-none font-bold transition-colors duration-200 inline-block">
                  OUR SERVICES
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-none font-bold text-lg transition-colors duration-200 border-2 border-red-600 hover:border-red-700 text-center">
                GO HOME
              </Link>
              <Link to="/showcase" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-none font-bold text-lg transition-colors duration-200 text-center">
                VIEW OUR WORK
              </Link>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default NotFound; 