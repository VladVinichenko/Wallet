import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getFinance, getTotal, getStatisticsApi, getCategories } from 'api'

export const fetchFinance = createAsyncThunk('transactions', async (page = 1) => {
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

export const fetchTotalFinance = createAsyncThunk('transactions/balance', async () => {
	const { data } = await getTotal()
	return data.data && data.data
})

export const getStatistics = createAsyncThunk('transactions/statistics', async (credentials, { rejectWithValue }) => {
	const { month, year } = credentials
	try {
		const { data } = await getStatisticsApi(month, year)
		return data.data && data.data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

export const addTransaction = createAsyncThunk(
	'transactions/add',
	async (transaction, { getState, rejectWithValue }) => {
		try {
			const { data } = await axios.post('transactions', transaction)
			return data && data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const fetchCategories = createAsyncThunk('categories', async () => {
	const { data } = await getCategories()
	return data.data && data.data
})
