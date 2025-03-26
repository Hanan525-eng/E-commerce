import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../featchers/products/ProductSlice';
import cartReducer from'../featchers/products/cart/Cartslice'
export const store = configureStore({
    reducer: {
        cart:cartReducer,
        product:productReducer
    }
})