import { createSlice } from '@reduxjs/toolkit';

const activeStorySlice = createSlice({
    name: 'activeStory',
    initialState: {
        active: false,
        details: {}
    },
    reducers: {
        setReducerActiveStory(state, action) {
            return {
                active: true,
                details: action.payload
            }
        },
        clearReducerActiveStory(state, action) {
            return {
                active: false,
                details: {}
            }
        }
    }
});

export const setActiveStory = ({id}) => {
    //get one story by id
    const story = {};

    return dispatch => {
        dispatch(setReducerActiveStory(story));
    }
}

export const clearActiveStory = () => {
    return dispatch => {
        dispatch(clearReducerActiveStory());
    }
}

export const { setReducerActiveStory, clearReducerActiveStory } = activeStorySlice.actions;
export default activeStorySlice.reducer;
