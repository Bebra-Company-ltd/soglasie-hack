import { useState } from 'react'
import { useSelector } from 'react-redux'

export const ContractsList = () => {
	const contracts = useSelector((state) => state.contract.contracts)
	const [selectedType, setSelectedType] = useState('signedContracts')
	function formatDate(timestamp) {
		let date = new Date(timestamp)
		let day = date.getDate().toString().padStart(2, '0')
		let month = (date.getMonth() + 1).toString().padStart(2, '0') // Месяцы начинаются с 0
		let year = date.getFullYear()

		return `${day}.${month}.${year}`
	}

	return (
		<div>
			<div>
				<label>
					<input
						type='radio'
						name='1'
						value='signedContracts'
						onChange={(e) => setSelectedType(e.target.value)}
					/>
					Подписанные
				</label>
				<label>
					<input
						type='radio'
						name='1'
						value='draftContracts'
						onChange={(e) => setSelectedType(e.target.value)}
					/>
					Черновики
				</label>
			</div>
			<div>
				<p>
					Контрактов в данном статусе:
					{contracts[selectedType]?.length}
				</p>
				{contracts[selectedType]?.map((contract) => (
					<div key={contract.id} style={{ marginBottom: 20 }}>
						<p>Дата начала: {formatDate(contract.dateBegin)}</p>
						<p>Дата конца: {formatDate(contract.dateEnd)}</p>
						<p>Премия: {contract.premium}</p>
						<p>
							Комиссия агента: {contract.commission} (
							{contract.rate}%)
						</p>
						<p>Сумма страховой выплаты: {contract.insuranceSum}</p>
					</div>
				))}
			</div>
		</div>
	)
}
