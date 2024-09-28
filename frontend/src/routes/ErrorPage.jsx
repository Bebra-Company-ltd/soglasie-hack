import { Link, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
	const error = useRouteError()
	console.error(error)

	return (
		<div id='error-page'>
			<h1>Ошибка {error.status}</h1>
			<p>{error.statusText}</p>
			<Link to='/'>На главную</Link>
		</div>
	)
}
