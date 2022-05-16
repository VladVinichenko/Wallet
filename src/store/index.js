export * from './user'
export * from './finance'
export * from './global'
export * from './session'

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import globalSlice from './global/global-slice'
import financeSlice from './finance/finance-slice'
import authReducer from '../store/auth/auth-slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
}

const rootReducer = combineReducers({
	finance: financeSlice,
	global: globalSlice,
	auth: persistReducer(authPersistConfig, authReducer),
})

export const store = configureStore({
	reducer: rootReducer,

	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)
