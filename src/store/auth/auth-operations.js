import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { token } from 'store'

const register = createAsyncThunk('auth/signup', async (credentials) => {
	try {
		const { data } = await axios.post('auth/signup', credentials)
		// token.set(data.token)
		return data
	} catch (error) {
		if (error.response.status === 409) {
			toast.error('A user with this name already exists')
		}
		// TODO: Добавить обработку ошибки error.message
	}
})

const logIn = createAsyncThunk('auth/signin', async (credentials) => {
	try {
		const { data } = await axios.post('auth/signin', credentials)
		token.set(data.token)
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
		await axios.post('auth/signout')
		token.unset()
	} catch (error) {
		// TODO: Добавить обработку ошибки error.message
	}
})

const fetchCurrentUser = createAsyncThunk('users/current', async (_, thunkAPI) => {
	const state = thunkAPI.getState()
	const persistedtoken = state.auth.token

	if (persistedtoken === null) {
		return thunkAPI.rejectWithValue()
	}
	token.set(persistedAssesToken)

	try {
		const { data } = await axios.get('users/current')
		return data
	} catch (error) {
		// TODO: Добавить обработку ошибки error.message
	}
})

const operations = {
	register,
	logOut,
	logIn,
	fetchCurrentUser,
}

export default operations
