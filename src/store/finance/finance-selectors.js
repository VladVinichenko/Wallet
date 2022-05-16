const getData = (state) => state.finance.data

const totalOutlaySlct = state => state.finance.statistics.outlayTotal;
const totalIncomeSlct = state => state.finance.statistics.incomeTotal;
const categoriesStatisticsSlct = state => state.finance.statistics.statisticsByCategory;

export const selectorsFinance = {
	getData,
	totalOutlaySlct,
	totalIncomeSlct,
	categoriesStatisticsSlct,
}
