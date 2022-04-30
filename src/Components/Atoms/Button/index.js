import styles from './Button.module.scss';

export default function Button({tag="button", children, href, style=""}){
	const Elm = tag === "a" ? (props) => <a href={href} {...props}/> : props => <button {...props}/>

	return(
		<Elm className={`${styles.container} ${style}`}>{children}</Elm>
	)
}