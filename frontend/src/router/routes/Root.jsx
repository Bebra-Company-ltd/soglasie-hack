import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { UISelect } from '@/components/UI/Select'
import Select from 'react-select'

export const Root = () => {
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	]

	const defaultStyles = {
		borderRadius: 30,
		padding: '3px 10px',
	}

	return (
		<div
			style={{
				display: 'flex',
				gap: 10,
				margin: 10,
				alignItems: 'center',
			}}
		>
			<Button>Кнопка</Button>
			<Button type='outlined'>Кнопка</Button>
			<Button type='disabled'>Кнопка</Button>
			<Input placeholder='Поле ввода' />
			<UISelect options={options} />
			<Select
				styles={{
					control: (baseStyles) => ({
						...baseStyles,
						...defaultStyles,
						borderColor: '#F36820',
					}),
					indicatorSeparator: () => {},
					dropdownIndicator: (baseStyles) => ({
						...baseStyles,
						color: '#F36820',
					}),
					placeholder: (baseStyles) => ({
						...baseStyles,
						fontSize: 20,
					}),
				}}
				options={options}
			/>
		</div>
	)
}
