import { configureStore } from "@reduxjs/toolkit";
//import reducers
import menuReducer from "./menuReducer";
import storyReducer from "./storyReducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    story: storyReducer
  },
});
