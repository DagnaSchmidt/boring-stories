import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        open: false,
        selected: null,
        sort: 'date',
        page: 'home'
    },
    reducers: {
        toggleReducerMenu(state, action) {
            return {
                ...state,
                open: !state.open
            }
        }
    }
});

export const toggleMenu = () => {
    return dispatch => {
        dispatch(toggleReducerMenu());
    }
}

export const { toggleReducerMenu } = menuSlice.actions;
export default menuSlice.reducer;