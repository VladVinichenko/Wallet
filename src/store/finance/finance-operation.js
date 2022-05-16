import { createAsyncThunk } from '@reduxjs/toolkit'
import { getFinance, getTotal } from 'api'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3001/api/'
axios.defaults.baseURL = 'https://wallet-api-goit.herokuapp.com/'
axios.defaults.headers.common[
	'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODE2NTc4NWQ3MDNhOWI4Yzc0MWQ5YiIsImlhdCI6MTY1MjY4NzY4NywiZXhwIjoxNjUyNjkxMjg3fQ.YGSfT75SmQ4iWngfK5_-I0vDySvfAGwGZIGvjek0h7s` // only test

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
