import { Header } from '@/components/CreateProduct/Header'
import { Risks } from '@/components/CreateProduct/Risks'
import { Button } from '@/components/UI/Button'
import { InsuredSum } from '@/components/CreateProduct/InsuredSum'
import styles from './CreateProduct.module.scss'
import { MetaFields } from '@/components/CreateProduct/MetaFields'
import { Plans } from '@/components/CreateProduct/Tariffs'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateProductMutation, useEditProductMutation } from '@/api/product'
import { resetProduct } from '@/redux/productSlice'
import { setIsEditing } from '@/redux/popupsSlice'
import { useNavigate } from 'react-router-dom'

export const CreateProduct = () => {
	const product = useSelector((state) => state.product)
	const isEditing = useSelector((state) => state.popups.isEditing)
	const [create] = useCreateProductMutation()
	const [edit] = useEditProductMutation()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	// eslint-disable-next-line no-unused-vars
	const serializedRisks = product.risks.map(({ id, ...rest }) => rest)
	const serializedProduct = {
		...product,
		risks: serializedRisks,
		percentForDay: +product.percentForDay,
	}

	const cancelEdit = () => {
		dispatch(resetProduct())
		dispatch(setIsEditing(false))
	}

	const handleSubmit = async () => {
		try {
			if (isEditing) {
				await edit(serializedProduct)
			} else {
				await create(serializedProduct)
			}
			cancelEdit()
			navigate('/products-list')
		} catch (error) {
			alert(error.data.message)
		}
	}

	return (
		<form className='container'>
			<Header />
			<div className={styles.content}>
				<Risks />
				<Plans />
				<MetaFields />
				<InsuredSum />
			</div>
			<div className={styles.btns}>
				{isEditing && (
					<Button onClick={cancelEdit} type='cancel'>
						Отмена
					</Button>
				)}
				<Button onClick={handleSubmit}>
					{isEditing ? 'Сохранить' : 'Создать'} продукт
				</Button>
			</div>
		</form>
	)
}
