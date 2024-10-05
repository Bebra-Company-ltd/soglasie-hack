import { UISelect } from '@/components/UI/Select'
import styles from './Header.module.scss'
import { Input } from '@/components/UI/Input'
import { Button } from '@/components/UI/Button'
import { useState } from 'react'
import { useGetAllAgentsQuery } from '../../../api/agents'
import { useLazyGetContractsByCriteriaQuery } from '../../../api/contract'
import { useDispatch } from 'react-redux'
import { setContracts } from '../../../redux/contractsSlice'
import { useGetAllProductQuery } from '../../../api/product'

export const Header = () => {
	const [lob, setLob] = useState('')
	const [dateBegin, setDateBegin] = useState('')
	const [dateEnd, setDateEnd] = useState('')
	const [agentId, setAgentId] = useState('')
	const [productId, setProductId] = useState('')
	const dispatch = useDispatch()

	const { data } = useGetAllAgentsQuery()
	const { data: productsData } = useGetAllProductQuery()
	const [getContracts] = useLazyGetContractsByCriteriaQuery()

	const lobOptions = [
		{ value: 'THI', label: 'Страхование путешественников' },
		{ value: 'CASCO', label: 'КАСКО' },
		{ value: 'OSAGO', label: 'ОСАГО' },
		{ value: 'ACCIDENT ', label: 'Страхование от несчастных случаев' },
	]

	const agentOptions =
		data &&
		data.map((agent) => ({
			value: agent.id,
			label: `${agent.secondName} ${agent.firstName} ${agent.lastName}`,
		}))

	const productOptions =
		productsData &&
		productsData.map((product) => ({
			value: product.id,
			label: product.name,
		}))

	const handleConversion = async () => {
		const body = {
			lob,
			dateBegin,
			dateEnd,
			agent: {
				id: agentId,
			},
			product: {
				id: productId,
			},
		}
		const payload = await getContracts(body).unwrap()

		dispatch(setContracts(payload))
	}

	return (
		<div className={styles.header}>
			<div className={styles.select}>
				<UISelect
					options={lobOptions}
					placeholder='Линия бизнеса'
					type='primary'
					onChange={(event) => setLob(event.value)}
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

			<UISelect
				options={productOptions}
				placeholder='Продукт'
				onChange={(event) => setProductId(event.value)}
			/>
			<Button onClick={handleConversion}>Показать</Button>
		</div>
	)
}
