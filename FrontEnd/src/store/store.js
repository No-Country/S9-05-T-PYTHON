import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});
