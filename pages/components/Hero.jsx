import styles from "./Hero.module.scss"
import Button from "./Button"
import heroImage from "../assets/hero.jpg"
import Link from "next/link"

export default function Hero() {
    return (
        <div className={styles.hero} style={{
            backgroundImage: `linear-gradient(360deg, rgba(0, 0, 0, 0.59) 0%, rgba(0, 0, 0, 0) 67.72%, rgba(0, 0, 0, 0) 97.16%), url(${heroImage.src})`,
          }}>
            <h1 className={styles.heading}>Consume consciente</h1>
            <p className={styles.paragraph}>La manera responsable de comprar ropa y vender tus creaciones es conectar con el proceso.
Prendas de diseñadores independientes, de segunda mano, artesanías, antigüedades y todo lo que estás buscando</p>
            <Link href="/mas"><Button name="Descubrir más" variant="primary" /></Link>
        </div>
    )
}