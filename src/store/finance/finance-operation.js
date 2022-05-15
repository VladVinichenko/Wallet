import { createAsyncThunk } from '@reduxjs/toolkit'
import { getFinance, getTotal } from 'api'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/'
axios.defaults.headers.common[
	'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODE2NTc4NWQ3MDNhOWI4Yzc0MWQ5YiIsImlhdCI6MTY1MjY1NjcyOSwiZXhwIjoxNjUyNjYwMzI5fQ.fMhFbpZXEcMH5fUwYwfBk_ie4UpWUc2-kfmua26DCAg` // only test

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
	console.log(transition)
	return transition
})
export const fetchTotalFinance = createAsyncThunk('finance', async () => {
	const { data } = await getTotal()
	const { total } = data.totalFinance
	return total
})
