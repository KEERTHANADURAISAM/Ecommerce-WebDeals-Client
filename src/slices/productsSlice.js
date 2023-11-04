// get products
import { createSlice } from "@reduxjs/toolkit";


const prodcutsSlice = createSlice({
    name:'products',
    initialState:{
        loading:false
    },
    reducers:{
        productRequest(state,action){
            return{
                loading:true
            }
        },
        productSuccess(state,action){
            return{
            loading:false,
            product:action.payload.product,
            productCount:action.payload.count,
            resPerPage:action.payload.resPerPage
        }
    },
    productFail(state,action){
        return{
            loading:false,
            error:action.payload
        }
    }
    }
})
 
const {actions,reducer} =prodcutsSlice;
export const {productRequest,productSuccess,productFail} = actions;

export default reducer; 