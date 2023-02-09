import ContentWrapper from '../ContentWrapper';
import styles from './styles.module.css'
import WaveImage from './wave.svg'

const Header = () => {
    return (
        <div className={ styles.header }>
            <ContentWrapper className={ styles.content }>
                <h1 className={ styles.title }>{`CS GO items at low prices`}</h1>
                <p className={ styles.desc }>{`You can get rare CS GO items in your inventory!`}</p>
            </ContentWrapper>
            <img src={ WaveImage } alt="" className={ styles.wave }/>
        </div>
    )
}

export default Header;