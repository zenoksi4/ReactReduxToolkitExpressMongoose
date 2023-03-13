import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import itemsService from "../services/itemsService";

export const getItem = createAsyncThunk('GET_ITEM', async (id, thunkAPI) => {
    try {
        return await itemsService.getItem(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
});

export const createItem = createAsyncThunk('CREATE_ITEM', async (itemData, thunkAPI) => {
    try {   
        return await itemsService.createItem(itemData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
});

export const deleteItem = createAsyncThunk('DELETE_ITEM', async (id, thunkAPI) => {
    try {
        return await itemsService.deleteItem(id)
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
});

const itemSlice = createSlice({
    name: 'item',

    initialState: {
        item: null,
        isError: false,
        isLoading: false,
        message: '',
        errors: null,
    },

    reducers: {
        resetPlaneErrors: (state) => {
            state.errors = null
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getItem.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.item = action.payload[0];
        });
        builder.addCase(getItem.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.item = null;
        });

        builder.addCase(createItem.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
        });
        builder.addCase(createItem.fulfilled, (state) => {
            state.isLoading = false;
            state.errors = null;
        });
        builder.addCase(createItem.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errors = action.payload;
        });

        builder.addCase(deleteItem.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(deleteItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.item = action.payload[0];
        });
        builder.addCase(deleteItem.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.item = null;
        });
    }
});

export const { resetPlaneErrors } = itemSlice.actions;

export default itemSlice.reducer;