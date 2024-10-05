import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './routes/ErrorPage'
import { App } from '../App'
import { Root } from './routes/Root'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'
import { CreateProduct } from './routes/CreateProduct'
import { ProductsList } from './routes/ProductsList'
// import { RequireAuth } from './components/RequireAuth'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Root /> },
			{
				path: '/create-product',
				element: (
					// <RequireAuth>
					<CreateProduct />
					// </RequireAuth>
				),
			},
			{
				path: '/products-list',
				element: (
					// <RequireAuth>
					<ProductsList />
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
