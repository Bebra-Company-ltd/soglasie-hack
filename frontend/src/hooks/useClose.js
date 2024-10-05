import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useClose = (ref, isOpen, setIsOpen) => {
	const dispatch = useDispatch()

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				ref.current &&
				!ref.current.contains(event.target) &&
				isOpen === true
			) {
				dispatch(setIsOpen(false))
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [dispatch, isOpen, ref, setIsOpen])
}
