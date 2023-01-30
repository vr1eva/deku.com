import styles from "./Search.module.scss"
import lupa from "../assets/lupa.svg"
import Image from "next/image"

export default function Search() {
    return (
        <label htmlFor="input" className={styles.search}>
            <input name="input" className={styles.input} placeholder="Buscar..." />
            <Image src={lupa} width={16} height={16} />
        </label>
        )
}