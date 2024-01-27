import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: [], // Array to store hotel objects
  },
  reducers: {
    addHotel: (state, action) => {
      state.hotels.push(action.payload);
    },
    updateHotel: (state, action) => {
      const { id, updatedHotel } = action.payload;
      const index = state.hotels.findIndex((hotel) => hotel.id === id);
      if (index !== -1) {
        state.hotels[index] = { ...state.hotels[index], ...updatedHotel };
      }
    },
    deleteHotel: (state, action) => {
      state.hotels = state.hotels.filter(
        (hotel) => hotel.id !== action.payload
      );
    },
  },
});

export const { addHotel, updateHotel, deleteHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
