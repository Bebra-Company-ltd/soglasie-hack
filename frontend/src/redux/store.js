import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import popupsReducer from './popupsSlice'
import userReducer from './userSlice'
import { userApi } from '@/api/user'
import { productApi } from '@/api/product'

export const store = configureStore({
	reducer: {
		product: productReducer,
		popups: popupsReducer,
		user: userReducer,
		[userApi.reducerPath]: userApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			userApi.middleware,
			productApi.middleware
		),
})
