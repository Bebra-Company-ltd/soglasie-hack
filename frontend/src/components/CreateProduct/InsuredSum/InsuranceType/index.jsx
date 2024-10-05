import { Button } from '@/components/UI/Button'
import plusIcon from '@/assets/icons/plus.svg'
import styles from './InsuranceType.module.scss'

export const InsuranceType = ({ additionalTariff, deleteAdditionalTariff }) => {
	return (
		<div className={styles.insuranceType}>
			<div className={styles.typeTitle}>
				<p className={styles.titleText}>{additionalTariff.name}</p>
				<div className={styles.deleteBtn}>
					<Button
						type='headless'
						onClick={() =>
							deleteAdditionalTariff(additionalTariff.name)
						}
					>
						<img src={plusIcon} alt='Удалить тип' />
					</Button>
				</div>
			</div>
			<div className={styles.typeRange}>
				<p>Мин. значение: {additionalTariff.minInsuranceSum}</p>
				<p>Макс. значение: {additionalTariff.maxInsuranceSum}</p>
			</div>
		</div>
	)
}
