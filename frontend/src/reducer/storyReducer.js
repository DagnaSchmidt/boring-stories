import { createSlice } from '@reduxjs/toolkit';

const storySlice = createSlice({
    name: 'story',
    initialState: {
        active: 'none',
        new: [],
        all: [],
        details: {}
    },
    reducers: {
        updateReducerNewStories(state, action) {
            return {
                ...state,
                new: action.payload
            }
        }
    }
});

export const getNewStories = () => {
    return dispatch => {
        dispatch(updateReducerNewStories());
    }
}

export const { updateReducerNewStories } = storySlice.actions;
export default storySlice.reducer;
