import { describe, expect, it } from 'vitest';
import { sanitizeSearchQuery } from '@/lib/utils';

describe('sanitizeSearchQuery', () => {
  it('trims whitespace and collapses repeated spaces', () => {
    expect(sanitizeSearchQuery('  los   angeles  ')).toBe('los angeles');
  });

  it('removes unsupported symbols from the query', () => {
    expect(sanitizeSearchQuery('manhattan; DROP TABLE users; --')).toBe(
      'manhattan DROP TABLE users -',
    );
  });

  it('keeps letters, numbers, spaces, apostrophes, and hyphens', () => {
    expect(sanitizeSearchQuery("new york's summer-fest 2026")).toBe(
      "new york's summer-fest 2026",
    );
  });

  it('returns an empty string for only invalid characters', () => {
    expect(sanitizeSearchQuery('$$$%%%')).toBe('');
  });
});
