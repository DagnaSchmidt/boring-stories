import { createSlice } from '@reduxjs/toolkit';

//services
import { adminLogin } from '../services/login';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        // eslint-disable-next-line
        setReducerUser(state, action) {
            return action.payload;
        },
        // eslint-disable-next-line
        clearReducerUser(state, action) {
            return null;
        }
    }
});

export const login = (password) => {
    return async dispatch => {
        const newUser = await adminLogin(password);
        dispatch(setReducerUser(newUser));
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearReducerUser());
    }
}

export const { setReducerUser, clearReducerUser } = userSlice.actions;
export default userSlice.reducer;
