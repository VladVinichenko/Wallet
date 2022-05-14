import { configureStore } from '@reduxjs/toolkit'
// import { createLogger } from 'react-loader-spinner'
// import contactsReducer from '../redux/telbook/reducer'
import storage from 'redux-persist/lib/storage'
import authReducer from '../store/auth/auth-slice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST } from 'redux-persist'

// const logger = createLogger()

const middleware = {
	serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	},
	// logger,
}

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
}

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
		// contacts: contactsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(middleware),
	devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)
