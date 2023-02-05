import Image from "next/image"
import join from "../assets/join.png"
import styles from "./Join.module.scss"

export default function Join() {

    return (
        <div className={styles.join}>
            <div className={styles.joinContainer}>
                <Image src={join} className={styles.joinImage} />
                <div className={styles.panel}>
                    <h2 className={styles.heading}>¿Cómo funciona <span className={styles.highlight}>deku</span>?</h2>
                    <p className={styles.paragraph}>Deku es un espacio para diseñadores y artistas independientes que quieren vender sus creaciones y tener total control sobre ellas.
                    <br /><br />Creemos en el consumo consciente y sostenible, por ello Deku está hecho también para encontrarle una segunda vida a tu ropa y objetos que ya cumplieron su ciclo contigo.</p>
                    <button className={styles.button}>Unirme</button>
                </div>
            </div>
        </div>
    )
}