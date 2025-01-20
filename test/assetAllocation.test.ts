// test/assetAllocation.test.ts
import { calculateAssetAllocation, Asset } from '../src/portfolio/assetAllocation';

describe('calculateAssetAllocation', () => {
  it('should calculate the correct allocation percentages', () => {
    const assets: Asset[] = [
      { name: 'Stocks', value: 5000 },
      { name: 'Bonds', value: 5000 },
    ];

    const allocations = calculateAssetAllocation(assets);

    expect(allocations['Stocks']).toBe(50);
    expect(allocations['Bonds']).toBe(50);
  });

  it('should handle different portfolio sizes', () => {
    const assets: Asset[] = [
      { name: 'Stocks', value: 7000 },
      { name: 'Bonds', value: 3000 },
    ];

    const allocations = calculateAssetAllocation(assets);

    expect(allocations['Stocks']).toBe(70);
    expect(allocations['Bonds']).toBe(30);
  });
});
