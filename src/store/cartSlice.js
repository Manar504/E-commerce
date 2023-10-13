import { createSlice } from '@reduxjs/toolkit';


 export const cartSlice = createSlice(({
    name: 'createSlice',
  initialState:[],
  reducers: {  

     addTocart: (state,action)=>{ 
const findRebet=state.find((product)=>product.id===action.payload.id);
        if(findRebet){ 
            findRebet.quantity+=1;

        }else{ 
            const productClone={...action.payload,quantity:1}

            state.push(productClone);
        }
         
        
        
    },
    deletFromcart:(state,action)=>{ 
    return state.filter((product)=>product.id !== action.payload.id)
    },
    clear:(state,action)=>{
        return[]
    },


}

})); 





export const {addTocart,deletFromcart, clear } = cartSlice.actions; 
export default cartSlice.reducer;
