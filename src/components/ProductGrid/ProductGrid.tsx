import ProductCard from '../ProductCard/ProductCard'
import ProductListCard from '../ProductListCard/ProductListCard'
import styles from './ProductGrid.module.css'

function ProductGrid() {
    return (
        <>
            <div className={styles.wrapper}>
                <ProductCard />
            </div>
            <ProductListCard />
        </>

    )
}

export default ProductGrid