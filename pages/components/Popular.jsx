import Image from "next/image"
import more from "../assets/more.svg"
import styles from "./Popular.module.scss"
const categories = [
    {
        text: "zapatos",
        href: "/categories/shoes",
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675632870/shoes_xwhddq.png"
    },
    {
        text: "cerámica",
        href: "/categories/ceramic",
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675632870/ceramic_vpvwkz.png",
    },
    {
        text: "tecnología",
        href: "/categories/technology",
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675632870/tech_xmqyyg.png",
    },
    {
        text: "cocina",
        href: "/categories/kitchen",
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675632870/kitchen_qnehbi.png",
    },
    {
        text: "gatos",
        href: "/categories/cats",
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675632870/cats_sl1dqk.png"
    },
    {
        text: "camisas",
        href: "/categories/shirts",
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675632870/shirts_ybjrmi.png"
    },
]

export default function Popular() {
    return (
        <div className={styles.popular}>
           <div className={styles.header}>
                <h3 className={styles.heading}>Categorías populares</h3>
                <div className={styles.more}>
                    <span className={styles.seeMore}>Ver más</span>
                    <Image src={more} className={styles.moreImage} />
                </div>
           </div>

            <div className={styles.grid}>
                {categories.map(category =>{
                    return (
                        <div className={styles.cell}  style={{
                            backgroundImage: `url(${category.image})`,
                          }}>
                            <span className={styles.categoryText}>{category.text}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}