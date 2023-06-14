import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllFlights, getSingleFlight } from "./flightSlice";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Flights.module.scss";
import { NavLink } from "react-router-dom";

function Flights() {
  const dispatch = useDispatch();
  const flights = useSelector(getAllFlights);

  console.log("flights....", flights);
  // console.log("flightID....", flightID);

  const username = sessionStorage.getItem("username");
  const role = sessionStorage.getItem("role");
  if (username === "admin") {
    sessionStorage.setItem("role", "admin");
  } else if (username === "staff") {
    sessionStorage.setItem("role", "staff");
  } else {
    sessionStorage.clear();
  }

  const getFlightId = (flightId) => {
    dispatch(getSingleFlight(flightId));
  };

  return (
    <>
      <div className={styles.pageHeader}>
        <Typography variant="h5" component="h2" className={styles.pageHeading}>
          Flights List
        </Typography>
      </div>

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
            {flights?.map((flight, index) => (
              <TableRow key={index}>
                <TableCell> {flight.id} </TableCell>
                <TableCell>{flight.flightNo}</TableCell>
                <TableCell>{flight.airline}</TableCell>
                <TableCell>{flight.source}</TableCell>
                <TableCell>{flight.destination}</TableCell>
                <TableCell>{flight.depatureTime.substring(0, 10)}</TableCell>
                <TableCell>{flight.depatureTime.substring(11, 16)}</TableCell>
                <TableCell>
                  <Stack spacing={2} direction="row">
                    {role === "admin" && (
                      <>
                        <NavLink to="/manage-passengers">
                          <Button
                            variant="contained"
                            size="small"
                            component="span"
                            onClick={() => getFlightId(flight.id)}
                          >
                            Manage Passengers
                          </Button>
                        </NavLink>
                        <NavLink to="/ancillary-services">
                          <Button
                            variant="outlined"
                            size="small"
                            component="span"
                            onClick={() => getFlightId(flight.id)}
                          >
                            Manage Acillary
                          </Button>
                        </NavLink>
                      </>
                    )}

                    {role === "staff" && (
                      <>
                        <NavLink to="/checkin-passengers">
                          <Button
                            variant="contained"
                            size="small"
                            component="span"
                          >
                            Check in
                          </Button>
                        </NavLink>
                        <NavLink to="/in-flight">
                          <Button
                            variant="outlined"
                            size="small"
                            component="span"
                          >
                            In-Flight
                          </Button>
                        </NavLink>
                      </>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Flights;
