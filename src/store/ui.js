import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "card",
  page: 1,
  perPage: 4,
};

export const uiSlice = createSlice({
  initialState,
  name: "ui",
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
  },
});

export const {
  actions: { setPage, setPerPage, setView },
  reducer: uiReducer,
} = uiSlice;
