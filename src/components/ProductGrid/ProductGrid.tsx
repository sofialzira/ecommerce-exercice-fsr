import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductGrid.module.css'

function ProductGrid() {
    return (
        <div className={styles.wrapper}>
            <ProductCard />
        </div>
    )
}

export default ProductGrid