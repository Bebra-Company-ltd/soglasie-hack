import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from './config'

export const contractApi = createApi({
	reducerPath: 'contractApi',
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
	tagTypes: ['Contracts'],
	endpoints: (builder) => ({
		getAllContracts: builder.query({
			query: () => '/contract/getAllContract',
			providesTags: ['Contracts'],
		}),
		getContractsByCriteria: builder.query({
			query: (body) => ({
				url: '/contract/getContractsByCriteria',
				method: 'POST',
				body,
			}),
			providesTags: ['Contracts'],
		}),
		createContract: builder.mutation({
			query: (body) => ({
				url: '/contract/createContract',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Contracts'],
		}),
		editContract: builder.mutation({
			query: (body) => ({
				url: '/contract/updateContract',
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['Contracts'],
		}),
		deleteContract: builder.mutation({
			query: (contractId) => ({
				url: `/contract/deleteContractById/${contractId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Contracts'],
		}),
	}),
})

export const {
	useCreateContractMutation,
	useGetAllContractsQuery,
	useEditContractMutation,
	useDeleteContractMutation,

	useLazyGetContractsByCriteriaQuery,
} = contractApi
