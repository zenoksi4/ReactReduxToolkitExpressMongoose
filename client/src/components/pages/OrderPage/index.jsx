import { useNavigate } from 'react-router-dom';

import Button from '../../Button';
import ContentWrapper from '../../ContentWrapper';

import styles from './styles.module.css'



const OrderPage = () => {
    const navigate = useNavigate();


    return (
        <ContentWrapper className={ styles.order } >
            <h1 className={ styles.title }>Thank you for your order. We're happy to confirm that your purchase has been received and is being processed.</h1>
            <Button 
                onClick={() => navigate('/')}
                containerClassName={ styles.button }
            >
                Main page
            </Button>
        </ContentWrapper>
    )
}

export default OrderPage;