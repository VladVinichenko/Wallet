export * from './user'
export * from './finance'
export * from './global'
export * from './session'

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import globalSlice from './global/global-slice'
import financeSlice from './finance/finance-slice'

const rootReducer = combineReducers({
	finance: financeSlice,
	global: globalSlice,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV === 'development',
})
