"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePortfolioPerformance = calculatePortfolioPerformance;
exports.findLargestHolding = findLargestHolding;
exports.calculateAssetAllocation = calculateAssetAllocation;
function calculatePortfolioPerformance(initial_money = 10000, current_money = 12000) {
    let initialInvestment = initial_money;
    let currentValue = current_money;
    // I changed the divion to subtraction. multiply by -1 to get inverse.
    const profitOrLoss = (initialInvestment - currentValue) * -1;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
    // Type error: performance summary types do not match and not definied.
    let performanceSummary;
    // I used type casting to allow comparision.
    if (percentageChange > 20) {
        performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
    }
    else {
        performanceSummary = `The portfolio has performed poorly.`;
    }
    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}
// function that  Finds largest holding.
function findLargestHolding(assets) {
    if (assets.length === 0) {
        return null;
    }
    // Start with first asset
    let largestHolding = assets[0];
    for (let i = 1; i < assets.length; i++) {
        if (assets[i].value > largestHolding.value) {
            // Update the largest holding
            largestHolding = assets[i];
        }
    }
    return largestHolding;
}
// Function that shows percentage of assest.
function calculateAssetAllocation(assets) {
    //reduce() goes through each item in the assets array, 
    // and for each asset, it adds its value to a running total (sum).
    //The initial value of sum is set to 0 (the second argument to reduce()).
    const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
    // If there are no assets, return an empty array.
    if (totalValue === 0) {
        return [];
    }
    // the map() method is used to create a new array, where each item represents an asset with its name and the calculated percentage.
    return assets.map(asset => ({
        name: asset.name,
        percentage: Math.round((asset.value / totalValue) * 100 * 100) / 100,
    }));
}
//# sourceMappingURL=portfolioPerformance.js.map