import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-red-600 opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-8 text-center z-10">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-white">OUR</span> <span className="text-red-500">SERVICES</span>
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional garage door solutions for residential and commercial properties in the Driftless Region.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 - New Installs */}
            <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300 group">
              <div className="w-16 h-16 bg-red-600 flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">NEW INSTALLS</h3>
              <p className="text-gray-400 mb-4">
                Professional installation of new garage doors with precision craftsmanship and exceptional service quality.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Custom sizing available</li>
                <li>• Quality materials</li>
                <li>• Professional installation</li>
                <li>• Residential & Commercial</li>
              </ul>
            </div>

            {/* Service Card 2 - Spring Replacement & Service */}
            <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300 group">
              <div className="w-16 h-16 bg-red-600 flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">REPAIR & MAINTENANCE</h3>
              <p className="text-gray-400 mb-4">
                Getting your garage door back to optimal performance with expert diagnostics and reliable solutions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Spring replacement</li>
                <li>• Preventive maintenance</li>
                <li>• Troubleshooting & repair</li>
                <li>• Residential & Commercial</li>
              </ul>
            </div>

            {/* Service Card 3 - Operator Replacement */}
            <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300 group">
              <div className="w-16 h-16 bg-red-600 flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">OPERATOR REPLACEMENT</h3>
              <p className="text-gray-400 mb-4">
                Modernizing your garage door with advanced operator technology and seamless installation expertise.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• New operator installation</li>
                <li>• Existing operator rehook</li>
                <li>• Smart technology options</li>
                <li>• Residential & Commercial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="bg-red-600 p-8 rounded-lg mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              READY TO GET STARTED?
            </h2>
            <p className="text-gray-100 text-base mb-6">
              Contact us today for a free quote on your garage door project. We're here to help with all your garage door needs.
            </p>
            <a href="/contact" className="bg-white hover:bg-gray-100 text-red-600 px-6 py-3 rounded-none font-bold text-base transition-colors duration-200 border-2 border-white hover:border-gray-100 inline-block">
              GET FREE QUOTE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services; 