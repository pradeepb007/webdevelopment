import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flights: [],
  selectedFlightId: 0,
};

const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    getFlights: (state, { payload }) => {
      state.flights = payload;
    },
    getSingleFlight: (state, { payload }) => {
      state.selectedFlightId = payload;
    },
  },
});

export const { getFlights } = flightSlice.actions;
export const getAllFlights = (state) => state.flights.flights;

export const { getSingleFlight } = flightSlice.actions;
export const getFlightID = (state) => state.flights.selectedFlightId;
export default flightSlice.reducer;
