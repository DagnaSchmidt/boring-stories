import { configureStore } from "@reduxjs/toolkit";
//import reducers
import menuReducer from "./menuReducer";
import allStoriesReducer from "./allStoriesReducer";
import activeStoryReducer from "./activeStoryReducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    allStories: allStoriesReducer,
    activeStory: activeStoryReducer
  },
});
