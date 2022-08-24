import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProducts } from "../models/Interfaces";

const URL = "https://fakestoreapi.com/products";
export const fetchProd = createAsyncThunk("producst/fetchProd", 
async () => {
    const res: Response = await fetch(URL);
    if (!res.ok) throw new Error(res.statusText);
    const products: IProducts[] = await res.json();
    return [...products];
});



