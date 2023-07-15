// Import the functions you need from the SDKs you need
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categories: [],
  state: "loading",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => action.payload,
  },
});

export default categoriesSlice.reducer;
export const { setCategories } = categoriesSlice.actions;
