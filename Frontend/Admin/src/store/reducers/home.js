import { createReducer } from "@reduxjs/toolkit";

export const homeReducer = createReducer(
  {
    isAuthenticated: false,
  },
  {
    homeLogin: (state) => {
      state.loading = true;
    },
  }
);
