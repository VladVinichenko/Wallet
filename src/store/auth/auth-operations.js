import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { resetFinance } from 'store'
import { toast } from 'react-toastify'
import { store, token } from 'store'

const register = createAsyncThunk('auth/signup', async (credentials) => {
	try {
		const { data } = await axios.post('auth/signup', credentials)
		// toast.success(`Check your email for verify: ${data.email}`)

		return data.data && data.data
	} catch (error) {
		if (error.response.status === 409) {
			toast.error('A user with this name already exists')
		}
		console.error(error.message)
	}
})

const logIn = createAsyncThunk('auth/signin', async (credentials) => {
	try {
		const { data } = await axios.post('auth/signin', credentials)
		token.set(data.data.accessToken)
		toast.success(`Welome!`)
		return data && data
	} catch (error) {
		if (error.response.status === 401) {
			toast.error('The service is temporarily unavailable')
		} else {
			toast.error('Invalid login or password')
		}
		return rejectWithValue(error.message)
	}
})

const logOut = createAsyncThunk('auth/signout', async () => {
	try {
		await axios.get('auth/signout')
		store.dispatch(resetFinance())
		token.unset()
		toast.success('You are logging out')
	} catch (error) {
		toast.error('Sorry, you can not log out')
		return rejectWithValue(error.message)
	}
})

const fetchRefreshToken = createAsyncThunk('auth/refresh', async () => {
	try {
		const { data } = await axios.get('auth/refresh')
		token.set(data?.data.accessToken)
		data && data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

const fetchCurrentUser = createAsyncThunk('users/current', async () => {
	try {
		const { data } = await axios.get('users/current')
		return data && data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

const fetchVerify = createAsyncThunk('auth/verify', async (verifyToken) => {
	try {
		await axios.get(`auth/verify/${verifyToken}`)
	} catch (error) {
		return rejectWithValue(error.message)
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
