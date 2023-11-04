import axios from "axios";
import { productFail, productRequest, productSuccess } from "../slices/productsSlice"

export const getProducts =(keyword,currentPage)=> async(dispatch)=>{
    try{
        dispatch(productRequest())
        let link =`/api/v1/products?page=${currentPage}`
        if(keyword){
            link += `&keyword=${keyword}`
        }
        const {data} = await axios.get(link);
    dispatch(productSuccess(data))
    }catch(error){
        // handle error
        dispatch(productFail(error.response.data.message))
    }
}