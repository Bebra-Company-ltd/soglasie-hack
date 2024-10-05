import { UISelect } from '@/components/UI/Select'
import styles from './Header.module.scss'
import { Input } from '@/components/UI/Input'
import { Button } from '@/components/UI/Button'
import { useState } from 'react'
import { useGetAllAgentsQuery } from '../../../api/agents'
import { useDispatch } from 'react-redux'
import { useGetAllProductQuery } from '../../../api/product'
import { setProduct } from '../../../redux/newContractSlice'

export const Header = () => {
	const [lob, setLob] = useState('')
	const [dateBegin, setDateBegin] = useState('')
	const [dateEnd, setDateEnd] = useState('')
	const [agentId, setAgentId] = useState('')
	const [productId, setProductId] = useState('')
	const dispatch = useDispatch()

	const { data } = useGetAllAgentsQuery()
	const { data: productsData } = useGetAllProductQuery()

	const agentOptions =
		data &&
		data.map((agent) => ({
			value: agent.id,
			label: `${agent.secondName} ${agent.firstName} ${agent.lastName}`,
		}))

	const statusOptions = [
		{
			value: 'DRAFT',
			label: 'Черновик',
		},
		{
			value: 'SIGNED',
			label: 'Подписан',
		},
	]

	const productOptions =
		productsData &&
		productsData.map((product) => ({
			value: product.id,
			label: product.name,
		}))

	const handleSetProduct = (productId) => {
		const productFound = productsData.find(
			(product) => product.id === productId
		)
		// eslint-disable-next-line no-unused-vars
		const { id, percentForDay, lobid, name, ...productToSet } = {
			...productFound,
		}
		dispatch(setProduct(productToSet))
	}

	return (
		<div className={styles.header}>
			<div className={styles.select}>
				<UISelect
					options={productOptions}
					placeholder='Продукт'
					onChange={(event) => handleSetProduct(event.value)}
					type='primary'
				/>
			</div>

			<label>
				Начало расчёта
				<Input
					type='date'
					value={dateBegin}
					onChange={(e) => setDateBegin(e.target.value)}
				/>
			</label>

			<label>
				Конец расчёта
				<Input
					type='date'
					value={dateEnd}
					onChange={(e) => setDateEnd(e.target.value)}
				/>
			</label>

			<UISelect
				options={agentOptions}
				placeholder='Агент'
				onChange={(event) => setAgentId(event.value)}
			/>
			<UISelect options={statusOptions} placeholder='Статус договора' />
		</div>
	)
}
