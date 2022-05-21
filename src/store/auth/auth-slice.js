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
		[authOperation.fetchRefreshToken.pending](state) {
			state.isLoggedIn = false
			// console.log('fetchRefreshToken: pending')
		},
		[authOperation.fetchRefreshToken.fulfilled](state, action) {
			state.user = action.payload.data.accessToken
			// console.log('fetchRefreshToken: fulfilled')
			state.isLoggedIn = true
		},
		[authOperation.fetchRefreshToken.rejected](state, action) {
			state.accessToken = null
			state.refreshToken = null
			state.isLoggedIn = false
		},
		[authOperation.register.fulfilled](state, action) {
			state.user = action.payload.user
			state.accessToken = action.payload.accessToken
			state.refreshToken = action.payload.refreshToken
			state.isLoggedIn = false
		},
		[authOperation.logIn.pending](state) {
			state.isLoggedIn = false
			// console.log('logIn: pending')
		},
		[authOperation.logIn.fulfilled](state, action) {
			state.user = action.payload.data.user
			state.accessToken = action.payload.data.accessToken
			state.refreshToken = action.payload.data.refreshToken
			state.isLoggedIn = true
			// console.log('logIn: fulfilled')
		},
		[authOperation.logOut.fulfilled](state, action) {
			state.user = { name: null, email: null }
			state.accessToken = null
			state.refreshToken = null
			state.isLoggedIn = false
		},
		[authOperation.fetchCurrentUser.fulfilled](state, action) {
			state.user = action.payload.data.user
		},
	},
})

export default authSlice.reducer
