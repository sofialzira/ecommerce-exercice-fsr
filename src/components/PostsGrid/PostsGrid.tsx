import PostsCard from '../PostsCard/PostsCard'
import styles from './PostsGrid.module.css'

function PostsGrid() {
    return (
        <div className={styles.postGrid}>
            <PostsCard />
        </div>
    )
}

export default PostsGrid