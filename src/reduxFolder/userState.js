import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: false,
};

export const userState = createSlice({
  name: "counter",
  initialState,
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true;
      state.user = {
        id: "0x0000000000...0000000000",
        wei: "x Wei",
      };
    },
    logout: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { authenticate, logout } = userState.actions;

export default userState.reducer;
