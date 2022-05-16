const getData = (state) => state.finance.data
const getTotal = (state) => state.finance.totalBalance
const getCategories = (state) => state.finance.categories

export const selectorsFinance = {
	getData,
	getTotal,
	getCategories,
}
