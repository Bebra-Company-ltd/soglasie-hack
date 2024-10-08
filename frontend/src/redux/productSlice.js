import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	id: null,
	lobid: '',
	name: '',
	percentForDay: '',
	risks: [],
	tariffs: [],
	additionalTariffs: [],
	productMetafields: [],
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProduct: (state, action) => {
			return action.payload
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
			state.risks = action.payload
		},
		addRisk: (state, action) => {
			state.risks.push(action.payload)
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
} = productSlice.actions

export default productSlice.reducer
