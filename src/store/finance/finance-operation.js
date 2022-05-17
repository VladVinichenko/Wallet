import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getFinance, getTotal, getStatisticsApi, getCategories } from 'api'

axios.defaults.baseURL = 'http://localhost:3001/api/'
// axios.defaults.baseURL = 'https://wallet-api-goit.herokuapp.com/api/'
axios.defaults.headers.common[
	'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODEzMzJkZmQyNmQ0MWMwOTA3NTRjZSIsImlhdCI6MTY1Mjc5MDM2NSwiZXhwIjoxNjUyNzkzOTY1fQ.gBNtLpcfPl8e3ZFVBXvW2C4P3T_7BtVyyT7rA-tp9A8` // only test

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
		const { month, year } = credentials

		try {
			const { data } = await getStatisticsApi(month, year)
			return data.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const addTransaction = createAsyncThunk('finance/add', async (transaction, { getState, rejectWithValue }) => {
	const state = getState()
	const allTransactions = state.data

	try {
		const { data } = await axios.post('finance', transaction)
		const newData = [...allTransactions, data]

		return newData
	} catch (error) {
		console.dir(error)
		return rejectWithValue(error.message)
	}
})

export const fetchCategories = createAsyncThunk('finance/categories', async () => {
	const { data } = await getCategories()
	// console.log(data)
	return data.data
})
