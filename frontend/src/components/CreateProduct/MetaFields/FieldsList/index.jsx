import { useDispatch, useSelector } from 'react-redux'
import { Field } from '../Field'
import styles from './FieldsList.module.scss'
import { setMetaFields } from '@/redux/productSlice'

export const FieldsList = () => {
	const metaFields = useSelector((state) => state.product.productMetafields)
	const dispatch = useDispatch()

	const deleteField = (fieldName) => {
		dispatch(
			setMetaFields(
				metaFields.filter(
					(selectedField) => selectedField.name !== fieldName
				)
			)
		)
	}
	return (
		<div className={styles.fieldsList}>
			{metaFields.map((metafield) => (
				<Field
					key={metafield.name}
					deleteField={deleteField}
					metafield={metafield}
				/>
			))}
		</div>
	)
}
