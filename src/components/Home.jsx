import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Main Content */}
      <div>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 bg-red-600 opacity-10"></div>
          <div className="relative text-center z-10 px-6 sm:px-8 w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-white">EXPERT</span>
              <br />
              <span className="text-red-500">GARAGE DOOR SOLUTIONS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-slide-up">
              Professional installation, repair, and maintenance services for residential and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-none font-bold text-lg transition-colors duration-200 border-2 border-red-600 hover:border-red-700 text-center">
                GET FREE QUOTE
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-none font-bold text-lg transition-colors duration-200 text-center">
                VIEW SERVICES
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-white">OUR</span> <span className="text-red-500">SERVICES</span>
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                From new installations to repairs and maintenance, we provide comprehensive garage door solutions for the Driftless Region.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Service Overview 1 */}
              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300 group">
                <div className="w-16 h-16 bg-red-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">NEW INSTALLS</h3>
                <p className="text-gray-400 text-center">Professional installation with quality materials and custom sizing.</p>
              </div>

              {/* Service Overview 2 */}
              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300 group">
                <div className="w-16 h-16 bg-red-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">REPAIR & MAINTENANCE</h3>
                <p className="text-gray-400 text-center">Expert diagnostics and reliable solutions for optimal performance.</p>
              </div>

              {/* Service Overview 3 */}
              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300 group">
                <div className="w-16 h-16 bg-red-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">OPERATOR REPLACEMENT</h3>
                <p className="text-gray-400 text-center">Modern technology with smart features and seamless installation.</p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/services" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-none font-bold text-lg transition-colors duration-200 border-2 border-red-600 hover:border-red-700 inline-block">
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>
        </section>

        {/* About Section - Split Layout */}
        <section id="about" className="relative py-20 bg-black">
          <div className="absolute top-0 left-0 w-full h-32 bg-black transform -skew-y-3 origin-top-left"></div>
          <div className="relative max-w-6xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-center mb-4">
                  <h2 className="text-4xl font-bold mb-4">
                    <span className="text-white">ABOUT OUR </span> <span className="text-red-500">TEAM</span>
                </h2>
                  <div className="w-24 h-1 bg-red-500 mx-auto"></div>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                We are a small, local and family-owned garage door company servicing the Driftless Region in residential and commercial garage doors. We offer quality products at a great price and take pride in our work while always putting our customers first.
                </p>
                <p className="text-gray-300 text-lg mb-8">
                Whether you need a quick preventative maintenance service, spring replacement, or are looking to update the look of your home, we have you covered.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-800 h-96 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xl font-semibold">COMPANY SHOWCASE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section id="reviews" className="relative py-20 bg-gray-900">
          <div className="absolute -top-16 left-0 w-full h-20 bg-black transform skew-y-3 origin-top-left"></div>
          <div className="relative max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-white">WHAT OUR</span> <span className="text-red-500">CUSTOMERS SAY</span>
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
              
              {/* 5-Star Rating CTA */}
              <div className="bg-red-600 p-8 rounded-lg mb-12 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">5.0 OUT OF 5 STARS</h3>
                <p className="text-red-100 text-lg">Trusted by 100+ satisfied customers</p>
              </div>
            </div>
            
            {/* Customer Reviews Carousel */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Review Card 1 */}
              <div className="bg-black border border-gray-800 p-6 rounded-lg hover:border-red-500 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Zeik was great to work with.  He was <span className="text-red-500">patient, helpful and friendly</span> while we worked through choosing just the right door.  He also has been timely in his responses to questions and with his service. We would highly recommend Driftless Garage Doors to anyone looking for a new or replacement garage door."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Connie H.</div>
                  </div>
                </div>
              </div>

              {/* Review Card 2 */}
              <div className="bg-black border border-gray-800 p-6 rounded-lg hover:border-red-500 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Overall great service! Zeik always responded quickly to messages and there were no empty promises about meetings to drop off samples or discuss ideas. He offered good suggestions and reasonable prices. Zeik even went out of his way to expedite our project. <span className="text-red-500">Very reliable</span> and good quality work!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">K</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Kendra G.</div>
                  </div>
                </div>
              </div>

              {/* Review Card 3 */}
              <div className="bg-black border border-gray-800 p-6 rounded-lg hover:border-red-500 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "We couldn't be happier with our new garage door and the service provided by Zeik at Driftless Garage Doors. An honest and reliable company with very responsive communication. They went the extra mile and fixed our broken door on one of the coldest days this Winter so we could use our garage until our new door arrived. <span className="text-red-500">A+ service!</span>"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Nicole N.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <a 
                href="https://www.google.com/maps/place/Driftless+Garage+Doors/@44.0455455,-91.4427913,17z/data=!4m8!3m7!1s0x2f8550973d7bf785:0x669e001f9de1fdc4!8m2!3d44.0455455!4d-91.4402164!9m1!1b1!16s%2Fg%2F11vpfdf98d?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-none font-bold text-lg transition-colors duration-200 border-2 border-red-600 hover:border-red-700"
              >
                READ MORE REVIEWS
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home; 