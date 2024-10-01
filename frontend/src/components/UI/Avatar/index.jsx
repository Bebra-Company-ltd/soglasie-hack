import { Link } from 'react-router-dom'

export const Avatar = () => {
	return (
		<Link to='/login'>
			<img
				src='https://avatar.iran.liara.run/public'
				alt='Личный кабинет'
				height='40'
			/>
		</Link>
	)
}
