import styles from './Hero.module.scss';
import Image from 'next/image';

import Section from '#Molecules/Section';
import Button from '#Atoms/Button';

export default function Hero(){
    return(
        <Section className={styles.container}>
            <h1 className={styles.content}>
                <span className={styles.intro}>I am a</span>
                <div className={styles.title}><span>Frontend</span><span>Developer.</span></div>
                <Button style={styles.button} tag="a" href="#contact">Let work together</Button>
            </h1>
            <div className={styles.image}>
                <Image src="/images/hero.png" width={360} height={360}/>
            </div>
        </Section>
    )
}