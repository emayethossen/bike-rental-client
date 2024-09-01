import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
type TBikeState = {
    bikes: any[];
    bike: any;
    loading: boolean;
    error: string | null;
}

const initialState: TBikeState = {
    bikes: [],
    bike: null,
    loading: false,
    error: null,
};

// Thunks for async actions
export const fetchBikes = createAsyncThunk(
    'bike/fetchBikes',
    async (filters: any, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/bikes', { params: filters });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchBikeById = createAsyncThunk(
    'bike/fetchBikeById',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/bikes/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const bikeSlice = createSlice({
    name: 'bike',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBikes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBikes.fulfilled, (state, action) => {
                state.loading = false;
                state.bikes = action.payload;
            })
            .addCase(fetchBikes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchBikeById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBikeById.fulfilled, (state, action) => {
                state.loading = false;
                state.bike = action.payload;
            })
            .addCase(fetchBikeById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default bikeSlice.reducer;
