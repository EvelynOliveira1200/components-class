import styles from "../styles/Banner.module.css";

export default function Banner ({ title, text}) {
    return (
        <div className={styles.banner}>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className={styles.registration}>
            <input className={styles.input} type="text" placeholder="Insira seu e-mail" />
            <button className={styles.button}>Cadastre-se</button>
            </div>
        </div>
    );
}