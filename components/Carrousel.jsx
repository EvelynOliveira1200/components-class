import Image from "next/image";
import styles from "../styles/Carrousel.module.css";

export default function Banner({ img }) {
    return (
        <div className={styles.banner}>
            <Image className={styles.img} src={img} />
        </div>
    );
}