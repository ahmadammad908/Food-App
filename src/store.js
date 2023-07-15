import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./products/categoriesSlice";
import brushersReducer from "./products/brusherSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    brushers: brushersReducer,
  },
});
export default store;
