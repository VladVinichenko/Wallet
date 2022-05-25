import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getFinance, getTotal, getStatisticsApi, getCategories } from 'api'
import Cookies from 'js-cookie'
export const fetchFinance = createAsyncThunk('finance', async (page = 1) => {
	const { data } = await getFinance(page)
	const categoryArr = await getCategories()
	const { transactions } = data.data
	return [...transactions].map((elem) => {
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
	return data.data && data.data
})

export const getStatistics = createAsyncThunk(
	'transactions/getStatistics',
	async (credentials, { rejectWithValue }) => {
		const { month, year } = credentials
		try {
			const { data } = await getStatisticsApi(month, year)
			return data.data && data.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const addTransaction = createAsyncThunk('finance/add', async (transaction, { getState, rejectWithValue }) => {
	try {
		const { data } = await axios.post('transactions', transaction)
		return data && data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

export const fetchCategories = createAsyncThunk('finance/categories', async () => {
	const { data } = await getCategories()
	return data.data && data.data
})

export const fetchPrivat = createAsyncThunk('finances/courses', async () => {
	try {
		const { data } = await axios.get('finances/courses')
		const cookieData = JSON.stringify(data.data)
		data.data && Cookies.set('courses', cookieData, { expires: 1 })
	} catch (error) {
		return rejectWithValue(error.message)
	}
})
