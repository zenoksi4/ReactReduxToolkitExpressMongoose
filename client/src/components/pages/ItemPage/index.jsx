import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { paths } from "../../../paths";
import { deleteItem, getItem } from "../../../store/item/itemSlice";
import ReactDOM from 'react-dom';

import Button from "../../Button";
import ContentWrapper from "../../ContentWrapper";
import Loader from "../../Loader";
import ModalConfirm from "../../ModalConfirm";

import styles from './styles.module.css'

const ItemPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { item, isLoading } = useSelector(state => state.item)
    const [loggedIn, setLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
      setLoggedIn(isLoggedIn);
    }, [loggedIn]);

    useEffect(() => {
        dispatch(getItem(id));
    }, [dispatch, id]);

    if (isLoading) return <Loader />

    return item && (
        <>
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
                        onClick={ () => navigate('/order') }
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

            {
                loggedIn &&   
                    <ContentWrapper className={ styles.contentDeleteBtn }>

                        <Button 
                        className={ styles.deleteBtn } 
                        onClick={ () => setShowModal(true)}
                        >
                            DELETE ITEM
                        </Button>

                        {
                            ReactDOM.createPortal(                            
                                <ModalConfirm 
                                title="Delete item?"
                                onConfirm={ () => { 
                                    dispatch(deleteItem(id));
                                    navigate(`${paths.home}`, { replace: true });
                                 } }
                                onCancel={ () => setShowModal(false) }
                                showModal={ showModal }
                                />,
                                document.getElementById('modal')
                                )

                        }

                    </ContentWrapper>
            }

        </>
    )
}

export default ItemPage;