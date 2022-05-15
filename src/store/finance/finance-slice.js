import { createSlice } from '@reduxjs/toolkit'
import { fetchFinance } from './finance-operation'
import { toast } from 'react-toastify'

const initialState = {
	isLoading: false,
	error: null,
	data: [],
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
