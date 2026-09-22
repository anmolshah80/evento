'use client';

import { useEffect, useState } from 'react';

import { isBrowserOffline } from '@/lib/network';

const useOfflineStatus = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const updateStatus = () => {
      setIsOffline(isBrowserOffline());
    };

    updateStatus();

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, []);

  return isOffline;
};

export { useOfflineStatus };
