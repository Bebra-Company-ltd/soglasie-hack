import { Button } from '@/components/UI/Button'
import styles from './Risk.module.scss'
import crossIcon from '@/assets/icons/cross.svg'

export const Risk = ({ risk, deleteRisk }) => {
	return (
		<div className={styles.risk}>
			<div className={styles.delete}>
				<Button type='headless-scale'>
					<img
						src={crossIcon}
						alt='Удалить риск'
						onClick={() => deleteRisk(risk.id)}
					/>
				</Button>
			</div>

			<p>Риск: {risk.name}</p>
			<p>Комиссия: {risk.rate}%</p>
			<p>Премия: {risk.insuranceSum}%</p>
		</div>
	)
}
