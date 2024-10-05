import clsx from 'clsx'
import { useRef, useState } from 'react'
import { Button } from '@/components/UI/Button'
import styles from './AddInsuranceType.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAddInsuranceTypeOpen } from '@/redux/popupsSlice'
import { Input } from '@/components/UI/Input'
import { useClose } from '@/hooks/useClose'
import { addAdditionalTariff } from '@/redux/productSlice'

export const AddInsuranceType = () => {
	const addInsuranceTypeRef = useRef(null)
	const isAddInsuranceTypeOpen = useSelector(
		(state) => state.popups.isAddInsuranceTypeOpen
	)
	const dispatch = useDispatch()
	const initialValue = {
		name: '',
		minInsuranceSum: '',
		maxInsuranceSum: '',
	}
	const [addInsuranceTypeValues, setAddInsuranceTypeValues] =
		useState(initialValue)

	const handleChange = (e) => {
		const { name, value } = e.target
		setAddInsuranceTypeValues({
			...addInsuranceTypeValues,
			[name]: value,
		})
	}

	const handleAddInsuranceType = () => {
		const serializedValues = {
			...addInsuranceTypeValues,
			minInsuranceSum: +addInsuranceTypeValues.minInsuranceSum,
			maxInsuranceSum: +addInsuranceTypeValues.maxInsuranceSum,
		}
		setAddInsuranceTypeValues(initialValue)
		dispatch(addAdditionalTariff(serializedValues))
		dispatch(setIsAddInsuranceTypeOpen(false))
	}

	useClose(
		addInsuranceTypeRef,
		isAddInsuranceTypeOpen,
		setIsAddInsuranceTypeOpen
	)

	return (
		<div
			className={clsx(
				styles.addInsuranceType,
				isAddInsuranceTypeOpen && styles.active
			)}
			ref={addInsuranceTypeRef}
		>
			<Input
				placeholder='Тип защиты'
				name='name'
				onChange={handleChange}
				value={addInsuranceTypeValues.name}
			/>
			<div className={styles.insuranceRange}>
				<Input
					placeholder='Мин. значение'
					name='minInsuranceSum'
					type='number'
					min='0'
					onChange={handleChange}
					value={addInsuranceTypeValues.minInsuranceSum}
				/>
				<Input
					placeholder='Макс. значение'
					name='maxInsuranceSum'
					type='number'
					min='0'
					onChange={handleChange}
					value={addInsuranceTypeValues.maxInsuranceSum}
				/>
			</div>

			<Button onClick={handleAddInsuranceType}>Добавить тип</Button>
		</div>
	)
}
