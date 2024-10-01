import { Button } from '../../components/UI/Button'
import { Input } from '../../components/UI/Input'

export const Root = () => {
	return (
		<div style={{ display: 'flex', gap: 10, margin: 10 }}>
			<Button>Кнопка</Button>
			<Button type='outlined'>Кнопка</Button>
			<Button type='disabled'>Кнопка</Button>
			<Input placeholder='Поле ввода' />
		</div>
	)
}
