import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css';

// Hero slideshow images that need to be preloaded
const heroImages = [
  '/garagedoor3.webp',
  '/garagedoor2.webp', 
  '/garagedoor4.webp',
  '/garagedoor5.webp',
  '/slidelogodrift1.png' // Logo overlay
];

// Homepage hero image that needs to be preloaded
const homepageHeroImage = '/garagedoor1.webp';

// Preload hero images and wait for them to load
const preloadHeroImages = async () => {
  const imagePromises = heroImages.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => {
        console.warn(`Failed to preload hero image: ${src}`);
        resolve(src); // Resolve anyway to not block loading
      };
      img.src = src;
    });
  });
  
  try {
    await Promise.all(imagePromises);
    console.log('Hero images preloaded successfully');
  } catch (error) {
    console.warn('Some hero images failed to preload:', error);
  }
};

// Preload homepage hero image
const preloadHomepageHero = async () => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      console.log('Homepage hero image preloaded successfully');
      resolve(homepageHeroImage);
    };
    img.onerror = () => {
      console.warn(`Failed to preload homepage hero image: ${homepageHeroImage}`);
      resolve(homepageHeroImage); // Resolve anyway to not block loading
    };
    img.src = homepageHeroImage;
  });
};

// Remove loading state once app loads and hero images are ready
const removeLoadingState = () => {
  document.body.classList.add('app-loaded');
};

// Create root and render with performance optimizations
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use requestIdleCallback for better performance if available
const renderApp = async () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // Wait for homepage hero image to load first (critical for homepage)
  await preloadHomepageHero();
  
  // Then wait for slideshow hero images to load
  await preloadHeroImages();
  
  // Remove loading state after all hero images are loaded
  removeLoadingState();
};

if ('requestIdleCallback' in window) {
  requestIdleCallback(() => renderApp());
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(() => renderApp(), 0);
} 