import style from './Main.module.scss';


export default function Main({children}){
    return(
        <main className={style.container}>
            {children}
        </main>
    )
}