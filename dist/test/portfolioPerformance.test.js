"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const portfolioPerformance_1 = require("../src/portfolio/portfolioPerformance");
describe('calculatePortfolioPerformance', () => {
    // Test case 1: Profit scenario(positive percentage change)
    it('should calculate profit and percentage change correctly when current value is higher than initial value', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 12500);
        // Check the initial investment
        expect(result.initialInvestment).toBe(10000);
        //Check current value
        expect(result.currentValue).toBe(12500);
        //the profit should be $2500
        expect(result.profitOrLoss).toBe(2500);
        // 20% profit
        expect(result.percentageChange).toBe(25);
        expect(result.performanceSummary).toBe('The portfolio has gained significantly with a profit of $2500.');
    });
    // Test case 2: Losss scenario(negative percentage change)
    it('should calculate loss and percentage change correctly when current value is lower than initial value', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 8000);
        // Check the initial investment
        expect(result.initialInvestment).toBe(10000);
        //Check the current value.
        expect(result.currentValue).toBe(8000);
        // The loss should be $2000
        expect(result.profitOrLoss).toBe(-2000);
        // 20% loss
        expect(result.percentageChange).toBe(-20);
        //Check performance summary
        expect(result.performanceSummary).toBe('The portfolio has performed poorly.');
    });
});
describe('findLargestHolding', () => {
    test('should return the asset wuth the highest value', () => {
        const assets = [
            { name: 'Stocks', value: 5000 },
            { name: 'Bonds', value: 3000 },
            { name: 'Real Estate', value: 2000 },
        ];
        const result = (0, portfolioPerformance_1.findLargestHolding)(assets);
        expect(result).toEqual({ name: 'Stocks', value: 5000 });
    });
});
describe('calculateAssetAllocation', () => {
    test('should correctly calculate the percentage allocation of assets', () => {
        const assets = [
            { name: 'Stocks', value: 5000 },
            { name: 'Bonds', value: 3000 },
            { name: 'Real Estate', value: 2000 },
        ];
        const result = (0, portfolioPerformance_1.calculateAssetAllocation)(assets);
        expect(result).toEqual([
            { name: 'Stocks', percentage: 50 },
            { name: 'Bonds', percentage: 30 },
            { name: 'Real Estate', percentage: 20 },
        ]);
    });
    test('should handle when one asset is much larger than others', () => {
        const assets = [
            { name: 'Stocks', value: 10000 },
            { name: 'Bonds', value: 1000 },
            { name: 'Real Estate', value: 2000 },
        ];
        const result = (0, portfolioPerformance_1.calculateAssetAllocation)(assets);
        expect(result).toEqual([
            { name: 'Stocks', percentage: 76.92 },
            { name: 'Bonds', percentage: 7.69 },
            { name: 'Real Estate', percentage: 15.38 },
        ]);
    });
});
