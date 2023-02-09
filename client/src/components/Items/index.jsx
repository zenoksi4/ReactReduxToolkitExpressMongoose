import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSortItems } from "../../hooks/useSortItems";
import { paths } from "../../paths";
import { getItems } from "../../store/items/itemsSlice";
import Button from "../Button";
import ContentWrapper from "../ContentWrapper";
import Item from "../Item";
import Loader from "../Loader";
import styles from './styles.module.css'

const Items = () => {
    const dispatch = useDispatch();
    const { items, isLoading } = useSelector((state) => state.items)
    const { isDescSort, seIsDescSort, sortedItems } = useSortItems(items || [])

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch]);

    if (isLoading) {
        return <Loader />
    }   

    return (
        <div>
            <div className={ styles.sort }>
                <ContentWrapper className={ styles.itemsHeader }>
                    <Button 
                    className={ styles.sortBtn }
                    onClick={() => seIsDescSort(!isDescSort)}
                    >
                        Sort by price: { `${isDescSort ? 'High to Low' : 'Low to High'}` }
                    </Button>
                    <Link 
                        to={paths.createItem } 
                        className={ styles.createItemBtn }
                    >
                        Add item
                    </Link>
                </ContentWrapper>
            </div>

            <ContentWrapper className={ styles.itemsGrid }>
                { sortedItems && sortedItems.map(item => <Item key={item._id} {...item}/>)}
            </ContentWrapper>
        </div>
    )
}

export default Items;