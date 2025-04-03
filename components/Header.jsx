import styles from "../styles/Header.module.css";
import Image from "next/image";
import { Search, Heart, ShoppingCart, User } from "lucide-react";

export default function Header({ image, title, text1, text2, text3, text4 }) {
    return(
        <header className={styles.header}>
            <Image className={styles.logo} src={image} alt="Image"/>
            <h1 className={styles.title}>{title}</h1>
            <nav>
                <ul className={styles.menu}>
                    <li className={styles.textHeader}>{text1}</li>
                    <li className={styles.textHeader}>{text2}</li>
                    <li className={styles.textHeader}>{text3}</li>
                    <li className={styles.textHeader}>{text4}</li>
                </ul>
            </nav>
            <p className={styles.icon}><Search /></p>
            <input className={styles.input} type="text" placeholder="Buscar doces, categorias..." />
            <nav>
                <ul className={styles.menuIcons}>
                    <li className={styles.icon}><Heart /></li>
                    <li className={styles.icon}><ShoppingCart /></li>
                    <li className={styles.icon}><User /></li>
                </ul>
            </nav>
        </header>
    );
}