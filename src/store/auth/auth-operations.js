import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

axios.defaults.baseURL = 'https://wallet-api-goit.herokuapp.com/api/'

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`
	},
	unset() {
		axios.defaults.headers.common.Authorization = ''
	},
}

const register = createAsyncThunk('auth/signup', async (credentials) => {
	try {
		const { data } = await axios.post('auth/signup', credentials)

		// token.set(data.token)
		return data
	} catch (error) {
		if (error.response.status === 409) {
			toast.error('Пользователь с таким именем уже существует')
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
			toast.error('Сервіс тимчасово недоступний')
		} else {
			toast.error('Невірний логін або пароль')
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
	const persistedToken = state.auth.token

	if (persistedToken === null) {
		return thunkAPI.rejectWithValue()
	}

	token.set(persistedToken)
	try {
		const { data } = await axios.get('users/current')
		console.log(data)
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