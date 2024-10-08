import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './reset.scss'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
