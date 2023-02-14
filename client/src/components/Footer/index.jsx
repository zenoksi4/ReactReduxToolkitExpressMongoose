import ContentWrapper from '../ContentWrapper';

import styles from './styles.module.css'
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
            <ContentWrapper className={ styles.footer }>
                <div className={ styles.gitLink }>
                    <AiFillGithub className={ styles.gitIcon }/>
                    <a>Project on GitHub</a> 
                </div>
            </ContentWrapper>
    )
}

export default Footer;