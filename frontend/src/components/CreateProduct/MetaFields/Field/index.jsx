import { Button } from '@/components/UI/Button'
import crossIcon from '@/assets/icons/cross.svg'
import styles from './Field.module.scss'

export const Field = ({ deleteField, metafield }) => {
	const metafieldType = {
		stringValue: 'Строка',
		doubleValue: 'Число',
		booleanValue: 'Чекбокс',
	}

	function getValueFromObject(firstObj, secondObj) {
		for (const key in secondObj) {
			// eslint-disable-next-line no-prototype-builtins
			if (firstObj.hasOwnProperty(key)) {
				return firstObj[key]
			}
		}
		return null
	}

	return (
		<div className={styles.metafield}>
			<p className={styles.multiplier}>{metafield.rate}</p>
			<p>{metafield.name}</p>
			<p>{getValueFromObject(metafieldType, metafield)}</p>
			<div className={styles.delete}>
				<Button
					type='headless-scale'
					onClick={() => deleteField(metafield.name)}
				>
					<img src={crossIcon} alt='Удалить метаполе' />
				</Button>
			</div>
		</div>
	)
}
