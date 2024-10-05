import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from './config'

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		// prepareHeaders: (headers) => {
		// 	headers.set(
		// 		'Authorization',
		// 		`Bearer ${localStorage.getItem('token')}`
		// 	)
		// 	return headers
		// },
	}),
	tagTypes: ['Products'],
	endpoints: (builder) => ({
		getAllRisks: builder.query({
			query: () => '/risk/getAllRisk',
			providesTags: ['Products'],
		}),
		getAllProduct: builder.query({
			query: () => '/product/getAllProduct',
			providesTags: ['Products'],
		}),
		createProduct: builder.mutation({
			query: (body) => ({
				url: '/product/createProduct',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Products'],
		}),
		editProduct: builder.mutation({
			query: (body) => ({
				url: '/product/updateProduct',
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['Products'],
		}),
		deleteProduct: builder.mutation({
			query: (productId) => ({
				url: `/product/deleteProductById/${productId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Products'],
		}),
	}),
})

export const {
	useGetAllRisksQuery,
	useCreateProductMutation,
	useGetAllProductQuery,
	useEditProductMutation,
	useDeleteProductMutation,
} = productApi
