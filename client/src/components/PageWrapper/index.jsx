import styles from './styles.module.css'

const PageWrapper = ({ children, className = ''}) => {
    return (
        <div className={ `${styles.pageWrapper} ${className}` }>
            {children}
        </div>
    )
}

export default PageWrapper;