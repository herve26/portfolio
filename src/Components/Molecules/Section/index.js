import styles from './Section.module.scss';

export default function Section({children, className=""}){
	return(
		<section className={`${styles.container} ${className}`}>
			{children}
		</section>
	)
}