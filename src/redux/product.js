import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {productList: []},
  reducers: {
    addProduct: (state, action) => {
      state.productList.push(action.payload.product);
    },
  },
});
export const addProduct = productSlice.actions.addProduct;
export default productSlice.reducer;
