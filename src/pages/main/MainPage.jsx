import { Modal } from "../../components/Modal";
import { ProductCard } from "./components/product-card/ProductCard";
import img from '../../assets/casa.png'
import { ProductDetailCard } from "./components/product-detail-card/ProductDetailCard";
import styles from './mainPage.module.css'

export function MainPage() {

    return (
        <div className={styles.container}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => {
                return (
                    <Modal
                        key={i}
                        toDisplay={
                            <ProductDetailCard
                                image={img}
                                price={'$ 50000'}
                                address={'Congreso 1920'}
                                description={'Cerca del centro y a cuadras del parque. Acogedora casa adosada de dos dormitorios ubicada en un pintoresco vecindario residencial. Esta encantadora propiedad cuenta con una amplia sala de estar, una cocina moderna totalmente equipada y un hermoso patio trasero perfecto para entretenimiento al aire libre. Con una ubicación conveniente cerca de parques, escuelas y tiendas locales, esta propiedad es ideal para parejas jóvenes o familias que buscan establecerse en un entorno tranquilo y acogedor.'}
                            />
                        }
                        onPress={
                            <ProductCard
                                image={img}
                                price={'$ 50000'}
                                address={'Congreso 1920'}
                                description={'Cerca del centro y a cuadras del parque...'}
                            />
                        }
                    />
                )
            })}
        </div>
    )
}