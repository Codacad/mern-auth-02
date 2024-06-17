import { configureStore } from "@reduxjs/toolkit";
import userApi from "./slices/userApi";
import authReducer from "./slices/authSlice"
const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware);
  },
});
export default store;
