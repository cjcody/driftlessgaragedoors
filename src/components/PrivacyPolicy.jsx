import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">This Privacy Policy describes how Driftless Garage Doors collects, uses, and protects your information when you use our website.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2">Information We Collect</h2>
        <p className="mb-4">We may collect information you provide directly to us, such as when you fill out a contact form.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2">How We Use Information</h2>
        <p className="mb-4">We use your information to respond to inquiries, provide services, and improve our website. We do not sell your personal information.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2">Cookies & Browser Storage</h2>
        <p className="mb-4">We do not use cookies for tracking, advertising, or analytics purposes. However, our website uses your browser's local storage and session storage to enhance your experience and improve performance. For example, we temporarily store image data to make the site load faster and remember if certain images have already been loaded during your current visit. This information is not used to track you across other websites and is not shared with third parties. No persistent cookies or third-party analytics tools are used on this site.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us through our website's contact page.</p>
        <div className="mt-8 text-center">
          <Link to="/" className="text-red-400 hover:underline text-lg font-semibold">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 