import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../api/utils";

export const fetchFlights = createAsyncThunk("fetchFlights", async () => {
  try {
    const response = await axios.get(`${apiUrl}/flights`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch flights");
  }
});

export const fetchFlightById = createAsyncThunk(
  "fetchFlightById",
  async (flightId) => {
    try {
      const response = await axios.get(`${apiUrl}/flights/${flightId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch flight details");
    }
  }
);

export const addAncillaryService = createAsyncThunk(
  "addAncillaryService",
  async ({ flightId, service }) => {
    try {
      const response = await axios.get(`${apiUrl}/flights/${flightId}`);
      const flight = response.data;
      const updatedAncillaryServices = [...flight.ancillaryServices, service];
      const updatedFlight = {
        ...flight,
        ancillaryServices: updatedAncillaryServices,
      };
      const updatedResponse = await axios.put(
        `${apiUrl}/flights/${flightId}`,
        updatedFlight
      );
      return updatedResponse.data;
    } catch (error) {
      throw new Error("Error adding ancillary service");
    }
  }
);

export const editAncillaryService = createAsyncThunk(
  "editAncillaryService",
  async ({ flightId, service, index }) => {
    try {
      const response = await axios.get(`${apiUrl}/flights/${flightId}`);
      const flight = response.data;

      const updatedAncillaryServices = [...flight.ancillaryServices];
      updatedAncillaryServices[index] = service;

      const updatedFlight = {
        ...flight,
        ancillaryServices: updatedAncillaryServices,
      };

      const updatedResponse = await axios.put(
        `${apiUrl}/flights/${flightId}`,
        updatedFlight
      );
      return updatedResponse.data.ancillaryServices[index];
    } catch (error) {
      console.error("Failed to update Ancillary Services:", error);
      throw error;
    }
  }
);

export const deleteAncillaryService = createAsyncThunk(
  "deleteAncillaryService",
  async ({ flightId, index }) => {
    try {
      const response = await axios.get(`${apiUrl}/flights/${flightId}`);
      const flight = response.data;

      const updatedAncillaryServices = flight.ancillaryServices.filter(
        (_, i) => i !== index
      );

      const updatedFlight = {
        ...flight,
        ancillaryServices: updatedAncillaryServices,
      };

      const updatedResponse = await axios.put(
        `${apiUrl}/flights/${flightId}`,
        updatedFlight
      );
      console.log(updatedResponse);
      return updatedResponse.data;
    } catch (error) {
      console.error("Failed to update Ancillary Services:", error);
      throw error;
    }
  }
);
