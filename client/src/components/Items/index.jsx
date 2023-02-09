import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/items/itemsSlice";
import ContentWrapper from "../ContentWrapper";
import Item from "../Item";
import Loader from "../Loader";

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
            <ContentWrapper>

            </ContentWrapper>
        </div>
    )
}

export default Items;