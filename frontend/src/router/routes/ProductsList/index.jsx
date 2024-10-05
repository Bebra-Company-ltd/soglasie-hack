import { Product } from '@/components/ProductsList/Product'
import { Button } from '@/components/UI/Button'
import { Loader } from '@/components/UI/Loader'
import styles from './ProductsList.module.scss'
import { useGetAllProductQuery } from '@/api/product'

export const ProductsList = () => {
	const { data, isError, isFetching, refetch } = useGetAllProductQuery()
	return (
		<div className='container'>
			<div className={styles.productsList}>
				{isFetching ? (
					<Loader />
				) : isError ? (
					<>
						<div>Ошибка</div>
						<Button onClick={refetch}>Попробовать снова</Button>
					</>
				) : data ? (
					<>
						{data.map((product) => (
							<Product key={product.id} product={product} />
						))}
					</>
				) : null}
			</div>
		</div>
	)
}
