import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/items/itemsSlice";

const Items = () => {
    const dispatch = useDispatch();
    const { items, isLoading } = useSelector((state) => state.items)

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch]);

    return (
        <div>
            planes
        </div>
    )
}

export default Items;