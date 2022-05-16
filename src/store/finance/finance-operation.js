import { createAsyncThunk } from '@reduxjs/toolkit'
import { getFinance, getTotal, getCategories } from 'api'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/api/'
// axios.defaults.baseURL = 'https://wallet-api-goit.herokuapp.com/'
axios.defaults.headers.common[
	'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODEzMzJkZmQyNmQ0MWMwOTA3NTRjZSIsImlhdCI6MTY1MjczNTczNiwiZXhwIjoxNjUyNzM5MzM2fQ.9JseHCQWQ3MfVHKQ4g5VStAgSTlzx5EBQTz88D8ZY5I` // only test

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
	const { total } = data.totalFinance
	// console.log(total)
	return total
})
export const fetchCategories = createAsyncThunk('finance/categories', async () => {
	const { data } = await getCategories()
	const { categories } = data.categories
	console.log(categories)
	return categories
})
