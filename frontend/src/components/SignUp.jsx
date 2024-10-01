import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useRegistrationMutation } from '../api/user'
import { useSelector } from 'react-redux'

export const SignUp = () => {
	const navigate = useNavigate()
	const isAuth = useSelector((state) => state.user.isAuth)
	const { register, handleSubmit } = useForm()
	const [registration] = useRegistrationMutation()

	const onSubmit = async (formData) => {
		try {
			const payload = await registration(formData).unwrap()
			alert(payload.message)
			navigate('/login')
		} catch (error) {
			alert(error.data.message)
		}
	}

	if (isAuth) {
		return <Navigate to='/' />
	}

	return (
		<div>
			<div>
				<h1>Регистрация</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						required
						type='email'
						label='Email'
						name='email'
						id='email'
						autoComplete='email'
						{...register('email')}
					/>
					<input
						required
						name='password'
						label='Пароль'
						type='password'
						id='password'
						autoComplete='new-password'
						{...register('password')}
					/>
					<button type='submit'>Зарегистрироваться</button>
					<div>
						<div>
							<Link to='/login'>Уже есть аккаунт? Войти</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
