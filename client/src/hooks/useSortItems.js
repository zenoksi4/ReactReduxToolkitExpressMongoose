import { useState, useMemo } from "react";

export const useSortItems = (items = []) => {
    const [isDescSort, seIsDescSort] = useState(false);

    const sortedItems = useMemo(() => {
        const sortableItems = [...items];

        sortableItems.sort((first, second) => {
            if (+first.price < +second.price) {
                return isDescSort ? 1 : -1;
            }

            if (+first.price > +second.price) {
                return isDescSort ? -1 : 1;
            }

            return 0
        });

        return sortableItems;
    }, [isDescSort, items]);

    return {
        isDescSort,
        seIsDescSort,
        sortedItems
    }

}
