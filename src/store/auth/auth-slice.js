import { createSlice } from '@reduxjs/toolkit'
import authOperation from './auth-operations'

const initialState = {
	user: { email: null, name: null },
	// token: null,
	accessToken: null,
	refreshToken: null,
	isLoggedIn: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[authOperation.register.fulfilled](state, action) {
			state.user = action.payload.user
			state.accessToken = action.payload.accessToken
			state.refreshToken = action.payload.refreshToken
			state.isLoggedIn = false
		},
		[authOperation.logIn.fulfilled](state, action) {
			state.user = action.payload.data.user
			state.accessToken = action.payload.data.accessToken
			state.refreshToken = action.payload.data.refreshToken
			state.isLoggedIn = true
		},
		[authOperation.logOut.fulfilled](state, action) {
			state.user = { name: null, email: null }
			state.accessToken = null
			state.refreshToken = null
			state.isLoggedIn = false
		},
		[authOperation.fetchCurrentUser.fulfilled](state, action) {
			state.user = action.payload.data.user
			state.isLoggedIn = true
		},
	},
})

export default authSlice.reducer
