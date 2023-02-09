import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import { getItems } from "../../store/items/itemsSlice";
import ContentWrapper from "../ContentWrapper";
import Item from "../Item";
import Loader from "../Loader";
import styles from './styles.module.css'

const Items = () => {
    const dispatch = useDispatch();
    const { items, isLoading } = useSelector((state) => state.items)

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch]);

    if (isLoading) {
        return <Loader />
    }   

    return (
        <div>
            <ContentWrapper className={ styles.itemsGrid }>
                { items && items.map(item => <Item key={item._id} {...item}/>)}
            </ContentWrapper>
        </div>
    )
}

export default Items;