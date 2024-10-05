import { Button } from '@/components/UI/Button'
import questionIcon from '@/assets/icons/question.svg'
import crossIcon from '@/assets/icons/cross.svg'
import styles from './Tariff.module.scss'

export const Tariff = ({ deleteTariff, tariff }) => {
	return (
		<div className={styles.plan}>
			<p className={styles.multiplier}>{tariff.rate}</p>
			<p>{tariff.name}</p>
			<div>{/* <img src={questionIcon} alt='Опции тарифа' /> */}</div>
			{/* <div className={styles.options}></div> */}
			<div className={styles.delete}>
				<Button
					type='headless-scale'
					onClick={() => deleteTariff(tariff.name)}
				>
					<img src={crossIcon} alt='Удалить тариф' />
				</Button>
			</div>
		</div>
	)
}
