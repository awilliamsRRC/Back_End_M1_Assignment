export function calculatePortfolioPerformance(initial_money:number = 10000, current_money : number = 12000 ): any {
	let initialInvestment = initial_money;
	let currentValue = current_money;

    // I changed the divion to subtraction. multiply by -1 to get inverse.
	const profitOrLoss = (initialInvestment - currentValue) * -1;

	const percentageChange = (profitOrLoss / initialInvestment) * 100;
    // Type error: performance summary types do not match and not definied.
	let performanceSummary: string;
    // I used type casting to allow comparision.
	if (percentageChange > 20) {
		performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
	} else {
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