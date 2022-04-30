import styles from './About.module.scss';
import Image from 'next/image';

import Section from '#Molecules/Section';

export default function About(){
	return (
		<Section className={styles.container}>
			<div className={styles.image}><Image src="/images/javascript.svg" width={64} height={64}/></div>
			<div className={styles.content}>
				<h2 className={styles.heading}>Me</h2>
				<div>
					<h3>Hello! I am Nzanzu Herve</h3>
					<p>I make great products with Web Technologies</p>
				</div>
			</div>
		</Section>
	)
}