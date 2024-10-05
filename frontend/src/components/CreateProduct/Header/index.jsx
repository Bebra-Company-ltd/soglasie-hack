import { UISelect } from '@/components/UI/Select'
import styles from './Header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setLob, setName, setPercentForDay } from '@/redux/productSlice'
import { Input } from '@/components/UI/Input'

export const Header = () => {
	const dispatch = useDispatch()
	const { lobid, name, percentForDay } = useSelector((state) => state.product)

	const lobOptions = [
		{ value: 'travel', label: 'Путешествие' },
		{ value: 'CASCO', label: 'Здоровье' },
		{ value: 'estate', label: 'Имущество' },
	]

	const handleChange = (event) => {
		dispatch(setLob(event.value))
	}

	return (
		<div className={styles.header}>
			<div className={styles.select}>
				<UISelect
					options={lobOptions}
					placeholder='Линия бизнеса'
					type='primary'
					value={lobOptions.find((item) => item.value === lobid)}
					onChange={handleChange}
				/>
			</div>

			<Input
				placeholder='Ставка в день'
				type='number'
				min='0'
				value={percentForDay}
				onChange={(e) => dispatch(setPercentForDay(e.target.value))}
			/>

			<Input
				placeholder='Название продукта'
				value={name}
				onChange={(e) => dispatch(setName(e.target.value))}
			/>
		</div>
	)
}
