import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function PrivacyPolicy() {
  const [facebookEnabled, setFacebookEnabled] = useState(false);

  useEffect(() => {
    // Load user's saved preference
    const savedPreference = localStorage.getItem('facebook-tracking-enabled');
    if (savedPreference !== null) {
      setFacebookEnabled(savedPreference === 'true');
    }
    
    // Update UI to reflect current state
    updateToggleUI();
  }, []);

  const updateToggleUI = () => {
    const toggle = document.getElementById('facebook-toggle');
    const slider = document.getElementById('facebook-toggle-slider');
    const status = document.getElementById('facebook-status');
    
    if (toggle && slider && status) {
      if (facebookEnabled) {
        toggle.classList.remove('bg-gray-600');
        toggle.classList.add('bg-red-500');
        slider.classList.remove('translate-x-1');
        slider.classList.add('translate-x-6');
        status.textContent = 'Currently enabled';
      } else {
        toggle.classList.remove('bg-red-500');
        toggle.classList.add('bg-gray-600');
        slider.classList.remove('translate-x-6');
        slider.classList.add('translate-x-1');
        status.textContent = 'Currently disabled';
      }
    }
  };

  const toggleFacebookTracking = () => {
    const newState = !facebookEnabled;
    setFacebookEnabled(newState);
    
    // Save preference
    localStorage.setItem('facebook-tracking-enabled', newState.toString());
    
    // Update UI
    updateToggleUI();
    
    // Apply the setting
    if (newState) {
      enableFacebookTracking();
    } else {
      disableFacebookTracking();
    }
  };

  const enableFacebookTracking = () => {
    // Re-enable Facebook SDK if it was disabled
    if (window.FB && window.FB.XFBML) {
      window.FB.XFBML.parse();
    }
    
    // Show Facebook content if it was hidden
    const facebookSections = document.querySelectorAll('.facebook-section');
    facebookSections.forEach(section => {
      section.style.display = 'block';
    });
  };

  const disableFacebookTracking = () => {
    // Hide Facebook content
    const facebookSections = document.querySelectorAll('.facebook-section');
    facebookSections.forEach(section => {
      section.style.display = 'none';
    });
    
    // Disable Facebook tracking and clear cookies
    if (window.disableFacebookTracking) {
      window.disableFacebookTracking();
    }
  };

  useEffect(() => {
    updateToggleUI();
  }, [facebookEnabled]);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <Helmet>
        <title>Privacy Policy | Driftless Garage Doors - La Crosse, Trempealeau, Winona & Surrounding Areas</title>
        <meta name="description" content="Read the privacy policy for Driftless Garage Doors, serving La Crosse, Trempealeau, Winona, Holmen, Onalaska, West Salem, Galesville, Centerville, Sparta, Tomah, Arcadia, La Crescent, Melrose, Mindoro and surrounding areas. Learn how we protect your information." />
        <link rel="canonical" href="https://driftlessgaragedoors.com/privacy-policy" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://driftlessgaragedoors.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Driftless Garage Doors - La Crosse, Trempealeau, Winona & Surrounding Areas" />
        <meta property="og:description" content="Read the privacy policy for Driftless Garage Doors, serving La Crosse, Trempealeau, Winona, Holmen, Onalaska, West Salem, Galesville, Centerville, Sparta, Tomah, Arcadia, La Crescent, Melrose, Mindoro and surrounding areas. Learn how we protect your information." />
        <meta property="og:image" content="https://driftlessgaragedoors.com/Zeiklogo3.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://driftlessgaragedoors.com/privacy-policy" />
        <meta property="twitter:title" content="Privacy Policy | Driftless Garage Doors - La Crosse, Trempealeau, Winona & Surrounding Areas" />
        <meta property="twitter:description" content="Read the privacy policy for Driftless Garage Doors, serving La Crosse, Trempealeau, Winona, Holmen, Onalaska, West Salem, Galesville, Centerville, Sparta, Tomah, Arcadia, La Crescent, Melrose, Mindoro and surrounding areas. Learn how we protect your information." />
        <meta property="twitter:image" content="https://driftlessgaragedoors.com/Zeiklogo3.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy | Driftless Garage Doors",
            "description": "Privacy policy for Driftless Garage Doors garage door services",
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
      <div className="max-w-3xl mx-auto">
        {/* Back to Home Link */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">This Privacy Policy describes how Driftless Garage Doors collects, uses, and protects your information when you use our website.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2">Information We Collect</h2>
        <p className="mb-4">We may collect information you provide directly to us, such as when you fill out a quote form.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2">How We Use Information</h2>
        <p className="mb-4">We use your information to respond to inquiries, provide services, and improve our website. We do not sell your personal information.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2">Cookies & Browser Storage</h2>
        <p className="mb-4">We do not use cookies for tracking, advertising, or analytics purposes. However, our website uses your browser's local storage and session storage to enhance your experience and improve performance. For example, we temporarily store image data to make the site load faster and remember if certain images have already been loaded during your current visit. This information is not used to track you across other websites and is not shared with third parties.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-2">Facebook Integration & Social Media</h2>
        <p className="mb-4">Our website includes optional Facebook integration through the Facebook SDK and Facebook Page Plugin. <strong>Facebook integration is disabled by default and only occurs when you explicitly enable it using the toggle controls on our showcase page or in the privacy settings below.</strong></p>
        <p className="mb-4">When Facebook integration is enabled, Facebook may collect certain information about your visit, including:</p>
        <ul className="list-disc list-inside mb-4 ml-4 text-gray-300">
          <li>Your IP address and browser information</li>
          <li>Pages you visit on our site</li>
          <li>Information about your Facebook account if you are logged in</li>
          <li>Data about your interactions with Facebook content on our site</li>
        </ul>
        <p className="mb-4">Facebook uses this information according to their own Privacy Policy and Data Policy. We do not have access to the specific data Facebook collects about you. Facebook may use cookies and similar technologies to track your activity across websites.</p>
        <p className="mb-4">If you have a Facebook account, you can control how Facebook uses your information through your Facebook privacy settings. You can also opt out of Facebook's use of cookies and similar technologies by visiting Facebook's Ad Preferences page or using browser settings to block third-party cookies.</p>
        <p className="mb-4">We also maintain a Facebook page for our business. When you interact with our Facebook page, Facebook's privacy policy and terms of service apply to those interactions.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-2">Your Rights & Choices</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside mb-4 ml-4 text-gray-300">
          <li>Request information about what personal data we collect about you</li>
          <li>Request correction of inaccurate personal data</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of certain data collection practices</li>
          <li>Control your privacy settings on social media platforms</li>
        </ul>
        
        <h2 id="tracking" className="text-2xl font-bold mt-8 mb-2">Cookie & Tracking Preferences</h2>
        <p className="mb-4">Facebook integration is disabled by default to protect your privacy. You can enable Facebook social features if you choose:</p>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold text-white">Facebook Social Features</h3>
              <p className="text-gray-400 text-sm">Enable Facebook content and tracking</p>
            </div>
            <div className="flex-shrink-0">
              <button 
                id="facebook-toggle"
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 min-w-[2.75rem]"
                onClick={() => toggleFacebookTracking()}
              >
                <span 
                  id="facebook-toggle-slider"
                  className="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out translate-x-1"
                ></span>
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            <span id="facebook-status">Currently disabled</span>. When enabled, Facebook can collect data about your visit to provide social features. 
            When disabled, Facebook content will be hidden and no tracking will occur.
          </p>
        </div>
        
        <div className="bg-blue-900 border border-blue-700 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">How to Control Facebook Tracking</h3>
          <ul className="list-disc list-inside text-sm text-blue-200 space-y-1">
            <li><strong>Browser Settings:</strong> Block third-party cookies in your browser settings</li>
            <li><strong>Facebook Settings:</strong> Adjust your Facebook privacy settings and ad preferences</li>
            <li><strong>Privacy Extensions:</strong> Use browser extensions that block tracking</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-2">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us.</p>
        <div className="mt-8 text-center">
          <Link to="/" className="text-red-400 hover:underline text-lg font-semibold">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 