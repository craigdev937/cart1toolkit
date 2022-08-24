import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProd } from "./FetchAPI";
import { IProducts, ProductState } from "../models/Interfaces";

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
};

const ProdSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchProd.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [fetchProd.pending.toString()]: (state) => {
            state.loading = true
        },
        [fetchProd.fulfilled.type]: 
        (state, action: PayloadAction<IProducts[]>) => {
            state.loading = false,
            state.products = [...action.payload]
        },
    }
});

export const ProdReducer = ProdSlice.reducer;



