import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	product: {},
	contract: {
		risks: [],
	},
}

export const newContractSlice = createSlice({
	name: 'newContract',
	initialState,
	reducers: {
		setProduct: (state, action) => {
			state.product = action.payload
		},
		resetProduct: () => initialState,
		setLob: (state, action) => {
			state.lobid = action.payload
		},
		setType: (state, action) => {
			state.type = action.payload
		},
		setName: (state, action) => {
			state.name = action.payload
		},
		setPercentForDay: (state, action) => {
			state.percentForDay = action.payload
		},
		setRisks: (state, action) => {
			state.contract.risks = action.payload
		},
		setTariffs: (state, action) => {
			state.tariffs = action.payload
		},
		addTariff: (state, action) => {
			state.tariffs.push(action.payload)
		},
		deleteRisk: (state, action) => {
			state.risks = action.payload
		},
		setAdditionalTariff: (state, action) => {
			state.additionalTariffs = action.payload
		},
		addAdditionalTariff: (state, action) => {
			state.additionalTariffs.push(action.payload)
		},
		setMetaFields: (state, action) => {
			state.productMetafields = action.payload
		},
		addMetaField: (state, action) => {
			state.productMetafields.push(action.payload)
		},
	},
})

export const {
	setLob,
	setType,
	setName,
	setPercentForDay,
	setRisks,
	addRisk,
	setTariffs,
	addTariff,
	setAdditionalTariff,
	addAdditionalTariff,
	resetProduct,
	setProduct,
	addMetaField,
	setMetaFields,
} = newContractSlice.actions

export default newContractSlice.reducer
