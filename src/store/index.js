export * from './user'
export * from './finance'
export * from './global'
export * from './session'

import axios from 'axios'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import globalSlice from './global/global-slice'
import financeSlice from './finance/finance-slice'
import authReducer from '../store/auth/auth-slice'
import storage from 'redux-persist/lib/storage'
import { CustomLoader } from '../modules/common/CustomLoader'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST } from 'redux-persist'

// axios.defaults.baseURL = 'https://wallet-api-goit.herokuapp.com/api/'
axios.defaults.baseURL = 'http://localhost:3001/api/'

export const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`
	},
	unset() {
		axios.defaults.headers.common.Authorization = ''
	},
}

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
}

const logger = null

const middleware = {
	serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	},
	logger,
}

const rootReducer = combineReducers({
	finance: financeSlice,
	global: globalSlice,
	auth: persistReducer(authPersistConfig, authReducer),
})

export const store = configureStore({
	reducer: rootReducer,

	middleware: (getDefaultMiddleware) => getDefaultMiddleware(middleware),
	devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)
