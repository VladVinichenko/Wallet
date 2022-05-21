import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { resetFinance } from 'store'
import { toast } from 'react-toastify'
import { store, token } from 'store'

const register = createAsyncThunk('auth/signup', async (credentials) => {
	console.log('registerCredentials:', credentials)
	try {
		const { data } = await axios.post('auth/signup', credentials)
		// token.set(data.token)
		console.log('registerData:', data)
		return data.data
	} catch (error) {
		if (error.response.status === 409) {
			toast.error('A user with this name already exists')
		}
		// TODO: Добавить обработку ошибки error.message
	}
})

// accessToken
// refreshToken

const logIn = createAsyncThunk('auth/signin', async (credentials) => {
	try {
		const { data } = await axios.post('auth/signin', credentials)
		token.set(data.data.accessToken)
		return data
	} catch (error) {
		if (error.response.status !== 401) {
			toast.error('The service is temporarily unavailable')
		} else {
			toast.error('Invalid login or password')
		}
	}
})

const logOut = createAsyncThunk('auth/signout', async () => {
	try {
		await axios.get('auth/signout')
		store.dispatch(resetFinance())
		token.unset()
	} catch (error) {
		toast.error('Sorry, you can not log out')
	}
})

const fetchRefreshToken = createAsyncThunk('auth/refresh-tokens', async (_, thunkAPI) => {
	const state = thunkAPI.getState()
	const refreshToken = state.auth.refreshToken
	!refreshToken && thunkAPI.rejectWithValue() //logout
	try {
		const { data } = await axios.post('auth/refresh-tokens', { refreshToken })
		token.set(data.data.accessToken)
		return data
	} catch (error) {
		console.error('NO-REFRESH')
		// TODO: Добавить обработку ошибки error.message
	}
})

const fetchCurrentUser = createAsyncThunk('users/current', async () => {
	try {
		const { data } = await axios.get('users/current')
		return data
	} catch (error) {
		// TODO: Добавить обработку ошибки error.message
	}
})

const fetchVerify = createAsyncThunk('auth/verify', async (verifyToken) => {
	console.log('verifyToken:', verifyToken)
	try {
		const { data } = await axios.get(`auth/verify/${verifyToken}`)
		// console.log(data)
		// return data
	} catch (error) {
		// TODO: Добавить обработку ошибки error.message
	}
})

const operations = {
	register,
	logOut,
	logIn,
	fetchCurrentUser,
	fetchRefreshToken,
	fetchVerify,
}

export default operations
