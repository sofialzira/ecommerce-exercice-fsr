import styles from './ProductCard.module.css'
import productImg from '../../assets/products/product-cover-1.png'

type ProductCardType = {
    productName: string;
    image: string;
    description: string;
    oldPrice: number;
    currentPrice: number;
    variantColor: Array<string> // string[]
}

function ProductCard(props: ProductCardType) {

    const { productName,
        image,
        description,
        oldPrice,
        currentPrice,
        variantColor } = props
    return (
        <div className={styles.productCard}>
            <img src={image} alt="product name" />
            <div className={styles.info}>
                <h3 className={styles.name}>{productName}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.price}>
                    <span className={styles.oldPrice}>{oldPrice}€</span>
                    <span className={styles.currentPrice}>{currentPrice}€</span>
                </div>
                <div className={styles.colors}>
                    <span style={{ backgroundColor: "#23A6F0" }}></span>
                    <span style={{ backgroundColor: "#23856D" }}></span>
                    <span style={{ backgroundColor: "#E77C40" }}></span>
                    <span style={{ backgroundColor: "#252B42" }}></span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard