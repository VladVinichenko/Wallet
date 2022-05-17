import { createAsyncThunk } from '@reduxjs/toolkit'
 import axios from 'axios'
import { getFinance, getTotal , getStatisticsApi, getCategories} from 'api'

/*  axios.defaults.baseURL = 'http://localhost:3004/api/' */
/* axios.defaults.baseURL = 'https://wallet-api-goit.herokuapp.com/api/' */
axios.defaults.headers.common[
	'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODEzMzJkZmQyNmQ0MWMwOTA3NTRjZSIsImlhdCI6MTY1MjgxNjk2NiwiZXhwIjoxNjUyODIwNTY2fQ.KdJmIQp4T3BdVMLmy8WC4op2H3ja3n1oeZJafmO24y8` // only test

// const token = {
// 	set(token) {
// 		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
// 	},
// 	unset() {
// 		axios.defaults.headers.common['Authorization'] = ``
// 	},
// }

export const fetchFinance = createAsyncThunk('finance', async () => {
	const { data } = await getFinance()
	const { transition } = data.data
	// console.log(transition)
	return transition
})
export const fetchTotalFinance = createAsyncThunk('finance/total-finance', async () => {
	const { data } = await getTotal()
	console.log('fetchTotalFinance', data)
	const { balance } = data.totalFinance
	// console.log(total)
	return balance
})


export const getStatistics = createAsyncThunk(
	'transactions/getStatistics',
	async (credentials, { rejectWithValue }) => {
		const { month, year } = credentials;
		const { number } = month;
	  
    try {
		const { data} = await getStatisticsApi(number, year)
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);


export const fetchCategories = createAsyncThunk('finance/categories', async () => {
	const { data } = await getCategories()
	// console.log(data)
	return data.data
})
