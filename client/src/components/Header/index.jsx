import ContentWrapper from '../ContentWrapper';
import WaveImage from './wave.svg'

import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import Button from '../Button';

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
      setLoggedIn(isLoggedIn);
    }, [loggedIn]);

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem('loggedIn');
        window.location.reload();
      }

    return (
        <div className={ styles.header }>
            <ContentWrapper className={ styles.content }>
                <h1 className={ styles.title }>{`CS GO items at low prices`}</h1>
                <p className={ styles.desc }>{`You can get rare CS GO items in your inventory!`}</p>
                {
                   loggedIn && <Button isBackButton={true} className={ styles.logOut } onClick = {handleLogout}>LogOut</Button>  
                }
                
            </ContentWrapper>
            <div class={ styles.ocean }>
                <div class={ styles.waveOcean }></div>
                <div class={ styles.waveOcean }></div>
                <div class={ styles.waveOcean }></div>
            </div>
            <img src={ WaveImage } alt="" className={ styles.wave }/>

        </div>
    )
}

export default Header;