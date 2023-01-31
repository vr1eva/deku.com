import styles from "./Price.module.scss"

export default function Price({amount, discount = 1, min=1, max= 1}) {
    const formatPrice = (price) => {
        return (new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(price))
    }
    let price;
    if(discount < 1) {
        const discountedAmount = amount * (1.0 - discount)
        price = <div className={styles.row}><span className={styles.amount}>{formatPrice(discountedAmount)}</span><strike className={styles.originalPrice}>{formatPrice(amount)}</strike></div>    
    } else if(min > 1 || max > 1) {
        price = <span className={styles.amount}>{formatPrice(min)} - {formatPrice(max)}</span>    
    }
    else {
       price = <span>{formatPrice(amount)}</span> 
    }

    return (
        <div className={styles.price}>
            {price}
        </div>
    )
}