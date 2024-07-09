import styles from './PostsCard.module.css'
import { Icon } from '@iconify/react/dist/iconify.js'

type PostsCardType = {
    postImage: string;
    categories: string[];
    title: string;
    summary: string;
    numberOfComents: number;
    publishDate: string;
    link: string;
}



function PostsCard(props: PostsCardType) {

    // const { 
    //     postImage,
    //     categories,
    //     title,
    //     summary,
    //     numberOfComents,
    //     publishDate,
    //     link,
    // } = props 


    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <span>New</span>
                <img src={props.postImage} />
            </div>
            <div className={styles.info}>
                <div className={styles.categories}>
                    {props.categories.map((category) => <span>{category}</span>)}
                    <span>New</span>
                </div>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.summary}>
                    {props.summary}
                </p>
                <div className={styles.postMeta}>
                    <div className={styles.metadata}>
                        <Icon icon="mdi:clock-outline" height="2rem" />
                        <span>{props.publishDate}</span>
                    </div>
                    <div className={styles.metadata}>
                        <Icon icon="ooui:chart" height="2rem" />
                        <span>{props.numberOfComents} comments</span>
                    </div>
                </div>
                <a href={props.link}>
                    Learn More
                    <Icon icon="material-symbols-light:chevron-forward" height="2.5rem" />
                </a>
            </div>

        </div>
    ) 
}

export default PostsCard