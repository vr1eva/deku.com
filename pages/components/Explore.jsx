import arrow from "../assets/arrow.svg"
import styles from "./Explore.module.scss"
import Image from "next/image"

export default function Explore() {
    return (
        <section className={styles.explore}>
            <div className={styles.header}>
                <h3 className={styles.heading}>Explore</h3>
                <div className={styles.more}>
                    <p className={styles.seeMore}>Ver más</p>
                    <Image className={styles.arrow} src={arrow} width={19} height={16}  />
                </div>
            </div>
        </section>
    )
}