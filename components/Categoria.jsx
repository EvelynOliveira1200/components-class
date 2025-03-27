import styles from "../styles/Categoria.module.css"

export default function Categoria({ icon, type }) {
    return (
        <div className={styles.cardCategoria}>
            <p>{icon}</p>
            <p>{type}</p>
        </div>
    );
}