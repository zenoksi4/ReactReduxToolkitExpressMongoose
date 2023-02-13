import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getItem } from "../../../store/item/itemSlice";

import Button from "../../Button";
import ContentWrapper from "../../ContentWrapper";
import Header from "../../Header";
import Loader from "../../Loader";

import styles from './styles.module.css'

const ItemPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { item, isLoading } = useSelector(state => state.item)

    useEffect(() => {
        dispatch(getItem(id));
    }, [dispatch, id]);

    if (isLoading) return <Loader />

    return item && (
        <>
            <Header />
            <ContentWrapper className={ styles.nav }>
                <Button 
                        onClick={() => navigate(-1)}
                        isBackButton={ true }
                        className={ styles.backBtn }
                    >
                        ←Back
                </Button>

                <Button
                        containerClassName={ styles.buyBtnContainer }
                        onCLick={ () => navigate('/order')}
                        className={ styles.order }
                >
                        Place an order
                </Button>
            </ContentWrapper>

            <ContentWrapper className={ styles.item }>
                <div className={ styles.descContent}>

                    <h1 className={ styles.title }>{ item.name }</h1>
                    
                    <h3 className={ styles.category }>{ item.category }</h3>

                    <div className={ styles.price }>{ item.price }</div>

                    <p className={ styles.exterior }>{ item.exterior }</p>
                </div>

                <div className={ styles.imageContent }>

                    <img  className={ styles.image } src={ item.itemImage } alt='' />

                </div>

            </ContentWrapper>
        </>
    )
}

export default ItemPage;