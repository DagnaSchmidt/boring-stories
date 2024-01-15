import { configureStore } from "@reduxjs/toolkit";

//reducers
import menuReducer from "./menuReducer";
import allStoriesReducer from "./allStoriesReducer";
import activeStoryReducer from "./activeStoryReducer";
import userReducer from "./userReducer";
import editStoryReducer from "./editStoryReducer";


export const store = configureStore({
  reducer: {
    menu: menuReducer,
    allStories: allStoriesReducer,
    activeStory: activeStoryReducer,
    editStory: editStoryReducer,
    user: userReducer
  },
});
