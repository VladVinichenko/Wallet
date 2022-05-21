import { createSlice } from '@reduxjs/toolkit'
import { fetchFinance, getStatistics, fetchTotalFinance, fetchCategories, addTransaction } from './finance-operation'

import { toast } from 'react-toastify'

const initialState = {
	isLoading: false,
	error: null,
	statistics: {
		statisticsByCategory: [],
		incomeTotal: 0,
		outlayTotal: 0,
	},
	page: 0,
	data: [],
	totalBalance: '',
	// categories: [],
}

const financeSlice = createSlice({
	name: 'finance',
	initialState,
	reducers: {
		resetFinance: (state, action) => {
			console.log('!!!!!!')
			Object.assign(state, initialState)
		},
	},
	extraReducers: {
		//================AllFinance
		[fetchFinance.pending]: (state) => {
			state.isLoading = true
		},
		[fetchFinance.fulfilled]: (state, action) => {
			state.isLoading = false
			state.data = [...state.data, ...action.payload]
			state.page = state.page + 1
		},
		[fetchFinance.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			toast.error('Error fetch finance')
		},
		//=========Statistics
		[getStatistics.pending]: (state) => {
			state.isLoading = true
		},
		[getStatistics.fulfilled]: (state, action) => {
			state.isLoading = false
			state.statistics.incomeTotal = action.payload.incomeStatistics
			state.statistics.outlayTotal = action.payload.totalOutlayStatistics
			state.statistics.statisticsByCategory = action.payload.statisticsByCategory
		},
		[getStatistics.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			toast.error('Error fetch statictics')
		},
		//=================Balance
		[fetchTotalFinance.pending]: (state) => {
			state.isLoading = true
			state.totalBalance = ''
		},
		[fetchTotalFinance.fulfilled]: (state, action) => {
			console.log('fulfilled', action.payload)
			state.isLoading = false
			state.totalBalance = action.payload.user.balance
		},
		[fetchTotalFinance.rejected]: (state, action) => {
			console.log('rejected', action.payload)
			state.isLoading = false
			state.error = action.payload
			toast.error('Error fetch balance')
		},
		//====================Categories
		[fetchCategories.pending]: (state) => {
			state.isLoading = true
			state.categories = []
		},
		[fetchCategories.fulfilled]: (state, action) => {
			state.isLoading = false
			state.categories = action.payload
		},
		[fetchCategories.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			toast.error('Error fetch categories')
		},
		//=======================Add_transaction
		[addTransaction.pending]: (state) => {
			state.isLoading = true
		},
		[addTransaction.fulfilled]: (state) => {
			state.isLoading = false
			toast.success('Transaction added')
		},
		[addTransaction.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			toast.error('Error add transaction')
		},
	},
})

export default financeSlice.reducer
export const { resetFinance } = financeSlice.actions
