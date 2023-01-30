import Image from "next/image"
import Link from "next/link"
import logo from "../assets/logo.svg"
import styles from "./Header.module.scss"
import Search from "./Search"
import cart from "../assets/cart.svg"
import profile from "../assets/profile.svg"

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
            <nav className={styles.nav}>
                {links.map(link => (
                    <Link key={link.href} href={link.href}>{link.name}</Link>
                ))}
            </nav>
            <Search />
            <div className={styles.shortcuts}>
                <Link href="/cart"><Image src={cart} width={16} height={16}/></Link>
                <Link href="/profile"><Image src={profile} width={11} height={16}/></Link>
                <Link className={styles.login} href="/login" >Iniciar sesión</Link>
            </div>
        </div>

    )
}