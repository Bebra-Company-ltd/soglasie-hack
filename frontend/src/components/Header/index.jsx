import styles from './Header.module.scss'
import { Logo } from '@/components/UI/Logo'
import { Avatar } from '@/components/UI/Avatar'
import { NavLink } from '@/components/UI/NavLink'

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<nav className={styles.navigation}>
				<NavLink to='/'>Создать страховой продукт</NavLink>
				<NavLink to='/registration'>Существующие продукты</NavLink>
				<NavLink to='/login'>Отчетность по продуктам</NavLink>
			</nav>

			<Avatar />
		</header>
	)
}
export default Header
