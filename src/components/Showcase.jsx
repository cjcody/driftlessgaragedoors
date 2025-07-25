import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageCarousel from './ImageCarousel';
import { config } from '../config';
import { Helmet } from 'react-helmet-async';

function Showcase() {
  // Slideshow images (replace with your own as needed)
  const slideshowImages = [
    '/garagedoor3.jpg',
    '/garagedoor2.jpg',
    '/garagedoor4.jpg',
    '/garagedoor5.jpg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

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
        <meta property="og:image" content="https://driftlessgaragedoors.com/garagedoor4.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://driftlessgaragedoors.com/showcase" />
        <meta property="twitter:title" content="Our Work | Garage Door Projects in La Crosse, Trempealeau, Winona & Surrounding Areas" />
        <meta property="twitter:description" content="See completed garage door installations and repairs by Driftless Garage Doors in La Crosse, Trempealeau, Winona, Holmen, Onalaska, West Salem, Galesville, Centerville, Sparta, Tomah, Arcadia, La Crescent, Melrose, Mindoro and surrounding areas. Quality you can trust!" />
        <meta property="twitter:image" content="https://driftlessgaragedoors.com/garagedoor4.jpg" />
        
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
        {slideshowImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ backgroundImage: `url(${img})` }}
            aria-hidden={idx !== currentSlide}
          />
        ))}
        {/* Logo overlay on all slides */}
        <div className="absolute inset-0 flex items-bottom justify-center md:items-center md:justify-center items-end justify-center pointer-events-none z-20">
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
          <div className="text-center mb-16">
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

      <Footer />
    </div>
  );
}

export default Showcase; 