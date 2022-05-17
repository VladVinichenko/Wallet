import { createSlice } from '@reduxjs/toolkit'
import { fetchFinance, fetchTotalFinance, fetchCategories, addTransaction } from './finance-operation'
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
	data: [...example],
	totalBalance: '6900.00',
	categories: [],
}

const financeSlice = createSlice({
	name: 'finance',
	initialState,
	extraReducers: {
		//================AllFinance
		[fetchFinance.pending]: (state) => {
			state.isLoading = true
			state.data = []
		},
		[fetchFinance.fulfilled]: (state, action) => {
			state.isLoading = false
			state.data = action.payload
			toast.success('Ok')
		},
		[fetchFinance.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			toast.error('Error')
		},
		//=================Balance
		[fetchTotalFinance.pending]: (state) => {
			state.isLoading = true
			state.totalBalance = []
		},
		[fetchTotalFinance.fulfilled]: (state, action) => {
			state.isLoading = false
			state.totalBalance = action.payload
			toast.success('Ok')
		},
		[fetchTotalFinance.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			toast.error('Error')
		},
		//====================Categories
		[fetchCategories.pending]: (state) => {
			state.isLoading = true
			state.categories = []
		},
		[fetchCategories.fulfilled]: (state, action) => {
			state.isLoading = false
			state.categories = action.payload
			console.log(action.payload)
			toast.success('Ok')
		},
		[fetchCategories.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			toast.error('Error')
		},
		//=======================Add_transaction
		[addTransaction.pending]: (state) => {
			state.isLoading = true
		},
		[addTransaction.fulfilled]: (state, action) => {
			state.isLoading = false
			state.data = action.payload
			toast.success('Transaction added')
		},
		[addTransaction.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			toast.error('Error')
		},
	},
})

export default financeSlice.reducer
