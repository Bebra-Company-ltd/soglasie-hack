import { NavLink as RouterNavLink } from 'react-router-dom'
import styles from './NavLink.module.scss'
import clsx from 'clsx'

export const NavLink = ({ children, to, ...props }) => {
	const navLinkStatus = (isActive, isPending) => {
		if (isPending) {
			return styles.isPending
		}
		if (isActive) {
			return styles.active
		}
	}

	return (
		<RouterNavLink
			className={({ isActive, isPending }) =>
				clsx(styles.navLink, navLinkStatus(isActive, isPending))
			}
			to={to}
			{...props}
		>
			{children}
		</RouterNavLink>
	)
}
