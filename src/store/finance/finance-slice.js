import { createSlice } from '@reduxjs/toolkit'
import { fetchFinance , getStatistics, fetchTotalFinance} from './finance-operation'

import { toast } from 'react-toastify'

const example = [
	{
		data: 1600547654,
		type: 'decrement',
		category: { id: 888, name: 'Other' },
		comment: 'Gift for wife',
		summa: '300.00',
		total: '6900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
]

const initialState = {
	isLoading: false,
	error: null,
	statistics: {
		statisticsByCategory: [],
            incomeTotal: 0,
            outlayTotal: 0 
	},
	
	data: [...example],
	totalBalance: '6900.00',
}

const financeSlice = createSlice({
	name: 'finance',
	initialState,
	extraReducers: {
		[fetchFinance.pending]: (state) => {
			state.isLoading = true
			state.data = []
		},
		[fetchTotalFinance.pending]: (state) => {
			state.isLoading = true
			state.totalBalance = []
		},

		[fetchFinance.fulfilled]: (state, action) => {
			state.isLoading = false
			state.data = action.payload
			// console.log(action)
			toast.success('Ok')
		},
		[fetchTotalFinance.fulfilled]: (state, action) => {
			state.isLoading = false
			state.totalBalance = action.payload
			// console.log(action)
			toast.success('Ok')
		},

		[fetchFinance.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			toast.error('Error')
		},
		[getStatistics.pending]: (state) => {
			state.isLoading = true
		},
		[getStatistics.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.statistics.incomeTotal = action.payload.data.data.incomeStatistics;
			state.statistics.outlayTotal = action.payload.data.data.totalOutlayStatistics;	
			state.statistics.statisticsByCategory = action.payload.data.data.allCategoriesStatistics;			
			toast.success('Ok')		
		},
		[getStatistics.rejected]: (state, action) => { 
			state.isLoading = false
			state.error = action.payload
			toast.error('Error')
		},
		[fetchTotalFinance.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			toast.error('Error')
		},
		
		
	},
})

export default financeSlice.reducer
