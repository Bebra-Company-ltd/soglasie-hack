import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isRisksListOpen: false,
	isAddRiskOpen: false,
	isAddTariffOpen: false,
	isAddInsuranceTypeOpen: false,
	isEditing: false,
}

export const popupsSlice = createSlice({
	name: 'popups',
	initialState,
	reducers: {
		setIsRisksListOpen: (state, action) => {
			state.isRisksListOpen = action.payload
		},
		setIsAddRiskOpen: (state, action) => {
			state.isAddRiskOpen = action.payload
		},
		setIsAddTariffOpen: (state, action) => {
			state.isAddTariffOpen = action.payload
		},
		setIsAddInsuranceTypeOpen: (state, action) => {
			state.isAddInsuranceTypeOpen = action.payload
		},
		setIsEditing: (state, action) => {
			state.isEditing = action.payload
		},
	},
})

export const {
	setIsRisksListOpen,
	setIsAddRiskOpen,
	setIsAddTariffOpen,
	setIsAddInsuranceTypeOpen,
	setIsEditing,
} = popupsSlice.actions

export default popupsSlice.reducer
