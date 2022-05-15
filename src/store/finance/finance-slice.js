import { createSlice } from '@reduxjs/toolkit'
import { fetchFinance } from './finance-operation'
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
}

const financeSlice = createSlice({
	name: 'finance',
	initialState,
	extraReducers: {
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
	},
})

export default financeSlice.reducer
