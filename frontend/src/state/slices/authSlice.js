import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: Cookies.get("authToken"),
    user: null,
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      Cookies.remove("authToken");
    },
  },
});

export const { setUser, logout, setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
