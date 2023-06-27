-----------db.json---------------

"flights": [
    {
      "id": 1,
      "flightNo": "FA-2491",
      "airline": "IndiGo",
      "source": "Hyderabad",
      "destination": "Bangalore",
      "depatureTime": "2023-05-24T18:25:43.511Z",
      "arrivalTime": "2023-05-24T22:15:13.511Z",
      "ancillaryServices": ["vouchers", "Tv", "merchandise"],
      "specialMeals": ["Veg Meal Box", "Non-Veg Meal Box", "Sandwich"],
      "inFlightShop": ["iphone earbuds", "HeadSet", "ipod"]
    }
  ]

  ------------flightService.js---------------

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../api/utils";

export const fetchFlights = createAsyncThunk("fetchFlights", async () => {
  return await axios.get(`${apiUrl}/flights`).then((response) => response.data);
});


-------flight SLice-----
import { createSlice } from "@reduxjs/toolkit";
import { fetchFlights } from "./flightService";

const initialState = {
  loading: false,
  error: "",
  flights: [],
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
  },
});

export default flightSlice.reducer;

------------Flights.jsx--------------
function Flights() {
  const username = sessionStorage.getItem("username");
  const role = sessionStorage.getItem("role");
  if (username === "admin") {
    sessionStorage.setItem("role", "admin");
  } else if (username === "staff") {
    sessionStorage.setItem("role", "staff");
  } else {
    sessionStorage.clear();
  }

  const dispatch = useDispatch();

  const flight = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  // const getFlightId = (flightId) => {
  //   dispatch(getSingleFlight(flightId));
  // };

  return (
    <>
      <div className={styles.pageHeader}>
        <Typography variant="h5" component="h2" className={styles.pageHeading}>
          Flights List
        </Typography>
      </div>

      {flight.loading && <div>Loading...</div>}
      {!flight.loading && flight.error ? (
        <div> Error: {flight.error} </div>
      ) : null}
      {!flight.loading && flight.flights.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Flight No</TableCell>
                <TableCell>Airline</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Depature Date</TableCell>
                <TableCell>Depature Time</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {flight.flights.map((flight, index) => (
                <TableRow key={index}>
                  <TableCell> {flight.id} </TableCell>
                  <TableCell>{flight.flightNo}</TableCell>
                  <TableCell>{flight.airline}</TableCell>
                  <TableCell>{flight.source}</TableCell>
                  <TableCell>{flight.destination}</TableCell>
                  <TableCell>{flight.depatureTime.substring(0, 10)}</TableCell>
                  <TableCell>{flight.depatureTime.substring(11, 16)}</TableCell>
                  <TableCell>
                  <NavLink to={`/ancillary-services/${flight.id}`}>
                            <Button
                              variant="outlined"
                              size="small"
                              component="span"                              
                            >
                              Manage Acillary
                            </Button>
                          </NavLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
}

export default Flights;

------------acillaryservice.jsx-------------

import React from 'react'

function AncillaryServices() {
  return (
    <div>Flight Details / Add / Update / Delete ancillary services, special meals, shopping items per flight </div>
  )
}

export default AncillaryServices
