import styles from './Skills.module.scss';
import Section from '#Molecules/Section';
import Skill from '#Molecules/Skill';

export default function Skills(){
	return(
		<Section className={styles.container}>
			<Skill/>
			<Skill/>
			<Skill/>
		</Section>
	)
}