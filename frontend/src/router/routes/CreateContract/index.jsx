import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../../components/CreateContract/Header'
import { Button } from '../../../components/UI/Button'
import { Input } from '../../../components/UI/Input'
import { useState } from 'react'
import { setRisks } from '../../../redux/newContractSlice'
import { useCreateContractMutation } from '../../../api/contract'
import { useNavigate } from 'react-router-dom'

export const CreateContract = () => {
	const product = useSelector((state) => state.newContract.product)
	const { risks } = useSelector((state) => state.newContract.contract)
	const dispatch = useDispatch()
	const [contractForm, setContractForm] = useState('')
	const [create] = useCreateContractMutation()
	const navigate = useNavigate()

	const handleRisksChange = (event) => {
		const { value, checked } = event.target

		if (checked) {
			dispatch(setRisks([...risks, { id: value }]))
		} else {
			dispatch(setRisks(risks.filter((risk) => risk.id !== value)))
		}
	}

	const contract = {
		dateCreate: '1985-06-15',
		dateSign: '1985-06-15',
		productId: {
			id: 1,
		},
		premium: 5454,
		insuranceSum: 234,
		rate: 4,
		commission: 234,
		dateBegin: '1985-06-15',
		dateEnd: '1985-07-15',
		agentId: {
			id: 1,
		},
		tariff: {
			id: 1,
		},
		additionalTariffs: [
			{
				id: 1,
			},
		],
		risks: [
			{
				id: 1,
			},
		],
		productMetafields: [
			{
				id: 1,
			},
		],
		status: 'DRAFT',
		policyHolderId: {
			id: 1,
		},
		insuredPolicyId: {
			id: 1,
		},
		ownerId: {
			id: 1,
		},
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await create(contract)
			navigate('/products-stats')
		} catch (error) {
			alert(error.data.message)
		}
	}
	return (
		<form className='container' id='contractForm' onSubmit={handleSubmit}>
			<Header />
			<div>
				<p>Риски</p>
				{product?.risks?.map((risk) => (
					<label key={risk.id}>
						<input
							type='checkbox'
							name='risks'
							value={risk.id}
							onChange={handleRisksChange}
						/>
						{risk.name}
					</label>
				))}
			</div>
			<div>
				<p>Тариф</p>
				{product?.tariffs?.map((tariff) => (
					<label key={tariff.id}>
						<input
							type='radio'
							name='tariff'
							value={tariff.id}
							onChange={(e) =>
								setContractForm({
									tariff: { id: e.target.value },
								})
							}
						/>
						{tariff.name}
					</label>
				))}
			</div>
			<div>
				<p>Метаполя</p>
				{product?.productMetafields?.map((metafield) => (
					<label key={metafield.id}>
						<Input
							name={metafield.name}
							placeholder={metafield.name}
						/>
					</label>
				))}
			</div>
			<div>
				<p>Страховая защита</p>
				{product?.additionalTariffs?.map((additionalTariff) => (
					<label key={additionalTariff.id}>
						<Input
							name={additionalTariff.name}
							type='number'
							min={additionalTariff.minInsuranceSum}
							max={additionalTariff.maxInsuranceSum}
							placeholder={additionalTariff.name}
						/>
					</label>
				))}
			</div>
			<Button htmlType='submit'>Создать договор</Button>
		</form>
	)
}
