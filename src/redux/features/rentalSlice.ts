import { createSlice } from '@reduxjs/toolkit';

interface RentalState {
  selectedRentalId: string | null;
}

const initialState: RentalState = {
  selectedRentalId: null,
};

const rentalSlice = createSlice({
  name: 'rental',
  initialState,
  reducers: {
    setSelectedRentalId(state, action) {
      state.selectedRentalId = action.payload;
    },
  },
});

export const { setSelectedRentalId } = rentalSlice.actions;

export default rentalSlice.reducer;
