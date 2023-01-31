import arrow from "../assets/arrow.svg"
import styles from "./Explore.module.scss"
import Image from "next/image"
import Carousel from "nuka-carousel"
import Listing from "./Listing"

const listings = [
    {
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675112746/listing_ewyd9h.png", 
        title: "Overol beige - upcycled", 
        price: 65.00,
        discount: 1
    },
    {
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675204264/juego_vqifnq.png", 
        title: "Juego de platos - TODO", 
        price: 30.00,
        discount: 0.3
    },
    {
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675205241/aretes_lc0twd.png", 
        title: "Aretes de oro 18k", 
        price: 48.00,
        discount: 1
    },
    {
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675205321/tocadiscos_zkl1lo.png", 
        title: "Tocadiscos de segunda - varios", 
        price: 120,
        discount: 1,
        minPrice: 120,
        maxPrice: 390
    },
    {
        image: "https://res.cloudinary.com/dkzaozc1s/image/upload/v1675205426/mochila_j6s4qi.png", 
        title: "Mochila viajera segunda mano", 
        price: 39.50,
        discount: 1
    },
]

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

            <Carousel wrapAround={true} slidesToShow={5} renderCenterLeftControls={null} renderCenterRightControls={null} renderBottomCenterControls={null}>
                {listings.map(({image, title, price, minPrice=1, maxPrice=1, discount=1}) => (
                    <Listing key={title} minPrice={minPrice} maxPrice={maxPrice} image={image} title={title} price={price} discount={discount} />
                ))}
            </Carousel>
        </section>
    )
}