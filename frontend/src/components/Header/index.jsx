import styles from './Header.module.scss'
import { Logo } from '@/components/UI/Logo'
import { Avatar } from '@/components/UI/Avatar'
import { NavLink } from '@/components/UI/NavLink'
import { useSelector } from 'react-redux'

const Header = () => {
	const isEditing = useSelector((state) => state.popups.isEditing)

	return (
		<header className={styles.header}>
			<Logo />
			<nav className={styles.navigation}>
				<NavLink to='/create-product'>
					{isEditing ? 'Изменить' : 'Создать'} страховой продукт
				</NavLink>
				<NavLink to='/products-list'>Существующие продукты</NavLink>
				<NavLink to='/login'>Отчетность по продуктам</NavLink>
			</nav>

			<Avatar />
		</header>
	)
}
export default Header
