import clsx from 'clsx'
import { useRef, useState } from 'react'
import { Button } from '@/components/UI/Button'
import styles from './AddRisk.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAddRiskOpen } from '@/redux/popupsSlice'
import { Input } from '@/components/UI/Input'
import { useClose } from '@/hooks/useClose'
import { addRisk } from '@/redux/productSlice'

export const AddRiskForm = () => {
	const addRiskRef = useRef(null)
	const isAddRiskOpen = useSelector((state) => state.popups.isAddRiskOpen)
	const dispatch = useDispatch()
	const initialValue = {
		name: '',
		insuranceSum: '',
		rate: '',
	}
	const [addRiskValues, setAddRiskValues] = useState(initialValue)

	const handleChange = (e) => {
		const { name, value } = e.target
		setAddRiskValues({
			...addRiskValues,
			[name]: value,
		})
	}

	const handleAddRisk = () => {
		const serializedValues = {
			...addRiskValues,
			insuranceSum: +addRiskValues.insuranceSum,
			rate: +addRiskValues.rate,
		}
		setAddRiskValues(initialValue)
		dispatch(addRisk(serializedValues))
		dispatch(setIsAddRiskOpen(false))
	}

	useClose(addRiskRef, isAddRiskOpen, setIsAddRiskOpen)

	return (
		<div
			className={clsx(styles.addRisk, isAddRiskOpen && styles.active)}
			ref={addRiskRef}
		>
			<Input
				placeholder='Название страхового риска'
				name='name'
				onChange={handleChange}
				value={addRiskValues.name}
			/>
			<Input
				placeholder='Коэффициент страховой премии (%)'
				name='insuranceSum'
				type='number'
				min='0'
				onChange={handleChange}
				value={addRiskValues.insuranceSum}
			/>
			<Input
				placeholder='Коэффициент комиссии агента (%)'
				name='rate'
				type='number'
				min='0'
				onChange={handleChange}
				value={addRiskValues.rate}
			/>
			<Button onClick={handleAddRisk}>Добавить риск</Button>
		</div>
	)
}
