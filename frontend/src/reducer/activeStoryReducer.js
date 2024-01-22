import { createSlice } from '@reduxjs/toolkit';

//services
import { getOneStory } from '../services/stories';


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
        clearReducerActiveStory(state) {
            return {
                ...state,
                active: false
            }
        }
    }
});


export const setActiveStory = (id) => {
    return async dispatch => {
        const newStory = await getOneStory(id);
        dispatch(setReducerActiveStory(newStory));
    }
};

export const clearActiveStory = () => {
    return dispatch => {
        dispatch(clearReducerActiveStory());
    }
};

export const { setReducerActiveStory, clearReducerActiveStory } = activeStorySlice.actions;
export default activeStorySlice.reducer;
