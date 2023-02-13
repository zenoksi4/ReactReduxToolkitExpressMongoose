import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './item/itemSlice';
import itemsSlice from './items/itemsSlice';

export const store = configureStore(({
    reducer: {
        items: itemsSlice,
        item: itemSlice 
    }
    
}))