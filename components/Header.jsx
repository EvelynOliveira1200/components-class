import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header({ image, title, text, icon }) {
    return(
        <header className={styles.header}>
            <Image className={styles.logo} src={image} />
            <h1 className={styles.title}>{title}</h1>
            <nav>
                <ul>
                    <li>{text}</li>
                    <li>{text}</li>
                    <li>{text}</li>
                    <li>{text}</li>
                </ul>
            </nav>
            <input className={styles.input} type="text" placeholder="Buscar doces, categorias..." />
            <p className={styles.icone}>{icon}</p>
            <p className={styles.icone}>{icon}</p>
            <p className={styles.icone}>{icon}</p>
        </header>
    );
}