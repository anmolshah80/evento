'use client';

import { WifiOff } from 'lucide-react';

import { useOfflineStatus } from '@/hooks/use-offline-status';

const OfflineStatus = () => {
  const isOffline = useOfflineStatus();

  if (!isOffline) {
    return null;
  }

  return (
    <div className="border-b border-amber-500/40 bg-amber-500/10 px-4 py-3 text-center text-sm text-amber-100 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl items-center justify-center gap-2 font-medium">
        <WifiOff className="size-4" aria-hidden="true" />
        <span>
          You are offline. Some features may be unavailable until you reconnect.
        </span>
      </div>
    </div>
  );
};

export default OfflineStatus;
