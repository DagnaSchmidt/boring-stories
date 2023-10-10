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
        toggleReducerMenu(state) {
            return {
                open: !state.open,
                ...state
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