import { configureStore } from "@reduxjs/toolkit";
//import reducers
import menuReducer from "./menuReducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer
  },
});