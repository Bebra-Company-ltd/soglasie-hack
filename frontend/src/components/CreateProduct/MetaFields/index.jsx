import { Title } from '@/components/UI/Title'
import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import styles from './MetaFields.module.scss'
import ButtonGroup from '@/components/UI/ButtonGroup'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMetaField } from '@/redux/productSlice'
import { FieldsList } from './FieldsList'

export const MetaFields = () => {
	const [metaFieldType, setMetaFieldType] = useState({ stringValue: '' })
	const [metaFieldName, setMetaFieldName] = useState('')
	const [metaFieldRate, setMetaFieldRate] = useState('')
	const dispatch = useDispatch()
	const buttons = [
		{
			label: 'Строка',
			type: 'stringValue',
		},
		{
			label: 'Число',
			type: 'doubleValue',
		},
		{
			label: 'Чекбокс',
			type: 'booleanValue',
		},
	]

	const handleButtonClick = (type) => {
		switch (type) {
			case 'stringValue':
				setMetaFieldType({ stringValue: '' })
				break
			case 'doubleValue':
				setMetaFieldType({ doubleValue: 0 })
				break
			case 'booleanValue':
				setMetaFieldType({ booleanValue: false })
				break
			default:
				setMetaFieldType({ stringValue: '' })
				break
		}
	}

	const handleAddMetaField = () => {
		dispatch(
			addMetaField({
				name: metaFieldName,
				rate: metaFieldRate,
				...metaFieldType,
			})
		)
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
				<div className={styles.addInputs}>
					<Input
						value={metaFieldName}
						onChange={(e) => setMetaFieldName(e.target.value)}
						placeholder='Название поля'
					/>
					<Input
						name='rate'
						type='number'
						min='0'
						value={metaFieldRate}
						onChange={(e) => setMetaFieldRate(e.target.value)}
						placeholder='Комиссия (%)'
					/>
				</div>
				<Button type='outlined' onClick={handleAddMetaField}>
					Добавить
				</Button>
			</div>
			<FieldsList />
		</div>
	)
}
