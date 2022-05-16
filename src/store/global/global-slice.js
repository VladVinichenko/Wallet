import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	isModalLogoutOpen: false,
	isModalAddTransactionOpen: false,
}

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload
		},
		setIsModalLogoutOpen: (state, action) => {
			state.isModalLogoutOpen = action.payload
		},
		setIsModalAddTransactionOpen: (state, action) => {
			state.isModalAddTransactionOpen = action.payload
		},
		setCloseModal: (state) => {
			state.isModalLogoutOpen = false
			state.isModalAddTransactionOpen = false
		},
	},
})

export default globalSlice.reducer
export const { setIsLoading, setIsModalLogoutOpen, setIsModalAddTransactionOpen, setError, setCloseModal } =
	globalSlice.actions
