import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function DoorSpecifications() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Services Section - Full Width */}
      <section className="relative py-20 bg-gray-900">
        <div className="relative max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">DOOR</span> <span className="text-red-500">SPECIFICATIONS</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here's everything you need to know about insulation, materials, colors, and more.
            </p>
          </div>

          {/* Door Size */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Door Size</h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
                <h4 className="text-xl font-bold text-white mb-6 text-center">Standard Sizing & Measurement Guide</h4>
                
                {/* Standard Sizes */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h5 className="text-white font-semibold mb-3 text-center">Standard Door Sizes</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <h6 className="text-white font-semibold text-sm mb-2">Width</h6>
                        <p className="text-gray-400 text-xs">8', 9', 10', 12', 14', 16', 18'</p>
                      </div>
                      <div className="text-center">
                        <h6 className="text-white font-semibold text-sm mb-2">Height</h6>
                        <p className="text-gray-400 text-xs">7', 8', 9', 10', 12'</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm text-center mt-4">
                      Custom sizing available for unique openings
                    </p>
                  </div>

                  {/* Measurement Steps */}
                  <div>
                    <h5 className="text-white font-semibold mb-3 text-center">How to Measure</h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="text-white font-semibold text-sm">Step 1: Width</h6>
                        <p className="text-gray-400 text-xs">Inside edge to inside edge of door frame</p>
                      </div>
                      <div>
                        <h6 className="text-white font-semibold text-sm">Step 2: Height</h6>
                        <p className="text-gray-400 text-xs">Floor to top of door opening</p>
                      </div>
                      <div>
                        <h6 className="text-white font-semibold text-sm">Step 3: Headroom</h6>
                        <p className="text-gray-400 text-xs">Top of opening to ceiling/obstructions</p>
                      </div>
                      <div>
                        <h6 className="text-white font-semibold text-sm">Step 4: Sideroom</h6>
                        <p className="text-gray-400 text-xs">Space on each side (min. 3.5" required)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Safety Tips */}
                <div className="p-4 bg-gray-800 border border-gray-700">
                  <h6 className="text-white font-semibold text-sm mb-3 text-center">⚠️ Safety Tips</h6>
                  <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <ul className="text-gray-400 space-y-1">
                      <li>• Use a sturdy ladder and have someone spot you</li>
                      <li>• Measure multiple times for accuracy</li>
                    </ul>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Note any obstructions (pipes, electrical, etc.)</li>
                      <li>• Round down to the nearest standard size</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Door Colors & Materials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Door Colors & Materials</h3>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Color Options */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Color Options</h4>
                <div className="space-y-4">
                  <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-white border border-gray-300 mr-3"></div>
                      <h5 className="text-white font-semibold">Solid Colors</h5>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Wide selection of solid color finishes including white, sandstone, brown, and more. Perfect for matching your home's exterior design.
                    </p>
                  </div>
                  
                  <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-amber-800 border border-amber-600 mr-3"></div>
                      <h5 className="text-white font-semibold">Woodgrain</h5>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Beautiful woodgrain finish that mimics the natural appearance of wood while providing the durability and low maintenance of steel construction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Material Options */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Material Options</h4>
                <div className="space-y-4">
                  <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
                    <h5 className="text-white font-semibold mb-2">Steel</h5>
                    <p className="text-gray-400 text-sm mb-3">
                      Most popular material offering durability, low maintenance, and excellent insulation options.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Durable and long-lasting</li>
                      <li>• Low maintenance</li>
                      <li>• Excellent insulation</li>
                      <li>• Wide color selection</li>
                    </ul>
                  </div>

                  <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
                    <h5 className="text-white font-semibold mb-2">Aluminum</h5>
                    <p className="text-gray-400 text-sm mb-3">
                      Lightweight and corrosion-resistant, perfect for coastal areas or modern designs.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Corrosion resistant</li>
                      <li>• Lightweight</li>
                      <li>• Modern appearance</li>
                      <li>• Coastal friendly</li>
                    </ul>
                  </div>

                  <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
                    <h5 className="text-white font-semibold mb-2">Wood</h5>
                    <p className="text-gray-400 text-sm mb-3">
                      Premium option offering natural beauty and custom craftsmanship for luxury homes.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Natural beauty</li>
                      <li>• Custom designs</li>
                      <li>• Premium appearance</li>
                      <li>• Higher maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Insulation Ratings */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Insulation Ratings Explained</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300 group">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                    <span className="text-white font-bold text-xl">R-10</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Standard Insulation</h4>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Basic polystyrene insulation providing minimal thermal protection.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• R-value: 10.0</li>
                  <li>• Best for: Detached garages</li>
                  <li>• Cost: Most affordable</li>
                  <li>• Energy savings: Minimal</li>
                </ul>
              </div>

              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300 group">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                    <span className="text-white font-bold text-xl">R-13</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Enhanced Insulation</h4>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Polyurethane insulation offering better thermal efficiency and noise reduction.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• R-value: 13.0</li>
                  <li>• Best for: Attached garages</li>
                  <li>• Cost: Mid-range</li>
                  <li>• Energy savings: Moderate</li>
                </ul>
              </div>

              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300 group">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                    <span className="text-white font-bold text-xl">R-18</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Premium Insulation</h4>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Maximum polyurethane insulation for superior energy efficiency and quiet operation.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• R-value: 18.0</li>
                  <li>• Best for: Living spaces above garage</li>
                  <li>• Cost: Premium</li>
                  <li>• Energy savings: Maximum</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Specifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Specifications</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
                <h4 className="text-xl font-bold text-white mb-4">Window Options</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-white font-semibold text-sm">No Windows</h5>
                    <p className="text-gray-400 text-xs">Solid door for maximum privacy and insulation.</p>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-sm">Windows in Top</h5>
                    <p className="text-gray-400 text-xs">Clear or frosted glass panels in the top section for natural light.</p>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-sm">Windows Down the Side</h5>
                    <p className="text-gray-400 text-xs">Decorative windows along the sides with custom grilles and patterns.</p>
                  </div>
                </div>
              </div>

              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
                <h4 className="text-xl font-bold text-white mb-4">Construction Type</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-white font-semibold text-sm">New Construction</h5>
                    <p className="text-gray-400 text-xs">For new homes or additions requiring a complete garage door installation.</p>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-sm">Replacement</h5>
                    <p className="text-gray-400 text-xs">Replacing existing garage door while keeping the same opening and track system.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operator Options */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Operator Options</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
                <h4 className="text-xl font-bold text-white mb-4">New Operator</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Complete new garage door opener installation with modern features and technology.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Latest technology and features</li>
                  <li>• Full warranty coverage</li>
                  <li>• Smart home compatibility</li>
                  <li>• Professional installation</li>
                </ul>
              </div>

              <div className="bg-black border border-gray-800 p-8 hover:border-red-500 transition-colors duration-300">
                <h4 className="text-xl font-bold text-white mb-4">Rehook Existing Operator</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Reconnecting your existing garage door opener to the new door system.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cost-effective option</li>
                  <li>• Maintains existing controls</li>
                  <li>• Quick installation</li>
                  <li>• Compatible with most operators</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Professional Installation */}
          <div className="bg-black border border-gray-800 p-8 text-center hover:border-red-500 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Professional Installation?</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Professional installation ensures your garage door operates safely and efficiently for years to come. 
              Our certified technicians handle proper sizing, spring tensioning, and safety testing.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="text-white font-semibold mb-2">Safety First</h4>
                <p className="text-gray-400">Proper spring tensioning and safety sensor installation</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Warranty Protection</h4>
                <p className="text-gray-400">Full manufacturer warranty when professionally installed</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Peace of Mind</h4>
                <p className="text-gray-400">Expert installation backed by our service guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DoorSpecifications; 