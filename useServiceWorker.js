// useServiceWorker.js
import { useEffect } from 'react';

const useServiceWorker = () => {
  useEffect(() => {
    const registerServiceWorker = async () => {
      try {
        // Register the service worker script
        if ('serviceWorker' in navigator) {
          const registration = await navigator.serviceWorker.register('/service-worker.js');
          console.log('Service Worker registered with scope:', registration.scope);
        }
      } catch (error) {
        console.error('Error registering Service Worker:', error);
      }
    };

    // Call the function to register the service worker
    registerServiceWorker();
  }, []);

  return null; // You can customize the return based on your needs
};

export default useServiceWorker;
