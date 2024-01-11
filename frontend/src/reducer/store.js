import { configureStore } from "@reduxjs/toolkit";

//reducers
import menuReducer from "./menuReducer";
import allStoriesReducer from "./allStoriesReducer";
import activeStoryReducer from "./activeStoryReducer";
import userReducer from "./userReducer";


export const store = configureStore({
  reducer: {
    menu: menuReducer,
    allStories: allStoriesReducer,
    activeStory: activeStoryReducer,
    user: userReducer
  },
});
