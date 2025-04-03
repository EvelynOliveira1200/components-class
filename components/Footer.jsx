import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer({
    image,
    text,
    title,
    text1,
    text2,
    link,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
    categoriaFooter,
    text11,
    text12,
    text13,
    text14,
    redes
}) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                <Image className={styles.logo} src={image} />
            </div>
            <div className={styles.footerHistoria}>
                <p className={styles.footerText}>{text1}</p>
                <p className={styles.footerText}>{text2}</p>
            </div>
            </div>
            <div className={styles.footerLink}>
                <h1 className={styles.footerTitle}>{link}</h1>
                <p className={styles.footerText}>{text3}</p>
                <p className={styles.footerText}>{text4}</p>
                <p className={styles.footerText}>{text5}</p>
                <p className={styles.footerText}>{text6}</p>
            </div>
            <div className={styles.categoriaFooter}>
                <h1 className={styles.footerTitle}>{categoriaFooter}</h1>
                <p className={styles.footerText}>{text7}</p>
                <p className={styles.footerText}>{text8}</p>
                <p className={styles.footerText}>{text9}</p>
                <p className={styles.footerText}>{text10}</p>
            </div>
            <div className={styles.redes}>
                <h1 className={styles.footerTitle}>{redes}</h1>
                <p className={styles.footerText}>{text11}</p>
                <p className={styles.footerText}>{text12}</p>
                <p className={styles.footerText}>{text13}</p>
                <p className={styles.footerText}>{text14}</p>
            </div>
            <p className={styles.text}>{text}</p>
        </footer>
    );
}