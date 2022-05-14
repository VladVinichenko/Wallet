import { createSlice } from '@reduxjs/toolkit'
import authOperation from './auth-operations'

const initialState = {
	user: { name: null, email: null, password: null, passwordConfirm: null },
	token: null,
	isLoggedIn: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[authOperation.register.fulfilled](state, action) {
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoggedIn = true
		},
		[authOperation.logIn.fulfilled](state, action) {
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoggedIn = true
		},
		[authOperation.logOut.fulfilled](state, action) {
			state.user = { name: null, email: null }
			state.token = null
			state.isLoggedIn = false
		},
		[authOperation.fetchCurrentUser.fulfilled](state, action) {
			state.user = action.payload
			state.isLoggedIn = true
		},
	},
})

export default authSlice.reducer
