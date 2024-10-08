import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './routes/ErrorPage'
import { App } from '../App'
import { Root } from './routes/Root'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'
import { CreateProduct } from './routes/CreateProduct'
import { ProductsList } from './routes/ProductsList'
import { ProductsStats } from './routes/ProductsStats'
import { CreateContract } from './routes/CreateContract'
// import { RequireAuth } from './components/RequireAuth'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <CreateProduct /> },
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
				path: '/products-stats',
				element: (
					// <RequireAuth>
					<ProductsStats />
					// </RequireAuth>
				),
			},
			{
				path: '/create-contract',
				element: (
					// <RequireAuth>
					<CreateContract />
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
