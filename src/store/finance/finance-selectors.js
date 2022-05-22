import { createSelector } from '@reduxjs/toolkit'
import { formatNumber } from 'lib'

const getData = (state) => state.finance.data
const getTotal = (state) => formatNumber(state.finance.totalBalance)
const getCategories = (state) => state.finance.categories
const getAviableStatistics = (state) => state.finance.aviableStatistics

const totalOutlaySlct = (state) => formatNumber(state.finance.statistics.outlayTotal)
const totalIncomeSlct = (state) => formatNumber(state.finance.statistics.incomeTotal)
const categoriesStatisticsSlct = (state) => state.finance.statistics.statisticsByCategory
const getPageCount = (state) => state.finance.page

const getFormatData = createSelector([getData], (data) => {
	return data.map((transaction) => {
		return { ...transaction, sum: formatNumber(transaction.sum), balance: formatNumber(transaction.balance) }
	})
})

const getFormatcategoriesStatistics = createSelector([categoriesStatisticsSlct], (data) => {
	return data.map((transaction) => {
		return { ...transaction, sum: formatNumber(transaction.sum) }
	})
})

export const selectorsFinance = {
	getData,
	totalOutlaySlct,
	totalIncomeSlct,
	categoriesStatisticsSlct,
	getTotal,
	getCategories,
	getPageCount,
	getFormatData,
	getFormatcategoriesStatistics,
	getAviableStatistics,
}
