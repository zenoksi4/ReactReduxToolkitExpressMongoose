import { useState, useMemo } from "react";

export const useSortItems = (items = []) => {
    const [isPriceSort, setIsPriceSort] = useState(false);
    const [categorySort, setCategorySort] = useState("");

    const sortedItems = useMemo(() => {
        const sortableItems = [...items];

        const filteredItems = sortableItems.filter(
            (item) => categorySort === "" || item.category === categorySort
            
          );

        filteredItems.sort((first, second) => {

        if (+first.price < +second.price) {
            return isPriceSort ? 1 : -1;
        }

        if (+first.price > +second.price) {
            return isPriceSort ? -1 : 1;
        }

        return 0
        });

        return filteredItems;
    }, [isPriceSort, categorySort, items]);

    return {
        isPriceSort,
        setIsPriceSort,
        categorySort,
        setCategorySort,
        sortedItems
    }

}
