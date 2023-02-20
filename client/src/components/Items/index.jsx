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
    const { 
            isPriceSort,
            setIsPriceSort,
            setCategorySort,
            sortedItems
        } = useSortItems(items || [])

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch]);

    if (isLoading) {
        return <Loader />
    }   

    return (
        <div>
            <ContentWrapper className={ styles.itemsHeader }>
                <div className={ styles.sort }>

                    <Button 
                    className={ styles.sortBtn }
                    onClick={() => setIsPriceSort(!isPriceSort)}
                    >
                        Sort by price: { `${isPriceSort ? 'High to Low' : 'Low to High'}` }
                    </Button>
                    <select onClick={ (e) => {setCategorySort(e.target.value)} } className={ styles.category }>
                        <option  value="">Sort by category</option>
                        {
                           items && items.map(item => 
                           <option 
                            value={ item.category }
                            >
                                { item.category.length > 20 ? item.category.slice(0, 20) + '...': item.category }
                            </option>)
                        }
                    </select>

                </div>
                <Link 
                        to={ paths.createItem } 
                        className={ styles.createItemBtn }
                    >
                        Add item
                    </Link>
            </ContentWrapper>

            <ContentWrapper className={ styles.itemsGrid }>
                { sortedItems && sortedItems.map(item => <Item key={item._id} {...item}/>)}
            </ContentWrapper>
        </div>
    )
}

export default Items;