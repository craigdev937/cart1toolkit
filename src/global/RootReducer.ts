import { configureStore } from "@reduxjs/toolkit";
import { ProdReducer } from "./ProdSlice";

export const RootReducer = configureStore({
    reducer: {
        products: ProdReducer
    },
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;



