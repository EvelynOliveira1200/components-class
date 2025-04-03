import styles from "../styles/Cards.module.css";
import Image from "next/image";

export default function Cards({img, title, text, icon, valor, description, texticon}) {
    console.log(img);
    return (
       <div className={styles.cards}>
        <Image className={styles.img} src={img} alt="imagem" width={100} height={100}/>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.name}>{text}</p>
        <div className={styles.icons}>
            <p>{icon}</p>
        </div>
        <div className={styles.description}>
            <p>{description}</p>
        </div>
        <div className={styles.fimcard}>
            <p className={styles.valor}>{valor}</p>
            <p className={styles.iconsfim}>{texticon}</p> 
        </div>
       </div>
    )
}