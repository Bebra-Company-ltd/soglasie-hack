import { useState } from 'react'
import styles from './ButtonGroup.module.scss'

const ButtonGroup = ({ buttons, onButtonClick }) => {
	const [activeType, setActiveType] = useState('stringValue')

	const handleClick = (type) => {
		setActiveType(type)
		if (onButtonClick) {
			onButtonClick(type)
		}
	}

	return (
		<div className={styles.buttonGroup}>
			{buttons.map((button) => (
				<button
					type='button'
					key={button.type}
					onClick={() => handleClick(button.type)}
					className={`${styles.button} ${
						activeType === button.type ? styles.active : ''
					}`}
				>
					{button.label}
				</button>
			))}
		</div>
	)
}

export default ButtonGroup
