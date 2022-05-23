import { createSlice } from '@reduxjs/toolkit'
import authOperation from './auth-operations'
import { toast } from 'react-toastify'

const initialState = {
	user: { email: null, name: null },
	accessToken: null,
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
			state.isLoggedIn = true
		},
		[authOperation.fetchRefreshToken.rejected](state) {
			state.accessToken = null
			state.isLoggedIn = false
		},
		[authOperation.register.fulfilled](state, action) {
			state.user = action.payload.user
			state.accessToken = action.payload.accessToken
			state.isLoggedIn = false
			toast.success(`Check your email for verifying: ${action.payload.user.email}`)
		},
		[authOperation.logIn.pending](state) {
			state.isLoggedIn = false
		},
		[authOperation.logIn.fulfilled](state, action) {
			state.user = action.payload.data.user
			state.accessToken = action.payload.data.accessToken
			state.isLoggedIn = true
		},
		[authOperation.logOut.fulfilled](state) {
			state.user = { name: null, email: null }
			state.accessToken = null
			state.isLoggedIn = false
		},
		[authOperation.fetchCurrentUser.fulfilled](state, action) {
			state.user = action.payload.data.user
		},
		[authOperation.fetchVerify.fulfilled]() {
			toast.success(`Your email has been verified`)
		},
	},
})

export default authSlice.reducer
