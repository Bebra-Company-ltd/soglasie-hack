import clsx from 'clsx'
import { useRef, useState } from 'react'
import { Button } from '@/components/UI/Button'
import styles from './AddTariff.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAddTariffOpen } from '@/redux/popupsSlice'
import { Input } from '@/components/UI/Input'
import { useClose } from '@/hooks/useClose'
import { addTariff } from '@/redux/productSlice'

export const AddTariffForm = () => {
	const addTariffRef = useRef(null)
	const isAddTariffOpen = useSelector((state) => state.popups.isAddTariffOpen)
	const dispatch = useDispatch()
	const initialValue = {
		name: '',
		insuranceSum: '',
		rate: '',
	}
	const [addTariffValues, setAddTariffValues] = useState(initialValue)

	const handleChange = (e) => {
		const { name, value } = e.target
		setAddTariffValues({
			...addTariffValues,
			[name]: value,
		})
	}

	const handleAddTariff = () => {
		const serializedValues = {
			...addTariffValues,
			insuranceSum: +addTariffValues.insuranceSum,
			rate: +addTariffValues.rate,
		}
		setAddTariffValues(initialValue)
		dispatch(addTariff(serializedValues))
		dispatch(setIsAddTariffOpen(false))
	}

	useClose(addTariffRef, isAddTariffOpen, setIsAddTariffOpen)

	return (
		<div
			className={clsx(styles.addTariff, isAddTariffOpen && styles.active)}
			ref={addTariffRef}
		>
			<Input
				placeholder='Название тарифа'
				name='name'
				onChange={handleChange}
				value={addTariffValues.name}
			/>
			<Input
				placeholder='Коэффициент страховой премии (%)'
				name='rate'
				type='number'
				min='0'
				onChange={handleChange}
				value={addTariffValues.rate}
			/>

			<Button onClick={handleAddTariff}>Добавить тариф</Button>
		</div>
	)
}
