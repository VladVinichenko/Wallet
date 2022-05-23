import { createSlice } from '@reduxjs/toolkit'
import authOperation from './auth-operations'
import { toast } from 'react-toastify'

const initialState = {
	user: { email: null, name: null },
	accessToken: null,
	// refreshToken: null,
	isLoggedIn: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[authOperation.fetchRefreshToken.pending](state) {
			state.isLoggedIn = false
		},
		[authOperation.fetchRefreshToken.fulfilled](state, action) {
			state.user = action.payload.data.accessToken
			// state.user = action.payload.data.refreshToken
			state.isLoggedIn = true
		},
		[authOperation.fetchRefreshToken.rejected](state, action) {
			state.accessToken = null
			// state.refreshToken = null
			state.isLoggedIn = false
		},
		[authOperation.register.fulfilled](state, action) {
			state.user = action.payload.user
			state.accessToken = action.payload.accessToken
			// state.refreshToken = action.payload.refreshToken
			state.isLoggedIn = false
			// toast.success(`Check your email for verify: ${action.payload.user.email}`)
		},
		[authOperation.logIn.pending](state) {
			state.isLoggedIn = false
		},
		[authOperation.logIn.fulfilled](state, action) {
			state.user = action.payload.data.user
			state.accessToken = action.payload.data.accessToken
			// state.refreshToken = action.payload.data.refreshToken
			state.isLoggedIn = true
		},
		[authOperation.logOut.fulfilled](state, action) {
			state.user = { name: null, email: null }
			state.accessToken = null
			// state.refreshToken = null
			state.isLoggedIn = false
		},
		[authOperation.fetchCurrentUser.fulfilled](state, action) {
			state.user = action.payload.data.user
		},
		[authOperation.fetchVerify.fulfilled](state, action) {
			toast.success(`Your email has vefiried`)
		},
	},
})

export default authSlice.reducer
