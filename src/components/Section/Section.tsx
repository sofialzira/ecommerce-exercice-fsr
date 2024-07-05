import styles from './Section.module.css'

// Componente 
function Section(props) {

    const { children, fullwidth = false } = props;


    const sectionCss = styles.section;

    return (
        <section className={`${sectionCss} ${fullwidth ? 'fullwidth' : ""}`}>
            {children}
        </section>
    )
}

export default Section