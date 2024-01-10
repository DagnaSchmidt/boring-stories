import { createSlice } from '@reduxjs/toolkit';

const activeStorySlice = createSlice({
    name: 'activeStory',
    initialState: {
        active: false,
        details: {id: 1,
            createdAt: '12 04 2023',
            title: 'Oslo',
            prevImg: 'prev1.png',
            altText: '',
            description: 'Some long boring description about this story',
            images: [
                '1YBkYF6RHpc_Uy3RVLY0mreLAec3X5i-_',
                '1UwjDUGwsfyIekMP6Z0xmtlOACjj5xdZf',
                '1YdUujP2FNw8VR7dk1BxDy4auuMIm2MzU'
            ],
            localization: 'Oslo'}
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
