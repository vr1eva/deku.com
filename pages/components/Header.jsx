import Image from "next/image"
import Link from "next/link"
import logo from "../assets/logo.svg"
import styles from "./Header.module.scss"

const links = [
    {name: "Arte", href:"/arte"},
    {name: "Ropa", href:"/ropa"},
    {name: "Accesorios", href:"/accesorios"},
    {name: "Hogar", href:"/hogar"},
    {name: "Marcas", href:"/marcas"},
    {name: "Más", href:"/mas"},
]

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src={logo} width={80} height={21} />
            <nav>
                {links.map(link => (
                    <Link href={link.href}>{link.name}</Link>
                ))}
            </nav>
        </div>

    )
}