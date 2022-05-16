const getData = (state) => state.finance.data
const getTotal = (state) => state.finance.totalBalance

export const selectorsFinance = {
	getData,
	getTotal
}
