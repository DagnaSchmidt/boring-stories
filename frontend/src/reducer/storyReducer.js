import { createSlice } from '@reduxjs/toolkit';

const storySlice = createSlice({
    name: 'story',
    initialState: {
        active: '1',
        new: [{}, {}, {}],
        all: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        details: {}
    },
    reducers: {
        updateReducerNewStories(state, action) {
            return {
                ...state,
                new: action.payload
            }
        },
        updateReducerActiveStory(state, action) {
            return {
                ...state,
                active: action.payload
            }
        }
    }
});

export const getNewStories = () => {
    return dispatch => {
        dispatch(updateReducerNewStories());
    }
}

export const changeActiveStory = (id) => {
    return dispatch => {
        dispatch(updateReducerActiveStory(id));
    }
}

export const { updateReducerNewStories, updateReducerActiveStory } = storySlice.actions;
export default storySlice.reducer;
