import { createSlice } from "@reduxjs/toolkit";
export const namespace = "common";

const initialState = {
  collapsed: false,
  isChangeData: false,
};

const slice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {
    getCollapsed: (state) => {
      return {
        ...state,
      };
    },
    setCollapsed: (state, action) => {
      return {
        ...state,
        collapsed: action.payload,
      };
    },
    setChangedData: (state, action) => {
      return {
        ...state,
        isChangeData: action.payload,
      };
    },
  },
});
export const reducer = slice.reducer;

export const { getCollapsed, setCollapsed, setChangedData } = slice.actions;

export const commonSelector = (state) => state[namespace];
