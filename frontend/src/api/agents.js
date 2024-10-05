import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from './config'

export const agentApi = createApi({
	reducerPath: 'agentApi',
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
	tagTypes: ['Agents'],
	endpoints: (builder) => ({
		getAllAgents: builder.query({
			query: () => '/agents/getAllAgents',
			providesTags: ['Agents'],
		}),
		createAgent: builder.mutation({
			query: (body) => ({
				url: '/agent/createAgent',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Agents'],
		}),
		editAgent: builder.mutation({
			query: (body) => ({
				url: '/agent/updateAgent',
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['Agents'],
		}),
		deleteAgent: builder.mutation({
			query: (agentId) => ({
				url: `/agent/deleteAgentById/${agentId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Agents'],
		}),
	}),
})

export const {
	useCreateAgentMutation,
	useGetAllAgentsQuery,
	useEditAgentMutation,
	useDeleteAgentMutation,
} = agentApi
