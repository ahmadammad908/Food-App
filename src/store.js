import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./products/categoriesSlice";
import brushersReducer from "./products/brusherSlice";
import cartSlice from "./products/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    brushers: brushersReducer,
    cart: cartSlice,
  },
});
export default store;
