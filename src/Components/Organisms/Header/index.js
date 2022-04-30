import styles from './Header.module.scss';

export default function Header(){
    return(
        <div className="bg-prime">
            <header className={styles.container}>
                <div className={styles.logo}><a href="/" >NH</a></div>
                <nav>
                    <ul className={styles.menu}>
                        <li className={styles.item}><a href="#home">Home</a></li>
                        <li className={styles.item}><a href="#about">About me</a></li>
                        <li className={styles.item}><a href="#skills">Skills</a></li>
                        <li className={styles.item}><a href="#portfolio">Portfolio</a></li>
                        <li className={styles.item}><a href="#services">Services</a></li>
                        <li className={styles.item}><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}