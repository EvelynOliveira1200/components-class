import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header({ image, title, text1, text2, text3, text4, icon1, icon2, icon3, icon4 }) {
    return(
        <header className={styles.header}>
            <Image className={styles.logo} src={image} />
            <h1 className={styles.title}>{title}</h1>
            <nav>
                <ul className={styles.menu}>
                    <li>{text1}</li>
                    <li>{text2}</li>
                    <li>{text3}</li>
                    <li>{text4}</li>
                </ul>
            </nav>
            <p className={styles.search}>{icon1}</p>
            <input className={styles.input} type="text" placeholder="Buscar doces, categorias..." />
            <p className={styles.icone}>{icon2}</p>
            <p className={styles.icone}>{icon3}</p>
            <p className={styles.icone}>{icon4}</p>
        </header>
    );
}