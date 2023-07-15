// Import the functions you need from the SDKs you need
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brushers: [],
  state: "loading",
};

const brusherSlice = createSlice({
  name: " brushers",
  initialState,
  reducers: {
    setBrushers: (state, action) => action.payload,
  },
});

export default brusherSlice.reducer;
export const { setBrushers } = brusherSlice.actions;
