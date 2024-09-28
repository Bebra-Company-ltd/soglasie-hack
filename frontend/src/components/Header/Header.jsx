import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<NavLink to='/'>Главная</NavLink>
			<br />
			<NavLink to='/counter'>Счётчик</NavLink>
			<br />
			<NavLink to='/not-found'>Ошибка</NavLink>
		</header>
	)
}
export default Header
