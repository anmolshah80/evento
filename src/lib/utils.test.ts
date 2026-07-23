import { describe, expect, it } from 'vitest';
import { sanitizeSearchQuery } from '@/lib/utils';

describe('sanitizeSearchQuery', () => {
  it('trims whitespace and collapses repeated spaces', () => {
    expect(sanitizeSearchQuery('  los   angeles  ')).toBe('los angeles');
  });

  it('keeps letters, numbers, spaces, apostrophes, and hyphens', () => {
    expect(sanitizeSearchQuery("new york's summer-fest 2026")).toBe(
      "new york's summer-fest 2026",
    );
  });
});
