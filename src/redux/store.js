import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './product';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
