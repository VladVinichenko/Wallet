const getIsLoading = (state) => {
	const global = state.global.isLoading
	const finance = state.finance.isLoading
	return global || finance ? true : false
}

const getIsModalLogoutOpen = (state) => state.global.isModalLogoutOpen
const getIsModalAddTransactionOpen = (state) => state.global.isModalAddTransactionOpen
const getTheme = (state) => state.global.theme

export const selectorsGlobal = {
	getIsLoading,
	getIsModalLogoutOpen,
	getIsModalAddTransactionOpen,
	getTheme,
}
