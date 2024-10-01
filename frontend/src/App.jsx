import Header from '@/components/Header'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
// import { useAuthQuery } from './api/user'
// import { logOut, setUser } from './redux/userSlice'
// import { Loader } from './components/UI/Loader'

export const App = () => {
	// const dispatch = useDispatch()
	// const { data, isFetching, isError } = useAuthQuery()
	// const isAuth = useSelector((state) => state.user.isAuth)

	// useEffect(() => {
	// 	if (isError) {
	// 		dispatch(logOut())
	// 	}
	// }, [isError, dispatch])

	// useEffect(() => {
	// 	if (data) {
	// 		if (!isAuth) {
	// 			dispatch(setUser(data))
	// 		}
	// 	}
	// }, [data, dispatch, isAuth])

	// if (isFetching) {
	// 	return <Loader />
	// }

	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
