import { createSlice } from "@reduxjs/toolkit";


const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: null,
        isError: false,
        isLoading: false,
        message: ''
    }
});

export default itemsSlice.reducer;