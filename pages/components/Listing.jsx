import Image from "next/image"
import styles from "./Listing.module.scss"
import Price from "./Price"

export default function Listing({image, title, price, minPrice, maxPrice, discount =1}) {
    return (
        <div className={styles.listing}>
            <Image src={image} width={275} height={275} />
            <div className={styles.details}>
                <p className={styles.title}>{title}</p>
                <Price amount={price} discount={discount} min={minPrice} max={maxPrice}  />
            </div>
        </div>
    )
}