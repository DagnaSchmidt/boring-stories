import { createSlice } from '@reduxjs/toolkit';

import { getOneStory, updateStoryDescription, updateStoryImages } from '../services/stories';

const editStorySlice = createSlice({
    name: 'editStory',
    initialState: null,
    reducers: {
        setReducerEditStory(state, action) {
            return action.payload;
        },
        clearReducerEditStory(state, action) {
            return null;
        }
    }
});

export const setEditStory = (id) => {
    return async dispatch => {
        const storyToEdit = await getOneStory(id);
        dispatch(setReducerEditStory(storyToEdit));
    }
};

export const editDescription = (id, data) => {
    return async dispatch => {
        // eslint-disable-next-line
        const editedStory = await updateStoryDescription(id, data);
        dispatch(setReducerEditStory(editedStory));
    }
};

export const addImages = (id, data) => {
    return async dispatch => {
        // eslint-disable-next-line
        const editedStory = await updateStoryImages(id, data);
        dispatch(setReducerEditStory(editedStory));
    }
};

export const { setReducerEditStory, clearReducerEditStory } = editStorySlice.actions;
export default editStorySlice.reducer;
