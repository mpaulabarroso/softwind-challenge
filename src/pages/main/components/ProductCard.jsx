import styles from './productCard.module.css'

export function ProductCard({ price, address, description, image }) {
    return (
        <div className={styles.container}>
            <img src={image} alt={address} className={styles.image} />
            <div className={styles.content}>
                <p className={styles.price}>{price}</p>
                <h3 className={styles.title}>{address}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}