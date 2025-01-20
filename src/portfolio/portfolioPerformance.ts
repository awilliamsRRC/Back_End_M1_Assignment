
// Define an interface for the return type
export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
  }
  
  // Function to calculate portfolio performance
  export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {
    // Calculate profit or loss
    const profitOrLoss = currentValue - initialInvestment;
    
    // Calculate percentage change
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
  
    // Use a mapping approach instead of if statements
    const performanceSummary = percentageChange > 20
      ? `The portfolio has gained significantly with a profit of $${profitOrLoss}.`
      : `The portfolio has performed poorly.`;
  
    // Return the performance summary and related data
    return {
      initialInvestment,
      currentValue,
      profitOrLoss,
      percentageChange,
      performanceSummary,
    };
  }
  

// src/portfolio/largestHolding.ts

// Define an interface for an asset
export interface Asset {
    name: string;
    value: number;
  }
  
  // Function to find the largest holding
  export function findLargestHolding(assets: Asset[]): Asset | null {
    if (assets.length === 0) return null;
  
    return assets.reduce((largest, current) => {
      return current.value > largest.value ? current : largest;
    });
  }

  
// src/portfolio/assetAllocation.ts

// Import the Asset interface
import { Asset } from './largestHolding';

// Function to calculate asset allocation percentages
export function calculateAssetAllocation(assets: Asset[]): { [key: string]: number } {
  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);

  // Return the allocation percentage for each asset
  return assets.reduce((allocations, asset) => {
    allocations[asset.name] = (asset.value / totalValue) * 100;
    return allocations;
  }, {} as { [key: string]: number });
}
