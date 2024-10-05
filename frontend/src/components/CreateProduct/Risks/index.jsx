import { Title } from '@/components/UI/Title'
import { Button } from '@/components/UI/Button'
import { Risk } from './Risk'
import plusIcon from '@/assets/icons/plus.svg'
import styles from './Risks.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setRisks } from '@/redux/productSlice'
import { RisksList } from './RisksList'
import { setIsAddRiskOpen, setIsRisksListOpen } from '@/redux/popupsSlice'
import { AddRiskForm } from './AddRiskForm'

export const Risks = () => {
	const dispatch = useDispatch()
	const risks = useSelector((state) => state.product.risks)

	const deleteRisk = (riskId) => {
		dispatch(
			setRisks(risks.filter((selectedRisk) => selectedRisk.id !== riskId))
		)
	}

	return (
		<div>
			<div className={styles.header}>
				<Title
					type='primaryPointer'
					onClick={() => dispatch(setIsRisksListOpen(true))}
				>
					Страховые риски
				</Title>
				<Button
					type='headless'
					onClick={() => dispatch(setIsAddRiskOpen(true))}
				>
					<img src={plusIcon} alt='Добавить риск' />
				</Button>
				<RisksList deleteRisk={deleteRisk} risks={risks} />
				<AddRiskForm />
			</div>
			<div className={styles.risks}>
				{risks.map((risk) => (
					<Risk key={risk.name} risk={risk} deleteRisk={deleteRisk} />
				))}
			</div>
		</div>
	)
}
