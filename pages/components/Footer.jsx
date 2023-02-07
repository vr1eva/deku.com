import styles from "./Footer.module.scss"
import deku from "../assets/deku.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.branding}>
                    <Image alt="deku logo" className={styles.logo} src={deku} />
                    <p className={styles.email}>soporte@deku.com </p>
                    <div className={styles.platforms}>
                        <Image alt="instagram logo" src={instagram}  />
                        <Image alt="twitter logo" src={twitter} />
                        <Image alt="youtube logo" src={youtube} />
                    </div>

                </div>

                <div className={styles.links}>
                    <div className={styles.column}>
                        <Link className={styles.link} href="#" >Ética & Responsabilidad</Link>
                        <Link className={styles.link} href="#" >Preguntas frecuentes</Link>
                    </div>
                    <div className={styles.column}>
                        <Link className={styles.link} href="#" >Términos & Condiciones</Link>
                        <Link className={styles.link} href="#" >Políticas de Privacidad</Link>
                    </div>
                </div>

                <div className={styles.copy}>
                    <p className={styles.right}>deku © 2022</p>
                    <p className={styles.plug}>developed by <span className={styles.highlight}>vr1eva</span></p>
                </div>
            </div>
        </div>
    )
}