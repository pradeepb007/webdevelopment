import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  passengers : []
}

const passengerSlice = createSlice({
  name : "passengers",
  initialState,
  reducers: {
    getPassengers:(state, {payload}) => {
      state.passengers = payload;
    }
  } 
})

export const {getPassengers} = passengerSlice.actions;
export const getAllPassengers = (state) => state.passengers.passengers;
export default passengerSlice.reducer;


