import styles from './PostsCard.module.css'
import postImage from '../../assets/posts/unsplash_dEGu-oCuB1Y.png'
import { Icon } from '@iconify/react/dist/iconify.js'

function PostsCard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <span>New</span>
                <img src={postImage} />
            </div>
            <div className={styles.info}>
                <div className={styles.categories}>
                    <span>Google</span>
                    <span>Treding</span>
                    <span>New</span>
                </div>
                <h3 className={styles.title}>Loudest à la Madison #1
                    (L'integral)</h3>
                <p className={styles.summary}>
                    We focus on ergonomics and meeting
                    you where you work. It's only a
                    keystroke away.
                </p>
                <div className={styles.postMeta}>
                    <div className={styles.metadata}>
                        <Icon icon="mdi:clock-outline" height="2rem" />
                        <span>22 July 2024</span>
                    </div>
                    <div className={styles.metadata}>
                        <Icon icon="ooui:chart" height="2rem" />
                        <span>10 comments</span>
                    </div>
                </div>
                <a href="/blog/link">
                    Learn More
                    <Icon icon="material-symbols-light:chevron-forward" height="2.5rem" />
                </a>
            </div>

        </div>
    )
}

export default PostsCard