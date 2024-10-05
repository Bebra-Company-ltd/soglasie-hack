import { useGetAllRisksQuery } from '@/api/product'
import clsx from 'clsx'
import { useRef } from 'react'
import { Button } from '@/components/UI/Button'
import { Loader } from '@/components/UI/Loader'
import styles from './RisksList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setRisks } from '@/redux/productSlice'
import { setIsRisksListOpen } from '@/redux/popupsSlice'
import { useClose } from '@/hooks/useClose'

export const RisksList = ({ deleteRisk, risks }) => {
	const risksListRef = useRef(null)
	const isRisksListOpen = useSelector((state) => state.popups.isRisksListOpen)

	const { data, isFetching, isError, refetch } = useGetAllRisksQuery()
	const dispatch = useDispatch()

	const handleCheckboxChange = (risk) => {
		if (risks.some((selectedRisk) => selectedRisk.id === risk.id)) {
			deleteRisk(risk.id)
		} else {
			dispatch(setRisks([...risks, risk]))
		}
	}

	useClose(risksListRef, isRisksListOpen, setIsRisksListOpen)

	return (
		<div
			className={clsx(styles.risksList, isRisksListOpen && styles.active)}
			ref={risksListRef}
		>
			{isFetching ? (
				<Loader />
			) : isError ? (
				<>
					<div>Ошибка</div>
					<Button onClick={refetch}>Попробовать снова</Button>
				</>
			) : data ? (
				<>
					{data.map((risk) => (
						<label key={risk.id}>
							<input
								type='checkbox'
								checked={risks.some(
									(selectedRisk) =>
										selectedRisk.name === risk.name
								)}
								onChange={() => handleCheckboxChange(risk)}
							/>
							<span />
							{risk.name}
						</label>
					))}
					{data.length === 0 && <p>Рисков нет</p>}
				</>
			) : null}
		</div>
	)
}
