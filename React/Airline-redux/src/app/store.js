import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../features/flights/flightSlice";
import passengerReducer from "../features/passenger/passengerSlice";

export const store = configureStore({
  reducer: {
    flights: flightReducer,
    passengers: passengerReducer,
  },
});
