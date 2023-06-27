import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFlights,
  fetchFlightById,
  updateFlightDetails,
  addAncillaryService,
  editAncillaryService,
  deleteAncillaryService,
} from "./flightService";

const initialState = {
  loading: false,
  error: "",
  flights: [],
  selectedFlight: null,
};

const flightSlice = createSlice({
  name: "flights",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFlights.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      state.loading = false;
      state.flights = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFlights.rejected, (state, action) => {
      state.loading = false;
      state.flights = [];
      state.error = action.error.message;
    });

    builder.addCase(fetchFlightById.pending, (state) => {
      state.loading = true;
      state.selectedFlight = null;
    });
    builder.addCase(fetchFlightById.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedFlight = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFlightById.rejected, (state, action) => {
      state.loading = false;
      state.selectedFlight = null;
      state.error = action.error.message;
    });

    builder.addCase(addAncillaryService.fulfilled, (state, action) => {
      state.selectedFlight = action.payload;
    });
    builder.addCase(editAncillaryService.fulfilled, (state, action) => {
      state.selectedFlight.ancillaryServices[action.meta.arg.index] =
        action.payload;
    });
    builder.addCase(deleteAncillaryService.fulfilled, (state, action) => {
      // state.selectedFlight.ancillaryServices.splice(action.payload.index, 1);
      state.selectedFlight = action.payload;
    });
  },
});

export default flightSlice.reducer;
