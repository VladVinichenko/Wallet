import { formatNumber } from "lib";

const getData = (state) => state.finance.data
const getTotal = (state) => formatNumber(state.finance.totalBalance)
const getCategories = (state) => state.finance.categories

const totalOutlaySlct = state => formatNumber(state.finance.statistics.outlayTotal);
const totalIncomeSlct = state => formatNumber(state.finance.statistics.incomeTotal);
const categoriesStatisticsSlct = state => state.finance.statistics.statisticsByCategory;

export const selectorsFinance = {
	getData,
	totalOutlaySlct,
	totalIncomeSlct,
	categoriesStatisticsSlct,
	getTotal,
	getCategories,
}
