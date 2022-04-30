import styles from './Skill.module.scss';
import Image from 'next/image';

export default function Skill({className=''}){
	return(
		<div className={`${styles.container} ${className}`}>
			<div className={styles.image_container}>
				<div className={styles.image}>
					<Image src="/images/javascript.svg" width={48} height={48}/>
				</div>
			</div>
			<div className={styles.content}>
				Lorem Ipsum tatum
			</div>
		</div>
	)
}