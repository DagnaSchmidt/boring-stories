import { createSlice } from '@reduxjs/toolkit';


const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        open: false,
        selected: 'none'
    },
    reducers: {
        toggleReducerMenu(state, action) {
            return {
                open: !state.open,
                selected: 'none'
            }
        },
        closeReducerMenu(state, action) {
            return {
                open: false,
                selected: 'none'
            }
        },
        changeReducerSelected(state, action) {
            return {
                ...state,
                selected: action.payload
            }
        }
    }
});


export const toggleMenu = () => {
    return dispatch => {
        dispatch(toggleReducerMenu());
    }
};

export const closeMenu = () => {
    return dispatch => {
        dispatch(closeReducerMenu());
    }
};

export const switchSelected = (selected) => {
    return dispatch => {
        dispatch(changeReducerSelected(selected));
    }
};

export const { toggleReducerMenu, closeReducerMenu, changeReducerSelected } = menuSlice.actions;
export default menuSlice.reducer;
