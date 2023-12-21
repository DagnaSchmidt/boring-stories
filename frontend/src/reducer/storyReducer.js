import { createSlice } from '@reduxjs/toolkit';

const storySlice = createSlice({
    name: 'story',
    initialState: {
        active: false,
        new: [
            {
                id: 1,
                createdAt: '12 04 2023',
                title: 'Oslo',
                prevImg: 'prev1.png',
                altText: ''
            },
            {
                id: 2,
                createdAt: '02 06 2021',
                title: 'Hono',
                prevImg: 'prev1.png',
                altText: ''
            },
            {
                id: 3,
                createdAt: '29 11 2020',
                title: 'Marstrand',
                prevImg: 'prev1.png',
                altText: ''
        }],
        all: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        details: {
            id: 1,
            createdAt: '12 04 2023',
            title: 'Oslo',
            prevImg: 'prev1.png',
            altText: ''
        }
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
                active: true,
                details: action.payload
            }
        },
        closeReducerActiveStory(state) {
            return {
                ...state,
                active: false,
                details: {}
            }
        }
    }
});

export const getNewStories = ({id}) => {
    //fetch new stories
    //update array from answer as new
    return dispatch => {
        dispatch(updateReducerNewStories({}));
    }
}

export const changeActiveStory = (id) => {
    //fetch story details by id
    //set object from answer as details
    return dispatch => {
        dispatch(updateReducerActiveStory());
    }
}

export const closeActiveStory = () => {
    return dispatch => {
        dispatch(closeReducerActiveStory());
    }
}

export const { updateReducerNewStories, updateReducerActiveStory, closeReducerActiveStory } = storySlice.actions;
export default storySlice.reducer;
