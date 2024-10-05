import clsx from 'clsx'
import styles from './Title.module.scss'

export const Title = ({ children, type, ...props }) => {
	return (
		<h3 className={clsx(styles.title, styles[type])} {...props}>
			{children}
		</h3>
	)
}
