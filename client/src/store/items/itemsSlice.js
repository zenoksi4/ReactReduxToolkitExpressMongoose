import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import itemsService from "../services/itemsService";

export const getItems = createAsyncThunk('GET_ITEMS', async (_, thunkAPI) => {
    try {
        return await itemsService.getItems()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
});

const itemsSlice = createSlice({
    name: 'items',

    initialState: {
        items: null,
        isError: false,
        isLoading: false,
        message: ''
    },

    extraReducers: (builder) => {
        builder.addCase(getItems.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload
        });
        builder.addCase(getItems.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.items = null;
        });
    }
});

export default itemsSlice.reducer;