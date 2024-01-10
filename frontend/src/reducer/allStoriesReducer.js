import { createSlice } from '@reduxjs/toolkit';

//services
import { getAllStories, createNewStory, updateStoryDescription, updateStoryImages, deleteOneStory } from '../services/stories';

const allStoriesSlice = createSlice({
    name: 'allStories',
    initialState: [{
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
    },
    {
        id: 4,
        createdAt: '29 11 2020',
        title: 'Marstrand',
        prevImg: 'prev1.png',
        altText: ''
    },
    {
        id: 5,
        createdAt: '29 11 2020',
        title: 'Marstrand',
        prevImg: 'prev1.png',
        altText: ''
    }],
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

export const editStoryDescription = (id, storyDescription) => {
    return async dispatch => {
        const updatedStory = await updateStoryDescription(id, storyDescription);
        dispatch(editReducerStory(updatedStory));
    }
};

export const addStoryImages = (id, storyImages) => {
    return async dispatch => {
        const updatedStory = await updateStoryImages(id, storyImages);
        dispatch(editReducerStory(updatedStory));
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
