import { Navigate, Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '@/api/user'
import { setUser } from '@/redux/userSlice'

export const SignIn = () => {
	const isAuth = useSelector((state) => state.user.isAuth)
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { register, handleSubmit } = useForm()
	const [login] = useLoginMutation()

	const fromPage = location.state?.from?.pathname || '/'

	const onSubmit = async (formData) => {
		try {
			const payload = await login(formData).unwrap()
			// const payload = {
			// 	user: {
			// 		formData,
			// 	},
			// 	token: 'asdfasdf',
			// }
			dispatch(setUser(payload))
			navigate(fromPage, { replace: true })
		} catch (error) {
			alert(error.data.message)
		}
	}

	if (isAuth) {
		return <Navigate to={fromPage} />
	}

	return (
		<div>
			<div>
				<h1>Вход</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='email'
						required
						id='email'
						label='Email'
						name='email'
						autoComplete='email'
						{...register('email')}
					/>
					<input
						required
						name='password'
						label='Пароль'
						type='password'
						id='password'
						autoComplete='current-password'
						{...register('password')}
					/>
					<button type='submit'>Войти</button>
					<div>
						<div>
							<Link to='/registration'>
								Ещё нет аккаунта? Зарегистрироваться
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
