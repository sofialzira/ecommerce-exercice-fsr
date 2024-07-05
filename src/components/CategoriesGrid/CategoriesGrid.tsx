import styles from './Categories.module.css'
import CategoryCard from './CategoryCard/CategoryCard'

function CategoriesGrid() {
    return (
        <div className={styles.categoriesGrid}>
            <CategoryCard
                link="#cenas"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbHkjltBg46FKq-9DF8sbbgGwbawmsak0AA&s"
                category="Men"
            />
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    )
}

export default CategoriesGrid