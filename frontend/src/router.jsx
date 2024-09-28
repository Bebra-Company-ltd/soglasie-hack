import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './routes/ErrorPage'
import { App } from './App'
import { Counter } from './routes/Counter'
import { Index } from './routes/Index'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Index /> },
			{
				path: '/counter',
				element: <Counter />,
			},
		],
	},
])
