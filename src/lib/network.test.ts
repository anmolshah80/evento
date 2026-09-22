import { describe, expect, it } from 'vitest';

import { isNetworkError } from '@/lib/network';

describe('isNetworkError', () => {
  it('detects fetch/network failures', () => {
    expect(isNetworkError(new TypeError('Failed to fetch'))).toBe(true);
    expect(isNetworkError(new Error('NetworkError: offline'))).toBe(true);
  });

  it('ignores unrelated application errors', () => {
    expect(isNetworkError(new Error('Validation failed'))).toBe(false);
    expect(isNetworkError('custom error')).toBe(false);
  });
});
