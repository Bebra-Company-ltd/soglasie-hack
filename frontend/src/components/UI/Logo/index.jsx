import LogoImg from '@/assets/logo.png'
import { Link } from 'react-router-dom'

export const Logo = () => {
	return (
		<Link to='/create-contract'>
			<img src={LogoImg} alt='Логотип' />
		</Link>
	)
}
