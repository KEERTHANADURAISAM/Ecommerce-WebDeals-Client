// get single product
import { createSlice } from "@reduxjs/toolkit";

const prodcutSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    product:{}
  },
  reducers: {
    getproductRequest(state, action) {
      return {
        loading: true,
      };
    },
    getproductSuccess(state, action) {
      return {
        loading: false,
        product: action.payload.product,
      };
    },
    getproductFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = prodcutSlice;
export const { getproductRequest, getproductSuccess, getproductFail } = actions;

export default reducer;
