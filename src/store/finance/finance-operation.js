import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getFinance, getTotal, getStatisticsApi, getCategories } from 'api'

export const fetchFinance = createAsyncThunk('finance', async (page = 1) => {
	const { data } = await getFinance(page)
	const categoryArr = await getCategories()
	const { transition } = data.data
	return [...transition].map((elem) => {
		const category = categoryArr.data.data.filter((el) => {
			if (el._id === elem.category) {
				return el
			}
		})
		return { ...elem, category: category[0] }
	})
})
export const fetchTotalFinance = createAsyncThunk('finance/total-finance', async () => {
	const { data } = await getTotal()
	const { balance } = data.totalFinance[0]
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
	// const state = getState()
	// const allTransactions = state.finance.data
	try {
		const { data } = await axios.post('finance', transaction)
		return data
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
