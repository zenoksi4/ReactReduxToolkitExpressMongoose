import { Link } from 'react-router-dom'
import { paths } from '../../paths'

import styles from './styles.module.css'

const Item = ({
    name = '',
    price = 0,
    itemImage = '',
    _id = '',
    category = ''

 }) => {
    return (
        <Link to={`${paths.item}/${_id}`} className= {styles.item}>
            <div className={styles.categoryWrap}>
            <div className={styles.category}>{ category }</div>
            </div>
            { itemImage && <img className={ styles.image } src={itemImage} alt='' />}

            <div className={ styles.info }>
                <h2 className={ styles.title }>{ name }</h2>
                <span className={ styles.price }>${ price }</span>
            </div>


        </Link>
    )
}

export default Item;