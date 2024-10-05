import { Title } from '@/components/UI/Title'
import { Button } from '@/components/UI/Button'
import plusIcon from '@/assets/icons/plus.svg'
import styles from './Tariffs.module.scss'
import { Tariff } from './Tariff'
import { useDispatch, useSelector } from 'react-redux'
import { setTariffs } from '@/redux/productSlice'
import { setIsAddTariffOpen } from '@/redux/popupsSlice'
import { AddTariffForm } from './AddTariffForm'

export const Plans = () => {
	const dispatch = useDispatch()
	const tariffs = useSelector((state) => state.product.tariffs)

	const deleteTariff = (tariffName) => {
		dispatch(
			setTariffs(
				tariffs.filter(
					(selectedTariff) => selectedTariff.name !== tariffName
				)
			)
		)
	}

	return (
		<div>
			<div className={styles.header}>
				<Title type='primary'>Тарифы</Title>
				<Button
					type='headless'
					onClick={() => dispatch(setIsAddTariffOpen(true))}
				>
					<img src={plusIcon} alt='Добавить тариф' />
				</Button>
				<AddTariffForm />
			</div>
			<div className={styles.plans}>
				{tariffs.map((tariff) => (
					<Tariff
						key={tariff.name}
						deleteTariff={deleteTariff}
						tariff={tariff}
					/>
				))}
			</div>
		</div>
	)
}
