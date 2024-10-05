import Select from 'react-select'

export const UISelect = ({ options, type, ...props }) => {
	const defaultStyles = {
		borderRadius: 30,
		padding: '3px 10px',
	}
	const defaultType = {
		control: (baseStyles) => ({
			...baseStyles,
			...defaultStyles,
		}),
		indicatorSeparator: () => {},
	}

	const types = {
		primary: {
			...defaultType,
			control: (baseStyles) => ({
				...baseStyles,
				...defaultStyles,
				borderColor: '#F36820',
				padding: '8px 25px',
			}),
			dropdownIndicator: (baseStyles) => ({
				...baseStyles,
				color: '#F36820',
			}),
			singleValue: (baseStyles) => ({
				...baseStyles,
				color: '#F36820',
				fontWeight: 600,
				fontSize: 20,
			}),
			placeholder: (baseStyles) => ({
				...baseStyles,
				fontSize: 20,
			}),
		},
		primaryThin: {
			...defaultType,
			control: (baseStyles) => ({
				...baseStyles,
				...defaultStyles,
				borderColor: '#F36820',
			}),
			dropdownIndicator: (baseStyles) => ({
				...baseStyles,
				color: '#F36820',
			}),
			singleValue: (baseStyles) => ({
				...baseStyles,
				color: '#F36820',
			}),
			placeholder: (baseStyles) => ({
				...baseStyles,
			}),
		},
	}

	const defineSelectType = (selectType) => {
		if (selectType) {
			return types[selectType]
		}
		return defaultType
	}

	return (
		<Select styles={defineSelectType(type)} options={options} {...props} />
	)
}
