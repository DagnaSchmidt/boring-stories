import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        open: false,
        selected: 'none',
        sort: 'date',
        page: 'home'
    },
    reducers: {
        toggleReducerMenu(state, action) {
            return {
                ...state,
                open: !state.open,
                selected: 'none'
            }
        },
        closeReducerMenu(state, action) {
            return {
                ...state,
                open: false,
                selected: 'none'
            }
        },
        changeReducerSelected(state, action) {
            return {
                ...state,
                selected: action.payload
            }
        },
        changeReducerPage(state, action) {
            return {
                ...state,
                page: action.payload
            }
        },
        changeReducerSort(state, action) {
            return {
                ...state,
                sort: action.payload
            }
        }
    }
});

export const toggleMenu = () => {
    return dispatch => {
        dispatch(toggleReducerMenu());
    }
}

export const closeMenu = () => {
    return dispatch => {
        dispatch(closeReducerMenu());
    }
}

export const switchSelected = (selected) => {
    return dispatch => {
        dispatch(changeReducerSelected(selected));
    }
}

export const switchPage = (page) => {
    return dispatch => {
        dispatch(changeReducerPage(page));
    }
}

export const switchSort = (sort) => {
    return dispatch => {
        dispatch(changeReducerSort(sort));
    }
}

export const { toggleReducerMenu, closeReducerMenu, changeReducerSelected, changeReducerPage, changeReducerSort } = menuSlice.actions;
export default menuSlice.reducer;
