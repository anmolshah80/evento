const NETWORK_ERROR_PATTERNS = [
  'network',
  'offline',
  'failed to fetch',
  'fetch failed',
  'load failed',
  'connection',
  'timeout',
  'browser offline',
];

const isNetworkError = (error: unknown): boolean => {
  if (!error) return false;

  if (typeof error === 'string') {
    return NETWORK_ERROR_PATTERNS.some((pattern) =>
      error.toLowerCase().includes(pattern),
    );
  }

  if (error instanceof TypeError) {
    return NETWORK_ERROR_PATTERNS.some((pattern) =>
      error.message.toLowerCase().includes(pattern),
    );
  }

  if (error instanceof Error) {
    return NETWORK_ERROR_PATTERNS.some((pattern) =>
      error.message.toLowerCase().includes(pattern),
    );
  }

  return false;
};

const isBrowserOffline = () => {
  if (typeof navigator === 'undefined') {
    return false;
  }

  return !navigator.onLine;
};

export { isBrowserOffline, isNetworkError };
