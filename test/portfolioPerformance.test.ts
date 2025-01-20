// test/portfolioPerformance.test.ts
import { calculatePortfolioPerformance, PortfolioPerformance } from '../src/portfolio/portfolioPerformance';

describe('calculatePortfolioPerformance', () => {
  it('should calculate the performance of the portfolio correctly', () => {
    const result: PortfolioPerformance = calculatePortfolioPerformance(10000, 12000);
    
    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(12000);
    expect(result.profitOrLoss).toBe(2000);
    expect(result.percentageChange).toBe(20);
    expect(result.performanceSummary).toBe('The portfolio has performed poorly.');
  });

  it('should handle different inputs for performance', () => {
    const result: PortfolioPerformance = calculatePortfolioPerformance(5000, 6000);
    
    expect(result.profitOrLoss).toBe(1000);
    expect(result.percentageChange).toBe(20);
    expect(result.performanceSummary).toBe('The portfolio has performed poorly.');
  });
});
