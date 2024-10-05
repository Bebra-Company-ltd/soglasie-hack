import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import popupsReducer from './popupsSlice'
import contractReducer from './contractsSlice'
import newContractReducer from './newContractSlice'
import userReducer from './userSlice'
import { userApi } from '@/api/user'
import { productApi } from '@/api/product'
import { agentApi } from '../api/agents'
import { contractApi } from '../api/contract'

export const store = configureStore({
	reducer: {
		product: productReducer,
		contract: contractReducer,
		popups: popupsReducer,
		newContract: newContractReducer,
		user: userReducer,
		[userApi.reducerPath]: userApi.reducer,
		[agentApi.reducerPath]: agentApi.reducer,
		[contractApi.reducerPath]: contractApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			userApi.middleware,
			productApi.middleware,
			contractApi.middleware,
			agentApi.middleware
		),
})
