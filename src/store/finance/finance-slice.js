import { createSlice } from '@reduxjs/toolkit'
import { fetchFinance , getStatistics} from './finance-operation'
import { toast } from 'react-toastify'

const initialState = {
	isLoading: false,
	error: null,
	data: [],
	statistics: {
		statisticsByCategory: [],
            incomeTotal: 0,
            outlayTotal: 0 
	}
	
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
		
	},
})

export default financeSlice.reducer
