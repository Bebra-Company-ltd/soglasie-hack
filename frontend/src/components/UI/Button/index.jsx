import clsx from 'clsx'
import styles from './Button.module.scss'

export const Button = ({ htmlType = 'button', children, type, ...props }) => {
	return (
		<button
			className={clsx(styles.button, styles.default, styles[type])}
			disabled={type === 'disabled'}
			type={htmlType}
			{...props}
		>
			{children}
		</button>
	)
}
