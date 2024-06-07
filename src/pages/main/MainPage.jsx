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
                                description={'Cerca del centro y a cuadras del parque'}
                            />
                        }
                        onPress={
                            <ProductCard
                                image={img}
                                price={'$ 50000'}
                                address={'Congreso 1920'}
                                description={'Cerca del centro y a cuadras del parque'}
                            />
                        }
                    />
                )
            })}
        </div>
    )
}