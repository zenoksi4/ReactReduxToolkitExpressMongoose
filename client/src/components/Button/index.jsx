import styles from './styles.module.css'

const Button = ({
    containerClassName = '',
    className = '',
    onClick = () => null,
    children = '',
    isBackButton = false,
    typeSubmit = false
}) => {
    return (
        <div className={ containerClassName }>
            {typeSubmit ?
                <button 
                className={ `${isBackButton ? styles.backButton : styles.button} ${className}` }
                onClick={ onClick }
                >

                    { children }
                </button>
                :
                <span 
                className={ `${isBackButton ? styles.backButton : styles.button} ${className}` }
                onClick={ onClick }
                >
    
                    { children }
                </span>
            }

        </div>
    )
}

export default Button;