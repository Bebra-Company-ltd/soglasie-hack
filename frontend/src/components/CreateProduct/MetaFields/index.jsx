import { Title } from '@/components/UI/Title'
import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import styles from './MetaFields.module.scss'
import ButtonGroup from '@/components/UI/ButtonGroup'
import { useState } from 'react'

export const MetaFields = () => {
	const [selectedType, setSelectedType] = useState('string')
	const buttons = [
		{
			label: 'Строка',
			type: 'string',
		},
		{
			label: 'Число',
			type: 'int',
		},
		{
			label: 'Чекбокс',
			type: 'checkbox',
		},
	]

	const handleButtonClick = (type) => {
		setSelectedType(type)
		console.log(selectedType)
	}

	return (
		<div>
			<div className={styles.title}>
				<Title>Метаданные</Title>
				<div className={styles.fieldType}>
					<ButtonGroup
						buttons={buttons}
						onButtonClick={handleButtonClick}
					/>
				</div>
			</div>
			<div className={styles.addField}>
				<div className={styles.addInput}>
					<Input placeholder='Название поля' />
				</div>
				<Button type='outlined'>Добавить</Button>
			</div>
		</div>
	)
}
