import ContentWrapper from '../ContentWrapper';

import styles from './styles.module.css'
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
            <ContentWrapper className={ styles.footer }>
                <a 
                className={ styles.gitLink } 
                href='https://github.com/zenoksi4/ReactReduxToolkitExpressMongooseStore'
                target={'_blank'}
                >
                    <AiFillGithub className={ styles.gitIcon }/>
                    <p>Project on GitHub</p> 
                </a>
            </ContentWrapper>
    )
}

export default Footer;