import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../api/userApi';

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(userApi.endpoints.getUserProfile.matchFulfilled, (state, { payload }) => {
            return { ...state, ...payload };
        });
    },
});

export default userSlice.reducer;
