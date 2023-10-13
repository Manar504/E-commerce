import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'; 

     export const fetchProduct=createAsyncThunk('ProductSlice/fetchProduct',async()=>{
 const res = await fetch("https://fakestoreapi.com/products");
 const data = await res.json(); 
 return data;
})

export const ProductSlice = createSlice({
initialState:[],
name: "ProductSlice", 
reducers:{

}, 
extraReducers:(builder)=>{
builder.addCase(fetchProduct.fulfilled, (state ,action)=>{
    return action.payload;
})
}

}); 


export const { extraReducers } = ProductSlice.actions 
export default ProductSlice.reducer