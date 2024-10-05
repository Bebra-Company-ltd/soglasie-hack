import { Title } from '@/components/UI/Title'
import { Button } from '@/components/UI/Button'
import plusIcon from '@/assets/icons/plus.svg'
import styles from './InsuredSum.module.scss'
import { InsuranceType } from './InsuranceType'
import { useDispatch, useSelector } from 'react-redux'
import { addAdditionalTariff } from '@/redux/productSlice'
import { AddInsuranceType } from './AddInsuranceType'
import { setIsAddInsuranceTypeOpen } from '@/redux/popupsSlice'
import { setAdditionalTariff } from '@/redux/productSlice'

export const InsuredSum = () => {
	const dispatch = useDispatch()
	const additionalTariffs = useSelector(
		(state) => state.product.additionalTariffs
	)

	const deleteAdditionalTariff = (tariffName) => {
		dispatch(
			setAdditionalTariff(
				additionalTariffs.filter(
					(selectedTariff) => selectedTariff.name !== tariffName
				)
			)
		)
	}

	return (
		<div>
			<div className={styles.title}>
				<Title>Размер страховой защиты</Title>
				<Button
					type='headless'
					onClick={() => dispatch(setIsAddInsuranceTypeOpen(true))}
				>
					<img src={plusIcon} alt='Добавить тип' />
				</Button>
				<AddInsuranceType />
			</div>

			<div className={styles.InsuranceTypes}>
				{additionalTariffs.map((additionalTariff) => (
					<InsuranceType
						key={additionalTariff.name}
						additionalTariff={additionalTariff}
						deleteAdditionalTariff={deleteAdditionalTariff}
					/>
				))}
			</div>
		</div>
	)
}
