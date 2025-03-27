import styles from "../styles/Cards.module.css";

export default function Cards({image, title, text, icon, valor, descricao}) {
    return (
       <div className={styles.cards}>
        <Image className={styles.img} src={image} alt="imagem"/>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.name}>{text}</p>
        <div className={styles.icons}>
            <p>{icon}</p>
        </div>
        <div className={styles.descricao}>
            <p>{descricao}</p>
        </div>
        <div className="fimcard">
            <p>{valor}</p>
            <p>{icon}</p>
            <p>{icon}</p>  
        </div>
       </div>
    )
}