import styles from './Loader.module.scss'

export const Loader = () => {
	return (
		<div className={styles.LoaderContainer}>
			<span className={styles.Loader}></span>
		</div>
	)
}
