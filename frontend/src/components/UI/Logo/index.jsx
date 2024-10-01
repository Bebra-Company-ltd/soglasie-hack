import LogoImg from '@/assets/logo.png'
import { Link } from 'react-router-dom'

export const Logo = () => {
	return (
		<Link to='/'>
			<img src={LogoImg} alt='Логотип' />
		</Link>
	)
}
