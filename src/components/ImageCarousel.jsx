import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageCarousel({ csvUrl }) {
  // Check cache immediately to set initial loading state
  const getInitialState = () => {
    if (!csvUrl) return { images: [], loading: false, error: null, cacheStatus: '', imagesLoaded: false };
    
    try {
      const CACHE_KEY = `carousel_cache_${btoa(csvUrl)}`;
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const cacheData = JSON.parse(cached);
        const isStale = Date.now() - cacheData.timestamp > (30 * 60 * 1000);
        if (!isStale && cacheData.csvUrl === csvUrl && cacheData.images.length > 0) {
          return { 
            images: cacheData.images, 
            loading: false, 
            error: null, 
            cacheStatus: 'Loaded from cache',
            imagesLoaded: cacheData.preloaded || false // Use cached preload status
          };
        }
      }
    } catch (err) {
      console.warn('Failed to check initial cache:', err);
    }
    
    return { images: [], loading: true, error: null, cacheStatus: '', imagesLoaded: false };
  };

  const initialState = getInitialState();
  const [images, setImages] = useState(initialState.images);
  const [loading, setLoading] = useState(initialState.loading);
  const [error, setError] = useState(initialState.error);
  const [cacheStatus, setCacheStatus] = useState(initialState.cacheStatus);
  const [imagesLoaded, setImagesLoaded] = useState(initialState.imagesLoaded);

  // Cache configuration
  const CACHE_KEY = `carousel_cache_${btoa(csvUrl)}`;
  const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
  const IMAGE_PRELOAD_DELAY = 100; // ms between image preloads

  // Helper function to check if cache is valid
  const isCacheValid = (cacheData) => {
    if (!cacheData || !cacheData.timestamp) return false;
    return Date.now() - cacheData.timestamp < CACHE_DURATION;
  };

  // Helper function to save cache
  const saveCache = (data) => {
    try {
      const cacheData = {
        images: data,
        timestamp: Date.now(),
        csvUrl: csvUrl,
        preloaded: true // Mark that images have been preloaded
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (err) {
      console.warn('Failed to save cache:', err);
    }
  };

  // Helper function to load cache
  const loadCache = () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const cacheData = JSON.parse(cached);
        if (isCacheValid(cacheData) && cacheData.csvUrl === csvUrl) {
          return {
            images: cacheData.images,
            preloaded: cacheData.preloaded || false
          };
        }
      }
    } catch (err) {
      console.warn('Failed to load cache:', err);
    }
    return null;
  };

  // Helper function to preload images
  const preloadImages = (imageUrls) => {
    let loadedCount = 0;
    const totalImages = imageUrls.length;
    
    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }
    
    // Set a timeout fallback to ensure we don't get stuck loading
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, 5000); // 5 second timeout
    
    imageUrls.forEach((imageData, index) => {
      setTimeout(() => {
        const img = new Image();
        img.src = imageData.desktopUrl;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            clearTimeout(timeoutId);
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            clearTimeout(timeoutId);
            setImagesLoaded(true);
          }
        };
      }, index * IMAGE_PRELOAD_DELAY);
    });
  };

  // Helper function to parse CSV
  const parseCSV = (csvText) => {
    const lines = csvText.split('\n').filter(line => line.trim());
    const parsedImages = [];
    
    // Skip header row if it exists
    const startIndex = lines[0].toLowerCase().includes('url') || lines[0].toLowerCase().includes('image') ? 1 : 0;
    
    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Simple CSV parsing - split by comma and handle quoted values
      const columns = line.split(',').map(col => col.trim().replace(/^"|"$/g, ''));
      
      if (columns[0] && columns[0].startsWith('http')) {
        parsedImages.push({
          desktopUrl: columns[0],
          mobileUrl: columns[1] || columns[0],
          caption: columns[2] || ''
        });
      }
    }
    
    return parsedImages;
  };

  // Main fetch function with caching
  const fetchImages = async (useCache = true) => {
    try {
      setLoading(true);
      setError(null);
      setImagesLoaded(false);
      setCacheStatus(useCache ? 'Loading from server...' : 'Refreshing cache...');
      
      // Fetch the CSV from the published Google Sheet
      const response = await fetch(csvUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch CSV: ${response.status}`);
      }
      
      const csvText = await response.text();
      const parsedImages = parseCSV(csvText);
      
      if (parsedImages.length === 0) {
        throw new Error('No valid images found in CSV');
      }
      
      setImages(parsedImages);
      
      // Save to cache
      saveCache(parsedImages);
      
      // Start preloading images
      preloadImages(parsedImages);
      
      setCacheStatus(useCache ? 'Loaded from server' : 'Cache refreshed');
      
      // Clear cache status after 3 seconds
      setTimeout(() => setCacheStatus(''), 3000);
      
    } catch (err) {
      console.error('Error fetching images:', err);
      setError(err.message);
      setCacheStatus('Error loading images');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (csvUrl) {
      // If we already have images loaded from cache, just handle background tasks
      if (images.length > 0 && !loading) {
        // Check if images are already preloaded from cache
        try {
          const cached = localStorage.getItem(CACHE_KEY);
          if (cached) {
            const cacheData = JSON.parse(cached);
            if (cacheData.preloaded) {
              // Images are already preloaded, no need to preload again
              setImagesLoaded(true);
            } else {
              // Start preloading images in background
              preloadImages(images);
            }
          } else {
            // No cache data, preload images
            preloadImages(images);
          }
        } catch (err) {
          console.warn('Failed to check cache preload status:', err);
          // Fallback to preloading
          preloadImages(images);
        }
        
        // Clear cache status after 3 seconds
        setTimeout(() => setCacheStatus(''), 3000);
        
        // Only refresh cache in background if it's stale (older than 30 minutes)
        try {
          const cached = localStorage.getItem(CACHE_KEY);
          if (cached) {
            const cacheData = JSON.parse(cached);
            const isStale = Date.now() - cacheData.timestamp > CACHE_DURATION;
            if (isStale) {
              // Cache is stale, refresh in background
              setTimeout(() => fetchImages(false), 1000);
            }
          }
        } catch (err) {
          console.warn('Failed to check cache age:', err);
        }
        return;
      }
      
      // Check cache first before setting loading state
      const cachedData = loadCache();
      if (cachedData && cachedData.images.length > 0) {
        // We have cached data, don't show loading screen
        setImages(cachedData.images);
        setLoading(false);
        setError(null);
        setCacheStatus('Loaded from cache');
        
        // Set imagesLoaded based on cache preload status
        if (cachedData.preloaded) {
          setImagesLoaded(true);
        } else {
          // Start preloading images in background
          preloadImages(cachedData.images);
        }
        
        // Clear cache status after 3 seconds
        setTimeout(() => setCacheStatus(''), 3000);
        
        // Only refresh cache in background if it's stale (older than 30 minutes)
        try {
          const cached = localStorage.getItem(CACHE_KEY);
          if (cached) {
            const cacheData = JSON.parse(cached);
            const isStale = Date.now() - cacheData.timestamp > CACHE_DURATION;
            if (isStale) {
              // Cache is stale, refresh in background
              setTimeout(() => fetchImages(false), 1000);
            }
          }
        } catch (err) {
          console.warn('Failed to check cache age:', err);
        }
      } else {
        // No cache, fetch from server
        fetchImages(true);
      }
    }
    
    // Cleanup function to clear cache status when component unmounts
    return () => {
      setCacheStatus('');
    };
  }, [csvUrl]);

  // Manual refresh function
  const handleRefresh = () => {
    fetchImages(false);
  };

  if (loading || !imagesLoaded) {
    return (
      <div className="bg-gradient-to-br from-red-600 to-red-800 h-96 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl font-semibold">
            {loading ? 'Loading Images...' : 'Preparing Images...'}
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-red-600 to-red-800 h-96 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative text-center text-white">
          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-xl font-semibold mb-2">Error Loading Images</p>
          <p className="text-sm opacity-75 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg transition-all duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="bg-gradient-to-br from-red-600 to-red-800 h-96 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative text-center text-white">
          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-xl font-semibold">No Images Available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={5000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        className="h-96"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )
        }
      >
        {images.map((image, index) => (
          <div key={index} className="h-96 relative">
            <picture>
              <source media="(max-width: 639px)" srcSet={image.mobileUrl} />
              <img
                src={image.desktopUrl}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${image.desktopUrl}`);
                  e.target.style.display = 'none';
                }}
              />
            </picture>
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <p className="text-center font-semibold">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </Carousel>
      
      {images.length > 1 && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {images.length} Photos
        </div>
      )}
    </div>
  );
}

export default ImageCarousel; 