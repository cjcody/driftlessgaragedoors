import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

function Contact() {
  // Slideshow images (same as Showcase/Services)
  const slideshowImages = [
    '/garagedoor3.jpg',
    '/garagedoor2.jpg',
    '/garagedoor4.jpg',
    '/garagedoor5.jpg',
  ];
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    serviceAddress: '',
    doorWidth: '',
    doorHeight: '',
    doorColor: '',
    insulationRating: '',
    windows: '',
    constructionType: '',
    operator: '',
    additionalInfo: '',
    // Honeypot fields
    website: '',
    company: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot validation - if honeypot fields are filled, it's likely spam
    if (formData.website || formData.company) {
      // Potential spam detected - honeypot fields filled
      setSubmitStatus('success'); // Show success to spammer but don't actually submit
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        serviceAddress: '',
        doorWidth: '',
        doorHeight: '',
        doorColor: '',
        insulationRating: '',
        windows: '',
        constructionType: '',
        operator: '',
        additionalInfo: '',
        website: '',
        company: ''
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create a unique callback function name
      const callbackName = 'jsonpCallback_' + Date.now();
      
      // Create the script element for JSONP
      const script = document.createElement('script');
      const url = new URL('https://script.google.com/macros/s/AKfycbwpDXbNAxJWY6LjCMaARIC6f0xWU3je6SiukAPRdz3E7_baDFXAyePEG4LD0eWMQr4s/exec');
      
      // Add the data as URL parameters (excluding honeypot fields)
      const cleanFormData = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        emailAddress: formData.emailAddress,
        serviceAddress: formData.serviceAddress,
        doorWidth: formData.doorWidth,
        doorHeight: formData.doorHeight,
        doorColor: formData.doorColor,
        insulationRating: formData.insulationRating,
        windows: formData.windows,
        constructionType: formData.constructionType,
        operator: formData.operator,
        additionalInfo: formData.additionalInfo
      };
      
      Object.keys(cleanFormData).forEach(key => {
        if (cleanFormData[key]) {
          url.searchParams.append(key, cleanFormData[key]);
        }
      });
      
      // Add callback parameter
      url.searchParams.append('callback', callbackName);
      
      // Create a promise to handle the JSONP response
      const responsePromise = new Promise((resolve, reject) => {
        // Create global callback function
        window[callbackName] = (response) => {
          resolve(response);
          // Clean up
          delete window[callbackName];
          document.head.removeChild(script);
        };
        
        // Set timeout for error handling
        setTimeout(() => {
          reject(new Error('Request timeout'));
          delete window[callbackName];
          if (document.head.contains(script)) {
            document.head.removeChild(script);
          }
        }, 10000); // 10 second timeout
      });
      
      // Set the script source and add to page
      script.src = url.toString();
      document.head.appendChild(script);
      
      // Wait for response
      const result = await responsePromise;
      
      if (result.status === 'success') {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          phoneNumber: '',
          emailAddress: '',
          serviceAddress: '',
          doorWidth: '',
          doorHeight: '',
          doorColor: '',
          insulationRating: '',
          windows: '',
          constructionType: '',
          operator: '',
          additionalInfo: '',
          website: '',
          company: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Driftless Garage Doors | Schedule Service in La Crosse, Trempealeau, Winona & Surrounding Areas</title>
        <meta name="description" content="Get in touch with Driftless Garage Doors for expert garage door services in La Crosse, Trempealeau, Winona, Holmen, Onalaska, West Salem, Galesville, Centerville, Sparta, Tomah, Arcadia, La Crescent, Melrose, Mindoro and surrounding areas. Request a free quote or schedule service today!" />
        <meta name="keywords" content="contact garage door company, garage door quote, schedule garage door service, La Crosse garage door contact, Trempealeau garage door quote, Winona garage door service, free garage door estimate" />
        <meta name="author" content="Driftless Garage Doors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://driftlessgaragedoors.com/contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://driftlessgaragedoors.com/contact" />
        <meta property="og:title" content="Contact Driftless Garage Doors | Schedule Service in La Crosse, Trempealeau, Winona & Surrounding Areas" />
        <meta property="og:description" content="Get in touch with Driftless Garage Doors for expert garage door services in La Crosse, Trempealeau, Winona, Holmen, Onalaska, West Salem, Galesville, Centerville, Sparta, Tomah, Arcadia, La Crescent, Melrose, Mindoro and surrounding areas. Request a free quote or schedule service today!" />
        <meta property="og:image" content="https://driftlessgaragedoors.com/garagedoor2.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://driftlessgaragedoors.com/contact" />
        <meta property="twitter:title" content="Contact Driftless Garage Doors | Schedule Service in La Crosse, Trempealeau, Winona & Surrounding Areas" />
        <meta property="twitter:description" content="Get in touch with Driftless Garage Doors for expert garage door services in La Crosse, Trempealeau, Winona, Holmen, Onalaska, West Salem, Galesville, Centerville, Sparta, Tomah, Arcadia, La Crescent, Melrose, Mindoro and surrounding areas. Request a free quote or schedule service today!" />
        <meta property="twitter:image" content="https://driftlessgaragedoors.com/garagedoor2.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Driftless Garage Doors",
            "description": "Contact page for Driftless Garage Doors garage door services",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Driftless Garage Doors",
              "telephone": "+1-608-790-3890",
              "email": "driftlessgaragedoors@gmail.com",
              "url": "https://driftlessgaragedoors.com",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "WI",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.8014",
                "longitude": "-91.2396"
              },
              "openingHours": "Mo-Fr 08:00-18:00,Sa 09:00-15:00",
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Check", "Credit Card"],
              "currenciesAccepted": "USD",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "La Crosse",
                  "sameAs": "https://en.wikipedia.org/wiki/La_Crosse,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "Trempealeau",
                  "sameAs": "https://en.wikipedia.org/wiki/Trempealeau,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "Winona",
                  "sameAs": "https://en.wikipedia.org/wiki/Winona,_Minnesota"
                },
                {
                  "@type": "City", 
                  "name": "Holmen",
                  "sameAs": "https://en.wikipedia.org/wiki/Holmen,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "Onalaska",
                  "sameAs": "https://en.wikipedia.org/wiki/Onalaska,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "West Salem",
                  "sameAs": "https://en.wikipedia.org/wiki/West_Salem,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "Galesville",
                  "sameAs": "https://en.wikipedia.org/wiki/Galesville,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "Centerville",
                  "sameAs": "https://en.wikipedia.org/wiki/Centerville,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "Sparta",
                  "sameAs": "https://en.wikipedia.org/wiki/Sparta,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "Tomah",
                  "sameAs": "https://en.wikipedia.org/wiki/Tomah,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "Arcadia",
                  "sameAs": "https://en.wikipedia.org/wiki/Arcadia,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "La Crescent",
                  "sameAs": "https://en.wikipedia.org/wiki/La_Crescent,_Minnesota"
                },
                {
                  "@type": "City",
                  "name": "Melrose",
                  "sameAs": "https://en.wikipedia.org/wiki/Melrose,_Wisconsin"
                },
                {
                  "@type": "City",
                  "name": "Mindoro",
                  "sameAs": "https://en.wikipedia.org/wiki/Mindoro,_Wisconsin"
                }
              ],
              "serviceType": [
                "Garage Door Installation",
                "Garage Door Repair",
                "Spring Replacement",
                "Operator Installation",
                "Emergency Garage Door Repair"
              ],
              "sameAs": [
                "https://www.facebook.com/DriftlessGarageDoors/",
                "https://www.instagram.com/driftlessgaragedoors"
              ]
            },
            "potentialAction": {
              "@type": "ContactAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://driftlessgaragedoors.com/contact",
                "inLanguage": "en-US"
              },
              "result": {
                "@type": "ContactPage"
              }
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

      {/* Contact Section - Full Width */}
      <section className="relative py-20 bg-gray-900">
        <div className="relative max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">GET IN</span> <span className="text-red-500">TOUCH</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to get started? Contact us for a free consultation and quote on your project
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-6">CONTACT INFO</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-600 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Call or Text</div>
                    <div className="text-gray-400">+1 (608) 790-3890</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-400">driftlessgaragedoors@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">Service Area</div>
                    <div className="text-gray-400">La Crosse, Trempealeau, Winona & surrounding areas</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">REQUEST A QUOTE</h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot fields - hidden from users but visible to bots */}
                <div style={{ display: 'none' }}>
                  <input 
                    type="text" 
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    tabIndex="-1"
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    tabIndex="-1"
                    autoComplete="off"
                    aria-hidden="true"
                  />
                </div>

                {/* Customer Information Section */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">CUSTOMER INFORMATION</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required 
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                        placeholder="e.g., John Smith" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                        placeholder="e.g., (555) 123-4567" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        required 
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                        placeholder="e.g., john.smith@email.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Address</label>
                      <input 
                        type="text" 
                        name="serviceAddress"
                        value={formData.serviceAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                        placeholder="e.g., 123 Main St, Viroqua, WI 54665" 
                      />
                    </div>
                  </div>
                </div>

                {/* Door Specifications Section */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">DOOR SPECIFICATIONS</h4>
                  
                  {/* Door Size */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Door Width (feet) *</label>
                      <input 
                        type="number" 
                        step="0.1" 
                        name="doorWidth"
                        value={formData.doorWidth}
                        onChange={handleInputChange}
                        required 
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                        placeholder="e.g., 16.0" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Door Height (feet) *</label>
                      <input 
                        type="number" 
                        step="0.1" 
                        name="doorHeight"
                        value={formData.doorHeight}
                        onChange={handleInputChange}
                        required 
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                        placeholder="e.g., 7.0" 
                      />
                    </div>
                  </div>

                  {/* Door Color */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Door Color *</label>
                    <select 
                      name="doorColor"
                      value={formData.doorColor}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select color type</option>
                      <option value="woodgrain">Woodgrain</option>
                      <option value="solid-color">Solid Color</option>
                    </select>
                  </div>

                  {/* Insulation Rating */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Insulation Rating *</label>
                    <select 
                      name="insulationRating"
                      value={formData.insulationRating}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select insulation rating</option>
                      <option value="no-insulation">No Insulation</option>
                      <option value="R-10">R-10</option>
                      <option value="R-13">R-13</option>
                      <option value="R-18">R-18</option>
                    </select>
                  </div>

                  {/* Windows */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Windows *</label>
                    <select 
                      name="windows"
                      value={formData.windows}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select window option</option>
                      <option value="no-windows">No Windows</option>
                      <option value="windows-top">Windows in Top</option>
                      <option value="windows-side">Windows Down the Side</option>
                    </select>
                  </div>

                  {/* Construction Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Construction Type *</label>
                    <select 
                      name="constructionType"
                      value={formData.constructionType}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select construction type</option>
                      <option value="new-construction">New Construction</option>
                      <option value="replacement">Replacement</option>
                    </select>
                  </div>

                  {/* Operator */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Operator *</label>
                    <select 
                      name="operator"
                      value={formData.operator}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select operator option</option>
                      <option value="new-operator">New Operator</option>
                      <option value="rehook-existing">Rehook Existing Operator</option>
                    </select>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Additional Information</label>
                  <textarea 
                    rows="4" 
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                    placeholder="Any additional details about your project, special requirements, or questions..."
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-none font-bold text-lg transition-colors duration-200 border-2 ${
                      isSubmitting 
                        ? 'bg-gray-600 border-gray-600 text-gray-400 cursor-not-allowed' 
                        : 'bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700'
                    }`}
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'REQUEST QUOTE'}
                  </button>
                </div>
              </form>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-900 border border-green-600 text-green-100 rounded">
                  Thank you! Your quote request has been submitted successfully. We'll contact you within 24-48 hours. Please check your spam folder for the confirmation email.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-900 border border-red-600 text-red-100 rounded">
                  There was an error submitting your request. Please try again or contact us directly.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact; 