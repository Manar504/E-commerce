import { configureStore } from '@reduxjs/toolkit' 
import  ProductSlice from "./ProductSlice"
import cartSlice from "./cartSlice"
import detailSlice from './detailSlice'


export const store = configureStore({
  reducer: { 
    products:ProductSlice, 
    cart : cartSlice ,  
    Detail:detailSlice,

  },
})