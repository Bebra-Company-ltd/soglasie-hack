import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './routes/ErrorPage'
import { App } from '../App'
import { Counter } from './routes/Counter'
import { Root } from './routes/Root'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'
// import { RequireAuth } from './components/RequireAuth'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Root /> },
			{
				path: '/counter',
				element: (
					// <RequireAuth>
					<Counter />
					// </RequireAuth>
				),
			},
			{
				path: '/login',
				element: <SignIn />,
			},
			{
				path: '/registration',
				element: <SignUp />,
			},
		],
	},
])
