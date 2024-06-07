import { Modal } from "../../components/Modal";
import { ProductCard } from "./components/product-card/ProductCard";
import img from '../../assets/casa.png'
import { ProductDetailCard } from "./components/product-detail-card/ProductDetailCard";

export function MainPage() {

    return (
        <Modal
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
}