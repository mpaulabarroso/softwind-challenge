import styles from './productDetailCard.module.css'

export function ProductDetailCard({ price, address, description, image }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={image} alt={address} className={styles.image} />
                <div>
                    <p className={styles.price}>{price}</p>
                    <h3 className={styles.title}>{address}</h3>
                </div>
            </div>
            <div className={styles.content}>
                <h4 className={styles.subtitle}>Sobre esta propiedad</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}