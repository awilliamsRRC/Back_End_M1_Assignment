import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe('calculatePortfolioPerformance', () => {
    // Test case 1: Profit scenario(positive percentage change)
    it('should calculate profit and percentage change correctly when current value is higher than initial value',() => {
        const result = calculatePortfolioPerformance(10000,12500);

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
        const result = calculatePortfolioPerformance(10000,8000);

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