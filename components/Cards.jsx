import styles from "../styles/Cards.module.css";
import Image from "next/image";

export default function Cards({img, title, text, icon, valor, descricao, texticon}) {
    console.log(img);
    return (
       <div className={styles.cards}>
        <Image className={styles.img} src={img} alt="imagem" width={150} height={150}/>
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
            <p>{texticon}</p>
        </div>
       </div>
    )
}