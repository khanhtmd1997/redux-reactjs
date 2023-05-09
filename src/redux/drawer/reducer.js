import { createSlice } from "@reduxjs/toolkit";
export const namespace = "drawer";

const initialState = {
  openDrawer: false,
  children: null,
};

const slice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {
    getDrawer: (state) => {
      return {
        ...state,
      };
    },
    setDrawer: (state, action) => {
      return {
        ...state,
        openDrawer: action.payload,
      };
    },
  },
});
export const reducer = slice.reducer;

export const { getDrawer, setDrawer } = slice.actions;

export const drawerSelector = (state) => state[namespace];
