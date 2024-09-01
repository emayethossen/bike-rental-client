import { createSlice } from '@reduxjs/toolkit';

export interface User {
    _id: string;
    role: 'user' | 'admin';
    // Add other user fields here as needed
}

type TAuthState = {
    user: null | object;
    token: string | null;
}

const initialState: TAuthState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload
            state.user = user;
            state.token = token
        },
        logout(state) {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
