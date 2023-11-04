import axios from "axios";
import { getproductFail, getproductRequest, getproductSuccess} from "../slices/productSlice"

export const getProduct = id => async(dispatch)=>{
    try{
        dispatch(getproductRequest())
        const {data} = await axios.get(`/api/v1/product/${id}`);
    dispatch(getproductSuccess(data))
    }catch(error){
        // handle error
        dispatch(getproductFail(error.response.data.message))
    }
}