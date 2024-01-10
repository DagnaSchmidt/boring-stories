import { createSlice } from '@reduxjs/toolkit';

const allStoriesSlice = createSlice({
    name: 'allStories',
    initialState: [],
    reducers: {
        setAllReducerStories(state, action) {
            return action.payload;
        },
        addReducerStory(state, action) {
            return [...state, action.payload];
        },
        editReducerStory(state, action) {
            const newState = state.map(i => {
                if(i.id !== action.payload.id){
                    return i;
                }else{
                    return action.payload;
                }
            });
            return newState;
        },
        deleteReducerStory(state, action) {
            const newState = state.filter(i => i.id !== action.payload);
            return newState;
        }
    }
});


export const setAllStories = () => {
    //get all stories
    const allStories = [];

    return dispatch => {
        dispatch(setAllReducerStories(allStories));
    }
}

export const addStory = (storyContent) => {
    //post new story
    const newStory = {};

    return dispatch => {
        dispatch(addReducerStory(newStory));
    }
}

export const editStoryDescription = (storyDescription) => {
    //put story
    const updatedStory = {};

    return dispatch => {
        dispatch(editReducerStory(updatedStory));
    }
}

export const addStoryImages = (storyImages) => {
    //put story
    const updatedStory = {};

    return dispatch => {
        dispatch(editReducerStory(updatedStory));
    }
}

export const deleteStory = (id) => {
    //delete story
    const deletedStory = {};

    return dispatch => {
        dispatch(deleteReducerStory(id));
    }
}

export const { setAllReducerStories, addReducerStory, editReducerStory, deleteReducerStory } = allStoriesSlice.actions;
export default allStoriesSlice.reducer;
