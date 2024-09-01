import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
type TRentalState= {
    rentals: any[];
    loading: boolean;
    error: string | null;
}

const initialState: TRentalState = {
    rentals: [],
    loading: false,
    error: null,
};

// Thunks for async actions
export const createRental = createAsyncThunk(
    'rental/createRental',
    async (rentalData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/rentals', rentalData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchRentals = createAsyncThunk(
    'rental/fetchRentals',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/rentals');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const rentalSlice = createSlice({
    name: 'rental',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createRental.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createRental.fulfilled, (state, action) => {
                state.loading = false;
                // You might want to update rentals here or perform other state changes
            })
            .addCase(createRental.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchRentals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRentals.fulfilled, (state, action) => {
                state.loading = false;
                state.rentals = action.payload;
            })
            .addCase(fetchRentals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default rentalSlice.reducer;
