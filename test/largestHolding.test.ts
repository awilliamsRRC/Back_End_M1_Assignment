// test/largestHolding.test.ts
import { findLargestHolding, Asset } from '../src/portfolio/largestHolding';

describe('findLargestHolding', () => {
  it('should return the largest asset', () => {
    const assets: Asset[] = [
      { name: 'House', value: 100000 },
      { name: 'Stocks', value: 20000 },
      { name: 'Bonds', value: 15000 },
    ];

    const largest = findLargestHolding(assets);

    expect(largest?.name).toBe('House');
    expect(largest?.value).toBe(100000);
  });

  it('should return null for an empty portfolio', () => {
    const assets: Asset[] = [];
    const largest = findLargestHolding(assets);

    expect(largest).toBeNull();
  });
});
