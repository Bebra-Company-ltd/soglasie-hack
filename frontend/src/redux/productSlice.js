import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	id: null,
	lobid: '',
	name: '',
	percentForDay: 0,
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
} = productSlice.actions

export default productSlice.reducer
