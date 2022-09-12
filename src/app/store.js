import { configureStore, combineReducers } from '@reduxjs/toolkit'

import storage from 'reduxjs-toolkit-persist/lib/storage'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';



import authReducer from '../features/auth/auth_slice';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
	auth : authReducer
}));

const store = configureStore({
	reducer : persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
		serializableCheck: {
		  /* ignore persistance actions */
		  ignoredActions: [
			FLUSH,
			REHYDRATE,
			PAUSE,
			PERSIST,
			PURGE,
			REGISTER
		  ],
		},
	  }),
});

export const pstore = persistStore(store)

export default store;