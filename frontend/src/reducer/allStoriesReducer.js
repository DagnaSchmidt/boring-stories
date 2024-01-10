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
        editReducerStoryDescription(state, action) {
            const newState = state.map(i => {
                if(i.id !== action.payload){
                    return i;
                }else{
                    return {
                        ...i,
                        description: action.payload
                    };
                }
            });
            return newState;
        },
        editReducerStoryImages(state, action) {
            const newState = state.map(i => {
                if(i.id !== action.payload){
                    return i;
                }else{
                    return {
                        ...i,
                        images: [
                            ...i.images,
                            ...action.payload
                        ]
                    };
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

export const { setAllReducerStories, addReducerStory, editReducerStoryDescription, editReducerStoryImages, deleteReducerStory } = allStoriesSlice.actions;
export default allStoriesSlice.reducer;
