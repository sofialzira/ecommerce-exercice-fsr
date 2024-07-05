
function CategoryCard(props) {
    const { category, link, image } = props;
    return (
        <div c style={{
            backgroundImage: `url(${image})`
        }}>
            <a href={link}>{category}</a>
        </div>
    )
}

export default CategoryCard