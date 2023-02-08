import styles from './styles.module.css'

 const ContentWrapper = ({ children, className = ''}) => {
    return (
        <div className={ `${styles.contentWrapper} ${className}` }>
            {children}
        </div>
    )
}

export default ContentWrapper;