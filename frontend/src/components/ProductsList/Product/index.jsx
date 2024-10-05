import { Title } from '@/components/UI/Title'
import { Button } from '@/components/UI/Button'

import styles from './Product.module.scss'
import {
	useCreateProductMutation,
	useDeleteProductMutation,
} from '@/api/product'
import { useDispatch } from 'react-redux'
import { setIsEditing } from '@/redux/popupsSlice'
import { setProduct } from '@/redux/productSlice'
import { useNavigate } from 'react-router-dom'

export const Product = ({ product }) => {
	const [create] = useCreateProductMutation()
	const [deleteProduct] = useDeleteProductMutation()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const removeIdFields = (obj) => {
		if (Array.isArray(obj)) {
			return obj.map((item) => removeIdFields(item))
		} else if (typeof obj === 'object' && obj !== null) {
			const newObj = {}
			for (const key in obj) {
				if (key !== 'id') {
					newObj[key] = removeIdFields(obj[key])
				}
			}
			return newObj
		}
		return obj
	}

	const copyProduct = async () => {
		const newNameProduct = { ...product, name: `${product.name} (new)` }
		delete newNameProduct.id
		const serializedProduct = removeIdFields(newNameProduct)
		try {
			await create(serializedProduct)
		} catch (error) {
			alert(error.data.message)
		}
	}

	const editProduct = () => {
		dispatch(setIsEditing(true))
		dispatch(setProduct({ ...product }))
		navigate('/create-product')
		console.log(product)
	}

	const handleDeleteProduct = () => {
		const isConfirm = confirm('Вы действительно хотите удалить продукт?')
		if (isConfirm) {
			deleteProduct(product.id)
		}
	}

	return (
		<div className={styles.product}>
			<div className={styles.title}>
				<div className={styles.productName}>
					<Title>Название продукта:</Title> {product.name}
				</div>
				<p className={styles.lobId}>{product.lobid}</p>
			</div>
			<div className={styles.row}>
				<div>
					<Title>Страховые риски</Title>
					<ul className={styles.list}>
						{product.risks.map((risk) => (
							<li key={risk.id}>
								<p>Название: {risk.name}</p>
								<p>Премия: {risk.insuranceSum}</p>
								<p>Комиссия агента: {risk.rate}</p>
							</li>
						))}
					</ul>
				</div>
				<div>
					<Title>Страховая защита</Title>
					<ul className={styles.list}>
						{product.additionalTariffs.map((additionalTariff) => (
							<li key={additionalTariff.id}>
								<p>Название: {additionalTariff.name}</p>
								<p>От: {additionalTariff.minInsuranceSum}</p>
								<p>До: {additionalTariff.maxInsuranceSum}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.row}>
				<div>
					<Title>Тарифы</Title>
					<ul className={styles.list}>
						{product.tariffs.map((tariff) => (
							<li key={tariff.id}>
								<p>Название: {tariff.name}</p>
								<p>Премия: {tariff.rate}</p>
							</li>
						))}
					</ul>
				</div>
				<div>
					<Title>Метаданные</Title>
					<ul className={styles.list}>
						{product.productMetafields.map((metafield) => (
							<li key={metafield.id}>
								<p>Название: {metafield.name}</p>
								<p>Премия: {metafield.rate}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.btns}>
				<Button onClick={editProduct} type='outlined'>
					Редактировать
				</Button>
				<Button onClick={copyProduct}>Копировать</Button>
				<Button type='cancel' onClick={handleDeleteProduct}>
					Удалить
				</Button>
			</div>
		</div>
	)
}
