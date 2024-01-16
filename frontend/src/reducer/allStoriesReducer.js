import { createSlice } from '@reduxjs/toolkit';

//services
import { getAllStories, createNewStory, deleteOneStory } from '../services/stories';

const allStoriesSlice = createSlice({
    name: 'allStories',
    initialState: [{
        id: 1,
        createdAt: '12-04-2023',
        title: 'Oslo',
        prevImg: 'prev1.png',
        altText: 'buildings in Oslo'
    }],
    reducers: {
        setAllReducerStories(state, action) {
            const newState = action.payload.reverse();
            return newState;
        },
        addReducerStory(state, action) {
            const newState = state.unshift(action.payload);
            return newState;
        },
        deleteReducerStory(state, action) {
            const newState = state.filter(i => i.id !== action.payload);
            return newState;
        }
    }
});


export const setAllStories = () => {
    return async dispatch => {
        const allStories = await getAllStories();
        dispatch(setAllReducerStories(allStories));
    }
};

export const addStory = (storyContent) => {
    return async dispatch => {
        const newStory = await createNewStory(storyContent);
        dispatch(addReducerStory(newStory));
    }
};

export const deleteStory = (id) => {
    return async dispatch => {
        // eslint-disable-next-line
        const deletedStory = await deleteOneStory(id);
        dispatch(deleteReducerStory(id));
    }
};

export const { setAllReducerStories, addReducerStory, editReducerStory, deleteReducerStory } = allStoriesSlice.actions;
export default allStoriesSlice.reducer;
